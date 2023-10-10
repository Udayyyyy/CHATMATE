import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuWiuYQKEt-Xbscxudt-RFtaT1LZmLoEE",
  authDomain: "chatmate-14766.firebaseapp.com",
  projectId: "chatmate-14766",
  storageBucket: "chatmate-14766.appspot.com",
  messagingSenderId: "670359208308",
  appId: "1:670359208308:web:04bb6e2363197aab216c21",
  measurementId: "G-RW7NX2WPHR",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
