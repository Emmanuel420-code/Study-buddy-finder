

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeSFUFnRioSyhSdirsfTJUjMf4awd2R_Q",
  authDomain: "study-buddy-finder-49942.firebaseapp.com",
  projectId: "study-buddy-finder-49942",
  storageBucket: "study-buddy-finder-49942.firebasestorage.app",
  messagingSenderId: "128259919133",
  appId: "1:128259919133:web:45be0ec18b5dd60e0fa5f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("signup-btn").addEventListener("click", () => {
    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    createUserWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
        alert("Sign up successful!");
        window.location.href = "login.html";
       })
       .catch((error) => {
        alert(error.message);
       });
});

document.getElementById("login-btn").addEventListener("click", () => {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
        alert("Login successful");
        window.location.href = "profile.html";
     })
     .catch((error) => {
        alert(error.message);
     });
});