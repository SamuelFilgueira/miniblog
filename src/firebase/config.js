import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDM9dTHlnhwa853F0i4Z0hOlc28dTJ7XyQ",
  authDomain: "miniblog-a518b.firebaseapp.com",
  projectId: "miniblog-a518b",
  storageBucket: "miniblog-a518b.appspot.com",
  messagingSenderId: "1027959996556",
  appId: "1:1027959996556:web:c45e2041d5bb9c04b2fba9",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
