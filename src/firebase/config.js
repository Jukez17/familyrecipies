import { initializeApp } from 'firebase/app';
import '@firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDY6xJ-gvShzM9uwBz9s5k2Q_360uNs8NE",
  authDomain: "familyrecipies-4852a.firebaseapp.com",
  databaseURL: "https://familyrecipies-4852a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "familyrecipies-4852a",
  storageBucket: "familyrecipies-4852a.appspot.com",
  messagingSenderId: "1015881852501",
  appId: "1:1015881852501:web:53a67c88880727e4eb16dc",
  measurementId: "G-3WS5WJ5HNE"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore()

export default firebaseApp