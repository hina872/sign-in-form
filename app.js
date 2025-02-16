
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo8JbCb6IhqLN2yE5OJdGfbPO6bnMLzK4",
  authDomain: "authentication-52286.firebaseapp.com",
  projectId: "authentication-52286",
  storageBucket: "authentication-52286.firebasestorage.app",
  messagingSenderId: "533478017784",
  appId: "1:533478017784:web:6846145ba230c68fa5c90d",
  measurementId: "G-518J5G230F"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault()
  const email = document.getElementById("email").value;
  const password = document.getElementById("Password").value;

  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("signup sucessfuly")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });
});

