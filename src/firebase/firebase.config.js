// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDsTgq1ZC1pPLcWAjGR1nedb5lm8EuTLLg",
    authDomain: "hotel-auth-system.firebaseapp.com",
    projectId: "hotel-auth-system",
    storageBucket: "hotel-auth-system.appspot.com",
    messagingSenderId: "71002307067",
    appId: "1:71002307067:web:1463e4cf302296aa7b335e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;