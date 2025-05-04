import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Import getAuth

const firebaseConfig = {
  apiKey: "AIzaSyAY44j4g9_fYQJuaKGPPNMN0R-EZo1YNAA",
  authDomain: "crochet-bag-shop.firebaseapp.com",
  projectId: "crochet-bag-shop",
  storageBucket: "crochet-bag-shop.firebasestorage.app",
  messagingSenderId: "792997913814",
  appId: "1:792997913814:web:5d54e25c188408a8841577",
  measurementId: "G-BVKR9C09EK"
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp); // Initialize auth

export { firebaseApp, firebaseAuth }; // Export the auth instance