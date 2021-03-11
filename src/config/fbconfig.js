import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/functions'
import 'firebase/auth'
import 'firebase/firebase-storage'


// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBBKyWDWoFa0uOQdDhfEgbDpD24ykvOWCE",
    authDomain: "fano-6b50c.firebaseapp.com",
    projectId: "fano-6b50c",
    storageBucket: "fano-6b50c.appspot.com",
    messagingSenderId: "204958689363",
    appId: "1:204958689363:web:28270c5954d07889bf7ea6",
    measurementId: "G-TJN187GGTM"
  };

  firebase.initializeApp(firebaseConfig)
  firebase.firestore()
  firebase.storage()

  export default firebase
