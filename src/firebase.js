import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBfynwsYHOR1xTMwHel03QSvdoL24IaUUs",
  authDomain: "line-clone-64650.firebaseapp.com",
  projectId: "line-clone-64650",
  storageBucket: "line-clone-64650.appspot.com",
  messagingSenderId: "565803439297",
  appId: "1:565803439297:web:fdf19b6a949dbcc0a33040"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth}
