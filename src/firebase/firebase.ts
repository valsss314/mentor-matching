// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABi8ycSm1GPm3H1ZORFBUXbu6zuUfcVng",
  authDomain: "mentormatching-f5fb1.firebaseapp.com",
  projectId: "mentormatching-f5fb1",
  storageBucket: "mentormatching-f5fb1.firebasestorage.app",
  messagingSenderId: "952446229608",
  appId: "1:952446229608:web:977c927a55314418762fdd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth }