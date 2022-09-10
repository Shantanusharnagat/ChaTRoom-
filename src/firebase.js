
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_K8jIxMjFVOMWTsT1D4cJW53NtBw25Q8",
  authDomain: "chatroom-1699c.firebaseapp.com",
  projectId: "chatroom-1699c",
  storageBucket: "chatroom-1699c.appspot.com",
  messagingSenderId: "695767416864",
  appId: "1:695767416864:web:0a7f3526567c624aa6fc45"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage = getStorage();
export const db=getFirestore();
