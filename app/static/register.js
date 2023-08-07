// scripts.js

document.addEventListener("DOMContentLoaded", function () {
    const showPasswordButton = document.getElementById("showPassword");
    const passwordInput = document.getElementById("password");
    const passwordError = document.getElementById("passwordError");

    showPasswordButton.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    });

    const showConfirmPasswordButton = document.getElementById("showConfirmPassword");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    showConfirmPasswordButton.addEventListener("click", function () {
        if (confirmPasswordInput.type === "password") {
            confirmPasswordInput.type = "text";
        } else {
            confirmPasswordInput.type = "password";
        }
    });

    const registrationForm = document.getElementById("registration-form");
    registrationForm.addEventListener("submit", function (event) {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        // Password validation
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=\S+$).{6,}$/;

        if (!passwordPattern.test(password)) {
            event.preventDefault();
            passwordError.textContent =
                "Password must contain at least one digit, one lowercase letter, one uppercase letter, one special symbol (@#$%^&+=!), and be at least 6 characters long.";
        } else {
            passwordError.textContent = "";
        }
    });
});
