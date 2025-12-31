import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

/* ================= Firebase Config ================= */
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

/* ================= Login / Signup Toggle ================= */
document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("login");
  const signupBtn = document.getElementById("signup");
  const signupBox = document.querySelector(".signup");
  const signinBox = document.querySelector(".signin");

  if (loginBtn && signupBtn) {
    loginBtn.addEventListener("click", (e) => {
      e.preventDefault();
      signupBox?.classList.add("inActive");
      signinBox?.classList.add("active");
    });

    signupBtn.addEventListener("click", (e) => {
      e.preventDefault();
      signinBox?.classList.remove("active");
      signupBox?.classList.remove("inActive");
    });
  }
});

/* ================= Signup ================= */
const signupBtn = document.querySelector(".signup .btn");
if (signupBtn) {
  signupBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const email = document.querySelector('.signup input[type="email"]').value;
    const password = document.querySelector('.signup input[type="password"]').value;

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        window.location.href = "index.html";
      })
      .catch(err => alert(err.message));
  });
}

/* ================= Login ================= */
const signinBtn = document.querySelector(".signin .btn");
if (signinBtn) {
  signinBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const email = document.querySelector('.signin input[type="email"]').value;
    const password = document.querySelector('.signin input[type="password"]').value;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        window.location.href = "index.html";
      })
      .catch(err => alert(err.message));
  });
}

/* ================= Google Login ================= */
document.querySelectorAll(".google").forEach((btn) => {
  btn.addEventListener("click", () => {
    signInWithPopup(auth, provider)
      .then(() => {
        window.location.href = "index.html";
      })
      .catch(err => alert(err.message));
  });
});

/* ================= Sign In ⇄ Logout (Index.html) ================= */
onAuthStateChanged(auth, (user) => {
  const signBtn = document.querySelector(".SignIn_btn");

  if (!signBtn) return;

  if (user) {
    // Logged In → Show Logout
    signBtn.innerText = "Logout";
    signBtn.href = "#";

    signBtn.onclick = (e) => {
      e.preventDefault();
      signOut(auth).then(() => {
        window.location.reload();
      });
    };

  } else {
    // Logged Out → Show Sign In
    signBtn.innerText = "Sign In";
    signBtn.href = "SignIn.html";
    signBtn.onclick = null;
  }
});
