// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUpwmKTfaEGxV0CBd_O9-Gpt544NuiHqg",
  authDomain: "goonxl-1be4b.firebaseapp.com",
  projectId: "goonxl-1be4b",
  storageBucket: "goonxl-1be4b.appspot.com",
  messagingSenderId: "1059661589890",
  appId: "1:1059661589890:web:75b42d27ef7e75af5d739b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)