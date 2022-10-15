import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAgnDKd9ABvbKM8gfzciHonsliI6aDYyLQ",
  authDomain: "line-clone-f42a0.firebaseapp.com",
  projectId: "line-clone-f42a0",
  storageBucket: "line-clone-f42a0.appspot.com",
  messagingSenderId: "275521965712",
  appId: "1:275521965712:web:6303b2e3a59dc699e35215"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth}
