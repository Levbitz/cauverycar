import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDi1W7TB9R8grnde7XtGaSLfSUlG4PpjzE",
  authDomain: "cauvery-app.firebaseapp.com",
  projectId: "cauvery-app",
  storageBucket: "cauvery-app.appspot.com",
  messagingSenderId: "103056296249",
  appId: "1:103056296249:web:48795493cfbbf40e8140e8",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
