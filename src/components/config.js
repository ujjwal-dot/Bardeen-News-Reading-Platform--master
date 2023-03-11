
import { initializeApp } from "firebase/app";
import "firebase/auth";
import {getAuth,GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyB5U7XbiYdp4MMHx15HY5UYbdVWNKRVxC8",
  authDomain: "newsapp-e0ebf.firebaseapp.com",
  projectId: "newsapp-e0ebf",
  storageBucket: "newsapp-e0ebf.appspot.com",
  messagingSenderId: "49540299345",
  appId: "1:49540299345:web:238c48fea3753313009670",
  measurementId: "G-E3VPT4V3K0"
};

const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const provider= new GoogleAuthProvider();
export const signInWithGoogle=()=>{
  signInWithPopup(auth,provider).then((result)=>{
      console.log(result);
  }).catch(err=>console.log(err))
  
}
