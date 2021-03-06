// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAl5oKCMcAgllsxoHrKLW58pN8R9dvvhDw",
  authDomain: "todo-suitejar.firebaseapp.com",
  projectId: "todo-suitejar",
  storageBucket: "todo-suitejar.appspot.com",
  messagingSenderId: "809523691912",
  appId: "1:809523691912:web:852cf7e629c3ecef4efa3d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// SignInWithGoogle
const googleProvider = new GoogleAuthProvider();
const SignInWithGoogle = () => signInWithPopup(auth, googleProvider);

// Logout
const logout = () => signOut(auth);

export { auth, SignInWithGoogle, db, logout };
