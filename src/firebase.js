import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDmJPOZfBSLHbcLLRJAEqHD_MvHcYhY_EE",
  authDomain: "porfolio-gituatu.firebaseapp.com",
  projectId: "porfolio-gituatu",
  storageBucket: "porfolio-gituatu.appspot.com",
  messagingSenderId: "649171678001",
  appId: "1:649171678001:web:6ad93c44d520d8251e3610"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db= getFirestore();