import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  increment,
  collection,
  query,
  where,
  getDocs,
  serverTimestamp,
  getCountFromServer,
  writeBatch
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Configuración de Firebase (verifica que coincida con tu proyecto)
const firebaseConfig = {
  apiKey: "AIzaSyDrvltDfr_3ioGeU63I_XnO-915yx7LiB0",
  authDomain: "web-finder-7dbd5.firebaseapp.com",
  projectId: "web-finder-7dbd5",
  storageBucket: "web-finder-7dbd5.appspot.com",
  messagingSenderId: "256985326029",
  appId: "1:256985326029:web:b15eeaf841a399ae1fe484",
  measurementId: "G-NVHD1F5RS6"
};

// Inicialización
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Función para crear usuario con documento inicial
const customCreateUser = async (email, password, additionalData = {}) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    // Crear documento del usuario en Firestore
    await setDoc(doc(db, "users", userCredential.user.uid), {
      email: email,
      points: 100, // Puntos iniciales
      createdAt: serverTimestamp(),
      lastLogin: serverTimestamp(),
      ...additionalData
    });

    // Opcional: enviar verificación por email
    await sendEmailVerification(userCredential.user);
    
    return userCredential;
  } catch (error) {
    console.error("Error en registro:", error);
    throw error;
  }
};

// Función para obtener datos de usuario con verificación
const getUserData = async (userId) => {
  try {
    const userDoc = await getDoc(doc(db, "users", userId));
    if (userDoc.exists()) {
      return userDoc.data();
    }
    return null;
  } catch (error) {
    console.error("Error obteniendo datos de usuario:", error);
    throw error;
  }
};

// Exportaciones
export {
  auth,
  db,
  // Autenticación
  createUserWithEmailAndPassword: customCreateUser, // Usamos nuestra función mejorada
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  // Firestore
  doc,
  setDoc,
  getDoc,
  updateDoc,
  increment,
  collection,
  query,
  where,
  getDocs,
  serverTimestamp,
  getCountFromServer,
  writeBatch,
  // Funciones adicionales
  getUserData
};
