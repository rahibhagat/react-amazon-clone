import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTADtVaG1ZaIPBsIGZxY0YW5OhMxTBp60",
  authDomain: "clone-2752e.firebaseapp.com",
  projectId: "clone-2752e",
  storageBucket: "clone-2752e.appspot.com",
  messagingSenderId: "954774579505",
  appId: "1:954774579505:web:e1c456ba54e98e80dbe810",
  measurementId: "G-GL33E0BVWX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
