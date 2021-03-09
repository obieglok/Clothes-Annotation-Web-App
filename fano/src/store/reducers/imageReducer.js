const initState = {
    uploadError: null,
    uploadState: null
}

const authReducer = (state = initState, action) => {

    switch(action.type) {
        case "IMAGES_UPLOAD_START":
            console.log("image upload started")
            return {
                ...state,
                uploadError: null,
                uploadState: "started"
            }
        case "IMAGES_UPLOAD_SUCCESFUL":
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
        default:
            return state
    }
}