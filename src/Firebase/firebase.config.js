// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn4OPngA9HofsOIFtmKOb6jJMvZgMZDRs",
  authDomain: "learn-music-instruments.firebaseapp.com",
  projectId: "learn-music-instruments",
  storageBucket: "learn-music-instruments.appspot.com",
  messagingSenderId: "162822052386",
  appId: "1:162822052386:web:7a72d51873ea03a9d2087b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;