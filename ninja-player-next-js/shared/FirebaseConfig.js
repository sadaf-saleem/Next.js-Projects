import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";  // ✅ add karo

const firebaseConfig = {
  apiKey: "AIzaSyDArdDKGGSZFpEBSj4xgP1TZJyOtsIjZlk",
  authDomain: "ninja-player-104a2.firebaseapp.com",
  projectId: "ninja-player-104a2",
  storageBucket: "ninja-player-104a2.firebasestorage.app",
  messagingSenderId: "14877426373",
  appId: "1:14877426373:web:cb42092405b06694dca6ac"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);  // ✅ yeh add karo
export default app;