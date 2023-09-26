import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDNirBXyQYefkJjkTPiLcqx8nZVUYNfS20",
  authDomain: "hack-o-thon-71172.firebaseapp.com",
  projectId: "hack-o-thon-71172",
  storageBucket: "hack-o-thon-71172.appspot.com",
  messagingSenderId: "86746768608",
  appId: "1:86746768608:web:7dd61c2171f24f89f8dc85"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export { db, auth, storage };
