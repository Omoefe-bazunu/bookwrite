import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuQ3wPorUHUJF6v_gSIByMa-QfG2wLkvg",
  authDomain: "bookwrite-752c4.firebaseapp.com",
  projectId: "bookwrite-752c4",
  storageBucket: "bookwrite-752c4.firebasestorage.app",
  messagingSenderId: "663433977123",
  appId: "1:663433977123:web:c2c7f3d80c04ff38e14096",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const dbase = getFirestore(app);
const auth = getAuth(app);

export { dbase, storage, auth, app as default };
