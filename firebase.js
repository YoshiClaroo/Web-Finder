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
  getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Configuración de tu proyecto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDrvltDfr_3ioGeU63I_XnO-915yx7LiB0",
  authDomain: "web-finder-7dbd5.firebaseapp.com",
  projectId: "web-finder-7dbd5",
  storageBucket: "web-finder-7dbd5.firebasestorage.app",
  messagingSenderId: "256985326029",
  appId: "1:256985326029:web:b15eeaf841a399ae1fe484",
  measurementId: "G-NVHD1F5RS6"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Obtener servicios de Firebase
const auth = getAuth(app);
const db = getFirestore(app);

// Exportar solo lo necesario
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
  getDocs
};
