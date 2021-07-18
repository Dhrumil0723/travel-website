import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyABXNvIuulwrIbylke2k__asndzfhbgdxE",
  authDomain: "evolving-tourism.firebaseapp.com",
  projectId: "evolving-tourism",
  storageBucket: "evolving-tourism.appspot.com",
  messagingSenderId: "341769320713",
  appId: "1:341769320713:web:4686ed5a29b97609617bd8",
  measurementId: "G-4HS3M5Z9F6",
});

const db = firebaseApp.firestore();

export default db;
