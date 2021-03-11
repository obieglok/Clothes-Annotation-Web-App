const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {

    switch(action.type) {
        case "LOGIN_ERROR":
            console.log("login error")
            return {
                ...state,
                authError: action.err
            }
        case "LOGIN_SUCCESS":
            console.log("login successful")
            return {
                ...state,
                authError: null
            }
        default:
            return state
    }
}