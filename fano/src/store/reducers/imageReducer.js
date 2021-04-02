const initState = {
    uploadError: null,
    uploadState: null,
    fetchError: null,
    fetchedImage: null,
    annotationError: null
}

export const imageReducer = (state = initState, action) => {

    switch (action.type) {
        case "IMAGES_UPLOAD_START":
            console.log("image upload started")
            return {
                ...state,
                uploadError: null,
                uploadState: "started"
            }
        case "IMAGES_UPLOAD_SUCCESSFUL":
            console.log("image upload successful")
            return {
                ...state,
                uploadError: null,
                uploadState: "finished"
            }
        case "IMAGES_UPLOAD_ERROR":
            console.log("image upload error")
            console.log(action.err)
            return {
                ...state,
                uploadError: action.err,
                uploadState: null
            }
        case "ANNOTATION_COMMIT_SUCCESSFUL":
            console.log("annotation commit successful")
            return {
                ...state,
                annotationError: null
            }
        case "ANNOTATION_COMMIT_ERROR":
            console.log("annotation commit error")
            console.log(action.err)
            return {
                ...state,
                annotationError: action.err
            }
        case "ANNOTATION_EXPORT_SUCCESSFUL":
            console.log("annotation export successful")
            return {
                ...state,
                annotationsJson: action.blob,
                annotationError: null
            }
        case "ANNOTATION_EXPORT_ERROR":
            console.log("annotation commit error")
            console.log(action.err)
            return {
                ...state,
                annotationsJson: null,
                annotationError: action.err
            }
        case "IMAGE_FETCH_SUCCESSFUL":
            console.log(`image ${action.imageId} with url ${action.imageUrl} fetched succesfully`)
            return {
                ...state,
                fetchedImage: {
                    imageId: action.imageId,
                    imageUrl: action.imageUrl,
                    imageName: action.imageName
                },
                fetchError: null
            }
        case "IMAGE_FETCH_ERROR":
            console.log("image fetch error")
            console.log(action.err)
            return {
                ...state,
                fetchedImage: null,
                fetchError: action.err
            }
        default:
            return state
    }
}