import { firebaseReducer } from 'react-redux-firebase'
import {firestoreReducer} from 'redux-firestore'
import {authReducer} from './authReducer'
import {imageReducer} from './imageReducer'

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    image: imageReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

export default rootReducer