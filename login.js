// ===============================
// ELEMENTS
// ===============================
const container = document.getElementById("container");

const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

const registerLink = document.getElementById("registerLink");
const loginLink = document.getElementById("loginLink");

const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

const popup = document.getElementById("successPopup");
const popupMessage = document.getElementById("popupMessage");
const closePopup = document.getElementById("closePopup");

// ===============================
// SHOW SUCCESS POPUP
// ===============================
function showSuccess(message) {
    popupMessage.textContent = message;
    popup.classList.add("show");
}

if (closePopup) {
    closePopup.addEventListener("click", function () {
        popup.classList.remove("show");
    });
}

// ===============================
// SWITCH PANELS
// ===============================
if (registerBtn) {
    registerBtn.addEventListener("click", function () {
        container.classList.add("active");
    });
}

if (loginBtn) {
    loginBtn.addEventListener("click", function () {
        container.classList.remove("active");
    });
}

if (registerLink) {
    registerLink.addEventListener("click", function (e) {
        e.preventDefault();
        container.classList.add("active");
    });
}

if (loginLink) {
    loginLink.addEventListener("click", function (e) {
        e.preventDefault();
        container.classList.remove("active");
    });
}

// ===============================
// GOOGLE BUTTON
// ===============================
const googleBtn = document.querySelector(".google-btn");

if (googleBtn) {
    googleBtn.addEventListener("click", function () {
        alert("Google Sign-In is not available in this demo.");
    });
}

// ===============================
// REGISTER
// ===============================
if (registerForm) {

    registerForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const username = document.getElementById("regUsername").value.trim();
        const email = document.getElementById("regEmail").value.trim();
        const password = document.getElementById("regPassword").value;
        const confirmPassword = document.getElementById("regConfirmPassword").value;

        if (username === "" || email === "" || password === "" || confirmPassword === "") {
            alert("Please fill in all fields.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        const user = {
            username: username,
            email: email,
            password: password
        };

        localStorage.setItem("user", JSON.stringify(user));

        showSuccess("Registration Successful!");

        registerForm.reset();

        setTimeout(function () {
            popup.classList.remove("show");
            container.classList.remove("active");
        }, 1500);

    });

}

// ===============================
// LOGIN
// ===============================
if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const username = document.getElementById("loginUsername").value.trim();
        const password = document.getElementById("loginPassword").value;

        if (username === "" || password === "") {
            alert("Please enter your username and password.");
            return;
        }

        const user = JSON.parse(localStorage.getItem("user"));

        if (
            user &&
            username === user.username &&
            password === user.password
        ) {

            showSuccess("Login Successful!");

            loginForm.reset();

            // DO NOT CONNECT TO SIDE MENU
            // window.location.href = "side-menu.html";

        } else {

            alert("Invalid Username or Password.");

        }

    });

}

// ===============================
// SHOW / HIDE PASSWORD
// ===============================
const eyeIcons = document.querySelectorAll(".toggle-password");

eyeIcons.forEach(function (icon) {

    icon.addEventListener("click", function () {

        const input = this.previousElementSibling;

        if (input.type === "password") {

            input.type = "text";

            this.classList.remove("fa-eye");
            this.classList.add("fa-eye-slash");

        } else {

            input.type = "password";

            this.classList.remove("fa-eye-slash");
            this.classList.add("fa-eye");

        }

    });

});