import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  increment,
  serverTimestamp,
  collection,
  query,
  where,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDrvltDfr_3ioGeU63I_XnO-915yx7LiB0",
  authDomain: "web-finder-7dbd5.firebaseapp.com",
  projectId: "web-finder-7dbd5",
  storageBucket: "web-finder-7dbd5.appspot.com",
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
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  doc,
  getDoc,
  updateDoc,
  increment,
  serverTimestamp,
  collection,
  query,
  where,
  getDocs
};
