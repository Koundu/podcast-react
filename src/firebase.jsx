// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsjYNpYV-nkUi1UeMnrD_QqpCc4e8hhT0",
  authDomain: "podcast-react-b7dae.firebaseapp.com",
  projectId: "podcast-react-b7dae",
  storageBucket: "podcast-react-b7dae.appspot.com",
  messagingSenderId: "943805839744",
  appId: "1:943805839744:web:7c463f4a12d30c62dde965",
  measurementId: "G-6K2G98DZGL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export {auth, db, storage};