document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("login");
    const signupBtn = document.getElementById("signup");
    const signinBox = document.querySelector(".signin");
    const signupBox = document.querySelector(".signup");

    loginBtn.addEventListener("click", function (e) {
        e.preventDefault();
        signupBox.classList.add("inActive");
        signinBox.classList.add("active");
    });

    signupBtn.addEventListener("click", function (e) {
        e.preventDefault();
        signinBox.classList.remove("active");
        signupBox.classList.remove("inActive");
    });
});
