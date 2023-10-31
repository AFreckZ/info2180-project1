/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function () {
    const subscriptionForm = document.getElementById("subscription-form");
    const messageDiv = document.querySelector(".message");

    subscriptionForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the form from submitting normally

        const emailInput = document.getElementById("email");
        const email = emailInput.value;

        // Simulate form submission action here
        // For demonstration purposes, we'll just display a message
        messageDiv.textContent = `Thank you for subscribing with the email: ${email}`;
        emailInput.value = ''; // Clear the input field
    });
});

