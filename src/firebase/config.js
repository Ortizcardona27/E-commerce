
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyChYWsW-yTZdlY54iMNyKKrZvrt12XXE8w",
  authDomain: "e-commerce-b97d8.firebaseapp.com",
  projectId: "e-commerce-b97d8",
  storageBucket: "e-commerce-b97d8.appspot.com",
  messagingSenderId: "824702764452",
  appId: "1:824702764452:web:0ab8e9497d0773e3de6d31"
};
 
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);