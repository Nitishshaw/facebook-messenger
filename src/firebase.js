// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBpApG7R5NgQPBalWXNQcuoCZBIAcW_IV4",
    authDomain: "facebook-messenger-3c4c1.firebaseapp.com",
    databaseURL: "https://facebook-messenger-3c4c1.firebaseio.com",
    projectId: "facebook-messenger-3c4c1",
    storageBucket: "facebook-messenger-3c4c1.appspot.com",
    messagingSenderId: "917489154532",
    appId: "1:917489154532:web:5e831c9c036f3f6a32eff1",
    measurementId: "G-KNFV78B03B"
  } );
 
const db = firebaseApp.firestore();

export default db;