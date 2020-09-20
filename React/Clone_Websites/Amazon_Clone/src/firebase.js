import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC-Y5da7LnuCSoQt-AfUllyz4iQLFkhJTM",
  authDomain: "clone-ec4f9.firebaseapp.com",
  databaseURL: "https://clone-ec4f9.firebaseio.com",
  projectId: "clone-ec4f9",
  storageBucket: "clone-ec4f9.appspot.com",
  messagingSenderId: "2893005042",
  appId: "1:2893005042:web:b29936ded08025a442906b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
