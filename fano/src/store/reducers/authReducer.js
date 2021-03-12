const initState = {
    authError: null
}

export const authReducer = (state = initState, action) => {

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
    
        case "SIGNOUT_SUCCESS":
            console.log("signout successful")
            return {
                ...state,
                authError: null
            }
        case "SIGNOUT_ERROR":
            console.log("signout error")
            return {
                ...state,
                authError: action.err
            }
        default:
            return state
    }
}

export default authReducer