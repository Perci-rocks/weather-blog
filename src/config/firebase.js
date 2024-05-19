import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage"; // Add import statement for getStorage

const firebaseConfig = {
  apiKey: "AIzaSyC55_o2XA8Iqa_HTX2cLX8RXM4T5m_fuzU",
  authDomain: "weather-blog-7893b.firebaseapp.com",
  projectId: "weather-blog-7893b",
  storageBucket: "weather-blog-7893b.appspot.com",
  messagingSenderId: "154719269636",
  appId: "1:154719269636:web:d2e18383e6f8f5c401d651",
  measurementId: "G-N98GP4TK78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app); // Fix the storage import
export default app;
