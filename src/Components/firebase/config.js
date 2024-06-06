import firebase from "firebase/compat/app";
import "firebase/compat/firestore"; // Add this import
import "firebase/compat/auth";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyADSzCOswKTyNhaEHiWm-VBFU2tBVn5BH0",
    authDomain: "olx-clone-43a27.firebaseapp.com",
    projectId: "olx-clone-43a27",
    storageBucket: "olx-clone-43a27.appspot.com",
    messagingSenderId: "467613560971",
    appId: "1:467613560971:web:8fb17aaadbc401d3a4a48e",
    measurementId: "G-7SV8ZJ5M35"
  };
  
 export default firebase.initializeApp(firebaseConfig);

 const app=initializeApp(firebaseConfig)
 
 export const storage = getStorage(app)