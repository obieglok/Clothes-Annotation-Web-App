const functions = require("firebase-functions");
const admin = require('firebase-admin');
const unzipper = require('unzipper');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.unpackZip = functions
    .runWith({timeoutSeconds: 300})
    .storage.bucket()
    .object()
    .onFinalize(async (obj) => {
        const file = firebase.storage().bucket(obj.bucket).file(obj.name)

        // only deal with ZIP archives
        if (!file.name.endsWith('.zip')) return

        await file.createReadStream()
                  .pipe(unzipper.Parse())
                  .on('entry', entry => {
                        const destination = firebase.storage()
                                                  .bucket()
                                                  .file(`${file.name.replace('.', '_')}/${entry.path}`)
                        entry.pipe(destination.createWriteStream())
                  })
                  .promise()
        await file.delete()
    })