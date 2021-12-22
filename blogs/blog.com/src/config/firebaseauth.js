import * as firebase from 'firebase/app';
import 'firebase/analytics'
const firebaseConfig = {
    apiKey: "AIzaSyARI2hsmZ6axzbY6ITukq2rM3IwIyKSaD0",
    authDomain: "blogweb-a2566.firebaseapp.com",
    projectId: "blogweb-a2566",
    storageBucket: "blogweb-a2566.appspot.com",
    messagingSenderId: "352812380875",
    appId: "1:352812380875:web:fa4fb52421b2013027a14e",
    measurementId: "G-LMR1N2J56Q"
  };
  
  // Initialize Firebase
firebase. initializeApp(firebaseConfig);
firebase. analytics();