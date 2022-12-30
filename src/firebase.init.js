// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKqREQHSo0bEK3x6bvtBYyFdVgc66nWRk",
    authDomain: "genius-car-services-2601f.firebaseapp.com",
    projectId: "genius-car-services-2601f",
    storageBucket: "genius-car-services-2601f.appspot.com",
    messagingSenderId: "836101964605",
    appId: "1:836101964605:web:3be0bca1f9f9919dcefb54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;