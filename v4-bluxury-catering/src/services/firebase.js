import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCPYaotOuUu1R6RiGPfop7WifhfcmZgYHk",
  authDomain: "bluxury-catering.firebaseapp.com",
  databaseURL: "https://bluxury-catering.firebaseio.com",
  projectId: "bluxury-catering",
  storageBucket: "bluxury-catering.appspot.com",
  messagingSenderId: "73281934969",
  appId: "1:73281934969:web:5fb290eac07b81814326a8",
  measurementId: "G-5GC0MKS63S",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const storage = firebase.storage();

export { auth, storage, firebase as default };
