import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/functions'
import 'firebase/auth'
import 'firebase/firebase-storage'


// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCylhU-a79i_Hoqvqv6Cof8chZqPRunow4",
    authDomain: "fano-experiments.firebaseapp.com",
    projectId: "fano-experiments",
    storageBucket: "fano-experiments.appspot.com",
    messagingSenderId: "486049838778",
    appId: "1:486049838778:web:fcb7726c3ed8084c49b483"

};

firebase.initializeApp(firebaseConfig)
firebase.firestore()
firebase.storage()

export default firebase