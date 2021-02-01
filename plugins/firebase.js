import firebase from "firebase/app";
require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");

const firebaseConfig = {
    apiKey: "AIzaSyDXrFZny_1M0hz2epYC9uxHWa1NMfgcfnk",
    authDomain: "nuxt-crud-af5b3.firebaseapp.com",
    projectId: "nuxt-crud-af5b3",
    storageBucket: "nuxt-crud-af5b3.appspot.com",
    messagingSenderId: "7695228251",
    appId: "1:7695228251:web:7167b367ac69674d5e0e7e"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  
  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  
  export {firebase, db, auth, storage}