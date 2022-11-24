import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3cCZ8OVXosu7pgrxCmicdEenIF2suohM",
  authDomain: "hogsmazon.firebaseapp.com",
  projectId: "hogsmazon",
  storageBucket: "hogsmazon.appspot.com",
  messagingSenderId: "850170070788",
  appId: "1:850170070788:web:e00ef4b4c38417fe32f251",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
