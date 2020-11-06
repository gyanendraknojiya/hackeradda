// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';


// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
    apiKey: "AIzaSyBj6_gMFRLKCPQFd8XqhkHg03NgYiFUiLc",
    authDomain: "hackeradda-80d53.firebaseapp.com",
    databaseURL: "https://hackeradda-80d53.firebaseio.com",
    projectId: "hackeradda-80d53",
    storageBucket: "hackeradda-80d53.appspot.com",
    messagingSenderId: "614471275629",
    appId: "1:614471275629:web:a3bf0e68735b00c5df1b64"
  };

firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const firestore = firebase.firestore();


export default firebase;

  