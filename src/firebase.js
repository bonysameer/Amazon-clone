import firebase from 'firebase/compat/app';
// import firebase from 'firebase'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyC7-evIzs5WwaDkTW0RVH07yzSwL-rQ-Wg",
   authDomain: "clone-challenge-6ed27.firebaseapp.com",
   projectId: "clone-challenge-6ed27",
   storageBucket: "clone-challenge-6ed27.appspot.com",
   messagingSenderId: "921849394408",
   appId: "1:921849394408:web:e5379f8248b406b76e055d",
   measurementId: "G-E0SX5VNJCK"
 };

 const firebaseApp = firebase.initializeApp(firebaseConfig);

 const db = firebaseApp.firestore();
 const auth = firebase.auth();

 export {db, auth};