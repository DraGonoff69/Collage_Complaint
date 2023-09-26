import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBtM7NEOZAdlkHYYYZRg3RLCR6iD3LS5t4",
  authDomain: "hackathon-866bf.firebaseapp.com",
  projectId: "hackathon-866bf",
  storageBucket: "hackathon-866bf.appspot.com",
  messagingSenderId: "646045812443",
  appId: "1:646045812443:web:8ce4a9136fc3a614012efe"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export { db, auth, storage };
