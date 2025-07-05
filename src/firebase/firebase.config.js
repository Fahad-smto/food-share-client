// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6VaFgdgPivC3umg2v6RBqH8uWnf8dvgU",
  authDomain: "food-share-c6d9f.firebaseapp.com",
  projectId: "food-share-c6d9f",
  storageBucket: "food-share-c6d9f.firebasestorage.app",
  messagingSenderId: "89236614859",
  appId: "1:89236614859:web:2a7b9f22ad628f89de354e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;