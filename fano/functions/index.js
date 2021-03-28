const functions = require("firebase-functions");
const admin = require('firebase-admin');
const unzipper = require('unzipper');
admin.initializeApp();

//auth info
exports.addAdminRole = functions.https.onCall((data, context) => {
    //get user
    return admin.auth().getUserByEmail(data.email).then(user => {
        return admin.auth().setCustomUserClaims(user.uid,{
            admin: true
        });
    }).then(()=>{
        return {
            message: 'Success ${data.email} has been made an admin'
        }
    }).catch(err => {
        return err;
    });
});


// REF: see [https://leolabs.org/blog/firebase-cloud-functions-unzip-files]
exports.unpackZip = functions
    .runWith({timeoutSeconds: 300})
    .storage.bucket()
    .object()
    .onFinalize(async (obj) => {
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
                        admin.firestore().collection("images").add(
                            {
                                imageName: entry.path,
                                imageURL: filePath,
                                annotationsCounter: 0
                            }
                        ).then(() => {
                            console.log("database record created")
                        })
                        
                  })
                  .promise()
        await file.delete()
    })