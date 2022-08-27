import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXoPbEuA_4NpGtbVEa3v302aKWtRMcbh4",
  authDomain: "sign-in-e33d0.firebaseapp.com",
  projectId: "sign-in-e33d0",
  storageBucket: "sign-in-e33d0.appspot.com",
  messagingSenderId: "1015297044260",
  appId: "1:1015297044260:web:6ab46e847955d031688db1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
