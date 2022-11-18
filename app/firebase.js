  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  //https://firebase.google.com/docs/web/setup#available-libraries
  import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js" 


  const firebaseConfig = {
    apiKey: "AIzaSyDSXwlQcT1Lno7RzSfKnNO6Q1CPGy-tne4",
    authDomain: "salud-634e6.firebaseapp.com",
    projectId: "salud-634e6",
    storageBucket: "salud-634e6.appspot.com",
    messagingSenderId: "1018911270864",
    appId: "1:1018911270864:web:7a68a5a2f0abe233a83bd5"
  };

  // Initialize Firebase
   
   export const app= initializeApp(firebaseConfig);
   export const auth=getAuth(app)
  
 