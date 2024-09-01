// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-adb37.firebaseapp.com",
  projectId: "mern-estate-adb37",
  storageBucket: "mern-estate-adb37.appspot.com",
  messagingSenderId: "453235823945",
  appId: "1:453235823945:web:bd1e296d5311e2f16f7698",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
