
const form = document.getElementById("registrationForm");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Check if both passwords match
    if (password.value !== confirmPassword.value) {
        message.textContent = "Passwords do not match!";
        message.style.color = "red";
        return;
    }

    // Check password length
    if (password.value.length < 6) {
        message.textContent = "Password must be at least 6 characters!";
        message.style.color = "red";
        return;
    }

    // Show success message
    message.textContent = "Registration successful!";
    message.style.color = "green";

    form.reset();
});
