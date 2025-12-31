document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("login");
    const signupBtn = document.getElementById("signup");
    const loginBox = document.querySelector(".signin");
    const signupBox = document.querySelector(".signup");

    loginBtn.addEventListener("click", e => {
        e.preventDefault();
        loginBox.classList.add("active");
        signupBox.classList.remove("active");
    });

    signupBtn.addEventListener("click", e => {
        e.preventDefault();
        signupBox.classList.add("active");
        loginBox.classList.remove("active");
    });
});
