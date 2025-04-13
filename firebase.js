import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  increment,
  collection,
  getDocs,
  query,
  where,
  getCountFromServer
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDrvltDfr_3ioGeU63I_XnO-915yx7LiB0",
  authDomain: "web-finder-7dbd5.firebaseapp.com",
  projectId: "web-finder-7dbd5",
  storageBucket: "web-finder-7dbd5.firebasestorage.app",
  messagingSenderId: "256985326029",
  appId: "1:256985326029:web:b15eeaf841a399ae1fe484",
  measurementId: "G-NVHD1F5RS6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  increment,
  collection,
  getDocs,
  query,
  where,
  getCountFromServer
};
