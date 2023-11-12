// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDZ7TqBRmE_EbksfArbFeZqs7CLe1FRlz0",
  authDomain: "e-commerce-project-f725e.firebaseapp.com",
  projectId: "e-commerce-project-f725e",
  storageBucket: "e-commerce-project-f725e.appspot.com",
  messagingSenderId: "179121877692",
  appId: "1:179121877692:web:3e6a401db04e85c4ef96b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
