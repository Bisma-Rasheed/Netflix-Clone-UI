// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2PeJhxB1ahqM7NtnmWVithqo-WLGwq60",
  authDomain: "react-netflix-clone-79fef.firebaseapp.com",
  projectId: "react-netflix-clone-79fef",
  storageBucket: "react-netflix-clone-79fef.appspot.com",
  messagingSenderId: "617323278038",
  appId: "1:617323278038:web:5878ab0729f62c6ca26377",
  measurementId: "G-ELP4EGT6BP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

//export default { firebase, firebaseAuth };
