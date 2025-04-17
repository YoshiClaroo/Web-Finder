import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup
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
  getCountFromServer
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Configuración de Firebase (usa tus datos reales)
const firebaseConfig = {
  apiKey: "AIzaSyDrvltDfr_3ioGeU63I_XnO-915yx7LiB0",
  authDomain: "web-finder-7dbd5.firebaseapp.com",
  projectId: "web-finder-7dbd5",
  storageBucket: "web-finder-7dbd5.appspot.com",
  messagingSenderId: "256985326029",
  appId: "1:256985326029:web:b15eeaf841a399ae1fe484",
  measurementId: "G-NVHD1F5RS6"
};

// Inicialización de Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Configuración de proveedor de Google
const googleProvider = new GoogleAuthProvider();

// Funciones de autenticación mejoradas
const signUpWithEmail = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // Crear documento de usuario en Firestore
    await setDoc(doc(db, "users", userCredential.user.uid), {
      email: userCredential.user.email,
      points: 100, // Puntos iniciales
      createdAt: serverTimestamp(),
      lastLogin: serverTimestamp()
    });
    return userCredential;
  } catch (error) {
    console.error("Error en registro:", error);
    throw error;
  }
};

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    // Verificar si es un usuario nuevo
    const userDoc = await getDoc(doc(db, "users", result.user.uid));
    if (!userDoc.exists()) {
      await setDoc(doc(db, "users", result.user.uid), {
        email: result.user.email,
        points: 100,
        createdAt: serverTimestamp(),
        lastLogin: serverTimestamp()
      });
    }
    return result;
  } catch (error) {
    console.error("Error en login con Google:", error);
    throw error;
  }
};

// Exportación de funciones
export {
  auth,
  db,
  // Autenticación
  createUserWithEmailAndPassword: signUpWithEmail,
  signInWithEmailAndPassword,
  signInWithGoogle,
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
  // Proveedor Google
  GoogleAuthProvider
};
