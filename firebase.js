// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

// Your Firebase Config
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

// Google Sign In
document.getElementById("googleSignIn").addEventListener("click", (e) => {

    e.preventDefault();

    signInWithPopup(auth, provider)

        .then((result) => {

            const user = result.user;

            alert("Welcome " + user.displayName);

            console.log(user);

            // Redirect after login
            window.location.href = "dashboard.html";

        })

        .catch((error) => {

            console.error(error);

            alert(error.message);

        });

});