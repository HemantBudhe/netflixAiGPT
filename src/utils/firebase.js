// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF2NKWBs8vmH3KCL0CbyqMvf6Jjr0iFi8",
  authDomain: "netflixaigpt.firebaseapp.com",
  projectId: "netflixaigpt",
  storageBucket: "netflixaigpt.appspot.com",
  messagingSenderId: "411625011932",
  appId: "1:411625011932:web:acc82abd334667d6301219",
  measurementId: "G-ZPWL07E2NN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
