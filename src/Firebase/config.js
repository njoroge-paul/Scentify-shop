/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOD4JAeNG2wrs-wV9zHhIx4IyRIfLYe-I",
  authDomain: "scentify-website.firebaseapp.com",
  projectId: "scentify-website",
  storageBucket: "scentify-website.appspot.com",
  messagingSenderId: "1063025359461",
  appId: "1:1063025359461:web:9a26f41bac3e04d73fe48c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);