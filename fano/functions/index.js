const functions = require("firebase-functions");
const admin = require('firebase-admin');
const unzipper = require('unzipper');
admin.initializeApp();


// REF: see [https://leolabs.org/blog/firebase-cloud-functions-unzip-files]
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
                        // TODO: create new entry in database with image metadata
                  })
                  .promise()
        await file.delete()

    })