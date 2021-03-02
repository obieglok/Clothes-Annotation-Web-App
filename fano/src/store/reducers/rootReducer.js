import { firebaseReducer } from 'react-redux-firebase'
import {firestoreReducer} from 'redux-firestore'
import {authReducer} from './authReducer'

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

export default rootReducer