import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBpRuhk3q6RYO3Io1tSiLcR5pPbL0XOuQg",
  authDomain: "bubblegram-b4120.firebaseapp.com",
  projectId: "bubblegram-b4120",
  storageBucket: "bubblegram-b4120.appspot.com",
  messagingSenderId: "1068474181110",
  appId: "1:1068474181110:web:53a426e10f50d8e474d3d7"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
