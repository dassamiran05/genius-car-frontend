// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsbqwZbw0X3lFx9twXpKZllZxZzRsLVwU",
  authDomain: "genius-car-frontend.firebaseapp.com",
  projectId: "genius-car-frontend",
  storageBucket: "genius-car-frontend.appspot.com",
  messagingSenderId: "175083015075",
  appId: "1:175083015075:web:a5bb0c1a9762ea9a1a2816"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;