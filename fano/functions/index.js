const functions = require("firebase-functions");
const admin = require('firebase-admin');
const unzipper = require('unzipper');
admin.initializeApp();

//auth info
exports.addAdminRole = functions.https.onCall(async (data, context) => {
    // check request is made by an admin
    if (context.auth.token.admin !== true) {
        return {error: 'only admins can add other admins, sucker'}
    }
    try {
        //get user
        const user = await admin.auth().getUserByEmail(data.email)
        
        // set admin claims
        await admin.auth().setCustomUserClaims(user.uid, {
            admin: true
        })

        // update database
        await admin.firestore().collection('users').doc(user.uid).update({ 
            isAdmin: true,
        })
        
        // return success
        return {
            message: `Success ${data.email} has been made an admin`
        }
    }
    catch(err)  {
        return err
    }
});


// REF: see [https://leolabs.org/blog/firebase-cloud-functions-unzip-files]
exports.unpackZip = functions
    .runWith({ timeoutSeconds: 300 })
    .storage.bucket()
    .object()
    .onFinalize(async(obj) => {
        const file = admin.storage().bucket(obj.bucket).file(obj.name)

        // only deal with ZIP archives
        if (!file.name.endsWith('.zip')) return

        await file.createReadStream()
            .pipe(unzipper.Parse())
            .on('entry', entry => {
                const filePath = `images/${entry.path}`
                const destination = admin.storage()
                    .bucket()
                    .file(filePath)
                entry.pipe(destination.createWriteStream())

                // Create database record
                admin.firestore().collection("images").add({
                    imageName: entry.path,
                    imageURL: filePath,
                    annotationsCounter: 0
                }).then(() => {
                    console.log("database record created")
                })

            })
            .promise()
        await file.delete()
    })

exports.exportAnnotations = functions
    .https.onCall(async(data, context) => {
        // check request is made by an admin
        if (context.auth.token.admin !== true) {
            return { error: 'only admins can request export annotation' }
        }
        let resp = {}
        let annotations = {}
        try {
            annotations = await admin.firestore().collectionGroup("annotations").get()
        } catch (err) {
            return {
                error: err
            }
        }

        if (annotations.empty) {
            console.log("no new annotations")
            return {
                error: "No new annotations available"
            }
        }

        annotations.docs.forEach(doc => {
            let docData = doc.data()
            if (!resp.hasOwnProperty(doc.data().imageName)) {
                resp[docData.imageName] = {}
            }
            resp[docData.imageName][doc.id] = {
                ...docData
            }
        })

        return resp
    })