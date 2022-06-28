import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyByLQp2WoerCmRIaAmq060hhrSqcAx1_EE",
    authDomain: "project-71-f63e5.firebaseapp.com",
    projectId: "project-71-f63e5",
    storageBucket: "project-71-f63e5.appspot.com",
    messagingSenderId: "336560468593",
    appId: "1:336560468593:web:3e21509b0c786b7df761d0"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
