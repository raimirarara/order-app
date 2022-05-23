// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU2Z5A4fN9hASmSDh15q4PO2n3joC67AA",
  authDomain: "order-app-9414b.firebaseapp.com",
  projectId: "order-app-9414b",
  storageBucket: "order-app-9414b.appspot.com",
  messagingSenderId: "436076400334",
  appId: "1:436076400334:web:f30932e317e1ebe8688a9f",
  measurementId: "G-004096Q0T4",
};

//v9
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const storage = getStorage();
