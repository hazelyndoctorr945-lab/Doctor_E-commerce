// ==================================================
// CALIDATECH LOGIN SYSTEM
// ==================================================


// ==================================================
// GET ELEMENTS
// ==================================================

const container = document.getElementById("container");

const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");

const registerLink = document.getElementById("registerLink");
const loginLink = document.getElementById("loginLink");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

const popup = document.getElementById("successPopup");
const popupMessage = document.getElementById("popupMessage");
const closePopup = document.getElementById("closePopup");

const forgotPassword = document.getElementById("forgotPassword");

const googleButton = document.querySelector(".google-btn");

const passwordIcons =
    document.querySelectorAll(".toggle-password");


// ==================================================
// SWITCH TO REGISTER
// ==================================================

if (registerButton) {

    registerButton.addEventListener("click", function () {

        container.classList.add("active");

    });

}


// ==================================================
// SWITCH TO LOGIN
// ==================================================

if (loginButton) {

    loginButton.addEventListener("click", function () {

        container.classList.remove("active");

    });

}


// ==================================================
// REGISTER LINK
// ==================================================

if (registerLink) {

    registerLink.addEventListener("click", function (event) {

        event.preventDefault();

        container.classList.add("active");

    });

}


// ==================================================
// LOGIN LINK
// ==================================================

if (loginLink) {

    loginLink.addEventListener("click", function (event) {

        event.preventDefault();

        container.classList.remove("active");

    });

}


// ==================================================
// REGISTER ACCOUNT
// ==================================================

if (registerForm) {

    registerForm.addEventListener("submit", function (event) {

        event.preventDefault();


        // Get values

        const username =
            document
                .getElementById("regUsername")
                .value
                .trim();


        const email =
            document
                .getElementById("regEmail")
                .value
                .trim();


        const password =
            document
                .getElementById("regPassword")
                .value;


        const confirmPassword =
            document
                .getElementById("regConfirmPassword")
                .value;


        // Check fields

        if (
            username === "" ||
            email === "" ||
            password === "" ||
            confirmPassword === ""
        ) {

            alert("Please fill in all fields.");

            return;

        }


        // Check password length

        if (password.length < 6) {

            alert(
                "Password must be at least 6 characters."
            );

            return;

        }


        // Check password

        if (password !== confirmPassword) {

            alert(
                "Passwords do not match."
            );

            return;

        }


        // Create account

        const user = {

            username: username,

            email: email,

            password: password

        };


        // Save account

        localStorage.setItem(
            "calidatechUser",
            JSON.stringify(user)
        );


        // Show popup

        if (popup && popupMessage) {

            popupMessage.textContent =
                "Registration successful! You can now login.";

            popup.classList.add("show");

        }


        // Clear form

        registerForm.reset();


        // Return to login

        setTimeout(function () {

            if (popup) {

                popup.classList.remove("show");

            }

            container.classList.remove("active");

        }, 1500);

    });

}


// ==================================================
// LOGIN
// ==================================================

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();


        // Get login values

        const username =
            document
                .getElementById("loginUsername")
                .value
                .trim();


        const password =
            document
                .getElementById("loginPassword")
                .value;


        // Check empty fields

        if (
            username === "" ||
            password === ""
        ) {

            alert(
                "Please enter your username and password."
            );

            return;

        }


        // Get registered user

        const savedUser =
            localStorage.getItem("calidatechUser");


        // Check account

        if (!savedUser) {

            alert(
                "No registered account found. Please register first."
            );

            return;

        }


        // Convert saved account

        let user;

        try {

            user = JSON.parse(savedUser);

        } catch (error) {

            alert(
                "There is a problem with your saved account. Please register again."
            );

            localStorage.removeItem("calidatechUser");

            return;

        }


        // Check username

        if (username !== user.username) {

            alert(
                "Incorrect username."
            );

            return;

        }


        // Check password

        if (password !== user.password) {

            alert(
                "Incorrect password."
            );

            return;

        }


        // ==================================================
        // LOGIN SUCCESSFUL
        // ==================================================

        localStorage.setItem(
            "calidatechLoggedIn",
            "true"
        );


        alert("Login successful!");


        // Go to Side Menu

        window.location.href = "side-menu.html";

    });

}


// ==================================================
// CLOSE POPUP
// ==================================================

if (closePopup) {

    closePopup.addEventListener("click", function () {

        if (popup) {

            popup.classList.remove("show");

        }

    });

}


// ==================================================
// SHOW / HIDE PASSWORD
// ==================================================

passwordIcons.forEach(function (icon) {

    icon.addEventListener("click", function () {

        const passwordInput =
            this.previousElementSibling;


        if (!passwordInput) {

            return;

        }


        // Show password

        if (passwordInput.type === "password") {

            passwordInput.type = "text";

            this.classList.remove("fa-eye");

            this.classList.add("fa-eye-slash");

        }


        // Hide password

        else {

            passwordInput.type = "password";

            this.classList.remove("fa-eye-slash");

            this.classList.add("fa-eye");

        }

    });

});


// ==================================================
// FORGOT PASSWORD
// ==================================================

if (forgotPassword) {

    forgotPassword.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            alert(
                "Forgot Password is not available in this demo."
            );

        }
    );

}


// ==================================================
// GOOGLE LOGIN
// ==================================================

if (googleButton) {

    googleButton.addEventListener(
        "click",
        function () {

            alert(
                "Google Sign-In is not available in this demo."
            );

        }
    );

}