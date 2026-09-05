// ===============================
// TOGGLE SIDEBAR
// ===============================

function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("open");
}


// ===============================
// GET LOGGED-IN USER
// ===============================

const savedUser = localStorage.getItem("calidatechUser");

if (savedUser) {

    const user = JSON.parse(savedUser);

    const userName = document.getElementById("userName");

    if (userName) {
        userName.textContent = user.username;
    }
}


// ===============================
// MENU ITEMS
// ===============================

const menuItems = document.querySelectorAll(".menu-link");
const sections = document.querySelectorAll(".content-section");

menuItems.forEach(function(item) {

    item.addEventListener("click", function(e) {

        // If this is Logout, allow it to go to login.html
        if (this.id === "logout") {
            return;
        }

        e.preventDefault();

        // Remove active from all menu items
        menuItems.forEach(function(link) {
            link.classList.remove("active");
        });

        // Add active to clicked item
        this.classList.add("active");

        // Get section name
        const sectionName = this.getAttribute("data-section");

        // Hide all sections
        sections.forEach(function(section) {
            section.classList.remove("active-section");
        });

        // Show selected section
        const selectedSection = document.getElementById(sectionName);

        if (selectedSection) {
            selectedSection.classList.add("active-section");
        }

    });

});


// ===============================
// LOGOUT
// ===============================

function logoutUser() {

    const confirmLogout = confirm(
        "Are you sure you want to logout?"
    );

    if (confirmLogout) {

        // Optional: remove login status
        localStorage.removeItem("calidatechLoggedIn");

        alert("You have successfully logged out!");

        // Return to login page
        window.location.href = "login.html";
    }
}


// ===============================
// ADD TO CART
// ===============================

const cartButtons = document.querySelectorAll(".cart-btn");

cartButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        alert("Product has been added to your cart!");

    });

});