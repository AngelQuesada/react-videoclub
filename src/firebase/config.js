// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDZ8iWT6UW1GcWrCEIdpZ1Q7w-0zIK6zxo",
  authDomain: "react-videoclub.firebaseapp.com",
  projectId: "react-videoclub",
  storageBucket: "react-videoclub.appspot.com",
  messagingSenderId: "346047448025",
  appId: "1:346047448025:web:f5eeeec703de4423154fc8",
  measurementId: "G-PB2WKS3NKL"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );
