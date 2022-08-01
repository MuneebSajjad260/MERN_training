import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'
const firebaseConfig = {
  apiKey: "AIzaSyCzrIvg2LUBo9rRpJmiMgyI0rTxcFUMMBA",
  authDomain: "fb-crud-7c3e1.firebaseapp.com",
  projectId: "fb-crud-7c3e1",
  storageBucket: "fb-crud-7c3e1.appspot.com",
  messagingSenderId: "623369010210",
  appId: "1:623369010210:web:4a58af70f57e9b982bde7b",
  measurementId: "G-1K7KNQH4LM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getDatabase (app)