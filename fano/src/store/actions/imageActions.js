/*
Fetches next image URL nad ID. 
Places it in Redux store
*/
export const fetchNextImage = () => {
    return async(dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
        const firebase = getFirebase()

        var query = firestore.collection("images")
            .limit(1)
            .orderBy("annotationsCounter")
        try {
            const image = await query.get()
            if (image.exists) {
                const { imageName, id } = image.data()
                    // consider refactoring to use gs// url to reference object
                const imageUrl = await firebase.storage().ref()
                    .child("images").child(imageName)
                    .getDownloadURL()
                dispatch({ type: "IMAGE_FETCH_SUCCESSFUL", imageUrl, imageId: id })
            }
        } catch (err) {
            dispatch({ type: "IMAGE_FETCH_ERROR", imageUrl: null, imageId: null, err })
        }
    }
}

/*
Commits annotation of an image to database and updates annotation counters
annotation object structure: 
    {
        imageId: <id of the image (not the name)>
        content: {
            <object containing annotation content>
        }
    }
*/
export const commitAnnotation = (annotation) => {
    return async(dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore()
        const firebase = getFirebase()
        const state = getState()
        const userId = state.firebase.auth.uid
        const { imageId, content } = annotation
        try {
            // create new annotation doc
            await firestore.collection("images").doc(imageId)
                .collection("annotations").add({
                    imageId,
                    worker: userId,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                    content
                })
                // this bit could be implemented as cloud function (more appropriate)
            await firestore.collection("images").doc(imageId).update({
                annotationsCounter: firebase.firestore.FieldValue.increment(1)
            })
            await firestore.collection("users").doc(userId).update({
                annotationsCounter: firebase.firestore.FieldValue.increment(1)
            })
            dispatch({ type: "ANNOTATION_COMMIT_SUCCESSFUL" })
        } catch (err) {
            dispatch({ type: "ANNOTATION_COMMIT_ERROR", err })
        }
    }
}

export const exportAnnotations = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase()
        console.log("export annotations called")
        try {
            const exportAnnotationsFunc = firebase.functions().httpsCallable('exportAnnotations')

            exportAnnotationsFunc().then(result => {
                console.log(result)
                const blob = new Blob([JSON.stringify(result, null, 2)])
                dispatch({ type: "ANNOTATION_EXPORT_SUCCESSFUL", blob })

            })
        } catch (err) {
            console.log(err)
        }


    }
}

export const uploadImages = (file) => {
    return async(dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore()
        const firebase = getFirebase()

        try {
            dispatch({ type: "IMAGES_UPLOAD_START" })
            var fileRef = firebase.storage().ref().child(file.name)
            const { snapshot, error } = await fileRef.put(file)
            dispatch({ type: "IMAGES_UPLOAD_SUCCESSFUL" })
        } catch (err) {
            dispatch({ type: "IMAGES_UPLOAD_ERROR", err })
        }
    }
}