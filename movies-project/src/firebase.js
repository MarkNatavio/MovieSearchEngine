
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseApp = initializeApp({
  apiKey: "AIzaSyCngC-vjqYBaKaFN5OJ4dVjt081cgdKFx0",
  authDomain: "websitedesignproject-57e22.firebaseapp.com",
  projectId: "websitedesignproject-57e22",
  storageBucket: "websitedesignproject-57e22.appspot.com",
  messagingSenderId: "103901973054",
  appId: "1:103901973054:web:8f7c937d0ba087866f9f6f"
});

export const db = getFirestore(firebaseApp);
export const auth = getAuth();

export default firebaseApp;