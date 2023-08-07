document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("subscribe-form");
    const emailInput = document.getElementById("email");
    const errorMessage = document.getElementById("error-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get the entered email
        const enteredEmail = emailInput.value.trim();

        if (enteredEmail === "") {
            errorMessage.textContent = "Please enter a valid email address.";
            return;
        }

        // Display alert with email
        alert(`You have subscribed with the email: ${enteredEmail}`);

        // Show thank-you popup
        const thankYouPopup = document.createElement("div");
        thankYouPopup.className = "thank-you-popup";
        thankYouPopup.innerHTML = `
        <div class="popup-content">
          <p>Thank you for subscribing!</p>
        </div>
      `;
        document.body.appendChild(thankYouPopup);

        // Remove the popup after a few seconds
        setTimeout(function () {
            document.body.removeChild(thankYouPopup);
        }, 3000); // Remove after 3 seconds

        // Reset the form
        form.reset();
        errorMessage.textContent = ""; // Clear error message
    });
});