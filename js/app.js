import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

/* ================= Firebase Init ================= */
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

/* ================= Toggle Login / Signup ================= */
document.addEventListener("DOMContentLoaded", () => {
  const loginTab = document.getElementById("login");
  const signupTab = document.getElementById("signup");
  const signupBox = document.querySelector(".signup");
  const signinBox = document.querySelector(".signin");

  if (loginTab && signupTab) {
    loginTab.addEventListener("click", (e) => {
      e.preventDefault();
      signupBox?.classList.add("inActive");
      signinBox?.classList.add("active");
    });

    signupTab.addEventListener("click", (e) => {
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
        localStorage.setItem("AUTH_STATUS", "Account Created Successfully");
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
      .then(() => window.location.href = "index.html")
      .catch(err => alert(err.message));
  });
}

/* ================= Google Login ================= */
document.querySelectorAll(".google").forEach(btn => {
  btn.addEventListener("click", () => {
    signInWithPopup(auth, provider)
      .then(() => window.location.href = "index.html")
      .catch(err => alert(err.message));
  });
});

/* ================= Auth State (Login ⇄ Logout) ================= */
onAuthStateChanged(auth, (user) => {

  /* Find possible login buttons */
  const loginBtns = document.querySelectorAll(
    "#login, .login, .login-btn"
  );

  /* Create Logout Button if not exists */
  let logoutBtn = document.querySelector(".logout-btn");

  if (user) {
    loginBtns.forEach(btn => btn.style.display = "none");

    if (!logoutBtn) {
      logoutBtn = document.createElement("button");
      logoutBtn.className = "logout-btn";
      logoutBtn.innerText = "Logout";
      logoutBtn.style.cursor = "pointer";
      logoutBtn.style.padding = "8px 16px";
      logoutBtn.style.marginLeft = "12px";

      document.body.appendChild(logoutBtn);

      logoutBtn.addEventListener("click", () => {
        signOut(auth).then(() => {
          window.location.reload();
        });
      });
    }

  } else {
    loginBtns.forEach(btn => btn.style.display = "inline-block");
    if (logoutBtn) logoutBtn.remove();
  }

  /* Signup Status Message */
  const status = localStorage.getItem("AUTH_STATUS");
  if (status) {
    const msg = document.createElement("div");
    msg.innerText = status;
    msg.style.color = "green";
    msg.style.fontWeight = "600";
    msg.style.margin = "10px 0";
    document.body.prepend(msg);
    localStorage.removeItem("AUTH_STATUS");
  }
});
