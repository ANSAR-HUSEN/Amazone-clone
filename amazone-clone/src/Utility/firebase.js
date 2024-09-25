// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import {getAuth} from 'firebase/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpRkeS1ufcU5Z2rH_X5Oe0Fu8H2dqMFaY",
  authDomain: "clone-475dd.firebaseapp.com",
  projectId: "clone-475dd",
  storageBucket: "clone-475dd.appspot.com",
  messagingSenderId: "125423033644",
  appId: "1:125423033644:web:93abf78c59774f58f4a089"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const db = app.firestore();