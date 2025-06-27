// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIoYAU_2JtfYU7mB5Tx4fp6qk_zyzGjTo",
  authDomain: "my-portfolio-e698f.firebaseapp.com",
  projectId: "my-portfolio-e698f",
  storageBucket: "my-portfolio-e698f.firebasestorage.app",
  messagingSenderId: "504491502261",
  appId: "1:504491502261:web:4a2d9ebb89d5068849acfc",
  measurementId: "G-E99T36Y59Q"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
