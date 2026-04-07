import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtL7QSCc9o6md32YK0GymgSEb87WXXvi8",
  authDomain: "care-n-cure-clinic.firebaseapp.com",
  projectId: "care-n-cure-clinic",
  storageBucket: "care-n-cure-clinic.firebasestorage.app",
  messagingSenderId: "996899319961",
  appId: "1:996899319961:web:6505977f664678eafb0808",
  measurementId: "G-PHK954YXQV",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);
