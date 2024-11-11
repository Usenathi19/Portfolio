// Toggle menu visibility for small screens
function toggleMenu() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active"); // Toggle the active class
}

const menuBtn = document.querySelector('.menu-btn');

// Adding event listener for mobile menu button
menuBtn.addEventListener('click', toggleMenu);

// Set the active link when clicked
function setActive(element) {
    const links = document.querySelectorAll("header nav ul li a");
    links.forEach(link => link.classList.remove("active"));
    element.classList.add("active");
}

// Close the menu when scrolling
window.addEventListener('scroll', function () {
    const navbar = document.getElementById("navbar");
    navbar.classList.remove('active');
});


// Form validation for the Contact section
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const errorMessage = document.getElementById("error-message");

    if (!name || !email || !message) {
        errorMessage.style.display = "block";
        return false;
    }

    errorMessage.style.display = "none";
    return true;
}