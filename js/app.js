import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCCXDWeOLWSP_4jUgnYP7uQo7vZMhpWV40",
  authDomain: "login-d7686.firebaseapp.com",
  projectId: "login-d7686",
  storageBucket: "login-d7686.firebasestorage.app",
  messagingSenderId: "118815468974",
  appId: "1:118815468974:web:445d4b9e867268a238ac3f",
  measurementId: "G-GCV0W1ESV8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("login");
  const signupBtn = document.getElementById("signup");
  const signupBox = document.querySelector(".signup");
  const signinBox = document.querySelector(".signin");

  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    signupBox.classList.add("inActive");
    signinBox.classList.add("active");
  });

  signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    signinBox.classList.remove("active");
    signupBox.classList.remove("inActive");
  });
});

document.querySelector(".signup .btn").addEventListener("click", (e) => {
  e.preventDefault();

  const email = document.querySelector('.signup input[type="email"]').value;
  const password = document.querySelector(
    '.signup input[type="password"]'
  ).value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Signup Successful");
      console.log(userCredential.user);
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert(error.message);
    });
});

document.querySelector(".signin .btn").addEventListener("click", (e) => {
  e.preventDefault();

  const email = document.querySelector('.signin input[type="email"]').value;
  const password = document.querySelector(
    '.signin input[type="password"]'
  ).value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login Successful");
      console.log(userCredential.user);
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert(error.message);
    });
});

document.querySelectorAll(".google").forEach((btn) => {
  btn.addEventListener("click", () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        alert("Google Login Successful");
        console.log(result.user);
        window.location.href = "index.html";
      })
      .catch((error) => {
        alert(error.message);
      });
  });
});
