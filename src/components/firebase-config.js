import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCUCmnAAvyd1K0dGpMr0SJxKa9VOtGBsaI",
    authDomain: "login-authentication-3beec.firebaseapp.com",
    projectId: "login-authentication-3beec",
    storageBucket: "login-authentication-3beec.appspot.com",
    messagingSenderId: "1047013251511",
    appId: "1:1047013251511:web:c8d3c2ac38378a97753032",
    measurementId: "G-DBS5NS1VT5"
  };
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

