import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeXAOaWgzaUhrgs6zzVkq0E-iV0TNU-QU",
  authDomain: "bookwrite-75f48.firebaseapp.com",
  projectId: "bookwrite-75f48",
  storageBucket: "bookwrite-75f48.firebasestorage.app",
  messagingSenderId: "469860541078",
  appId: "1:469860541078:web:bff471fb968cf58e5d18b7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const dbase = getFirestore(app);
const auth = getAuth(app);

export { dbase, storage, auth, app as default };
