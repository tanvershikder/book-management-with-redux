// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId



  // apiKey: "AIzaSyDAGKnxVFVxp2auXGqGaosk5K-zK2DbWdg",
  // authDomain: "book-management-with-redux.firebaseapp.com",
  // projectId: "book-management-with-redux",
  // storageBucket: "book-management-with-redux.appspot.com",
  // messagingSenderId: "397638021058",
  // appId: "1:397638021058:web:1b147684220ea104fb705b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);