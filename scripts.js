/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function () {
    const subscriptionForm = document.getElementById("subscription-form");
    const messageDiv = document.querySelector(".message");

    subscriptionForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const emailInput = document.getElementById("email");
        const email = emailInput.value;

        if (isValidEmail(email)) {
            messageDiv.textContent = `Thank you for subscribing with the email: ${email}`;
            emailInput.value = '';
        } else {
            messageDiv.textContent = "Please enter a valid email address in the @(email company).com format.";
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[\w-]+\.com$/;
        return emailRegex.test(email);
    }
});



