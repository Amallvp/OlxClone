import firebase from "firebase/compat/app";
import "firebase/compat/firestore"; // Add this import
import "firebase/compat/auth";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { apiKey } from "./apiKey";

const firebaseConfig = apiKey
  
 export default firebase.initializeApp(firebaseConfig);

 const app=initializeApp(firebaseConfig)
 
 export const storage = getStorage(app)