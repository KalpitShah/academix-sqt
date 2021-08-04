import firebase from "firebase/app";
import "firebase/firestore"
var firebaseConfig = {
  apiKey: "AIzaSyCMKjqcuExzGlA47c-VPaPbBpuH-KHSEEQ",
  authDomain: "academix-development.firebaseapp.com",
  projectId: "academix-development",
  storageBucket: "academix-development.appspot.com",
  messagingSenderId: "111279454355",
  appId: "1:111279454355:web:56b214029d8dd81c39b566",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// var db = firebase.firestore();

// export {db}
export default firebase