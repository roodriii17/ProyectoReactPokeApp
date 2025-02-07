import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiNRuXCgpNFyssi-5Cr-Kv03kuih0osqw",
  authDomain: "proyecto-pokeapi.firebaseapp.com",
  projectId: "proyecto-pokeapi",
  storageBucket: "proyecto-pokeapi.appspot.com",
  messagingSenderId: "649697336479",
  appId: "1:649697336479:web:c11f782e0e81b80fe196aa",
  measurementId: "G-HHVLCTNGCD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, app, analytics };