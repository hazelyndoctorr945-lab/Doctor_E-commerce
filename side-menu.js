// Toggle Sidebar
function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("open");
}

// Active Menu
const menuItems = document.querySelectorAll(".sidebar a");

menuItems.forEach(item => {
    item.addEventListener("click", function () {

        menuItems.forEach(link => link.classList.remove("active"));
        this.classList.add("active");

        // Hide sidebar after clicking a menu
        document.getElementById("sidebar").classList.remove("open");
    });
});

// Logout Alert
document.getElementById("logout").addEventListener("click", function (e) {
    e.preventDefault();
    alert("You have successfully logged out!");
});