// TODO fetchNextImage

// TODO newAnnotation

export const uploadImages = (file) => {
    return async (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore()
        const firebase = getFirebase()

        try {
            var storageRef = firebase.storage().ref().child(file.name)
            dispatch({ type: "IMAGES_UPLOAD_START"})
            const { snapshot, error } = await fileRef.put(file)
            dispatch({ type: "IMAGES_UPLOAD_SUCCESFUL"})
        }
        catch (err) {
            dispatch({ type: "IMAGES_UPLOAD_ERROR", err })
        }
}
