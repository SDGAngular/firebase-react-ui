// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAVLs-QEDN_Veq1rUYuHOtoLUiWtPSFeHk",
    authDomain: "sbsa-e43ce.firebaseapp.com",
    projectId: "sbsa-e43ce",
    storageBucket: "sbsa-e43ce.appspot.com",
    messagingSenderId: "372028119040",
    appId: "1:372028119040:web:3fb7420921b5c5009960e5",
    measurementId: "G-1JK4RVLGX9"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);

  const db = getFirestore(app);

  export default db;