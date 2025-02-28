document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let message = document.getElementById("message").value;


    if (password.length < 6) {
        message.textContent = "Password must be atleast 6 characters";
        message.style.color = "red";
        return;
    }

    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match.";
        message.style.color = "red"
        return;
    }

    let user = {name, email, password};
    localStorage.setItem("user", JSON.stringify(user));

    message.textContent = "Check your email for verification (simulated).";
    message.style.color = "lightgreen";

    document.querySelector(".signup-box").classList.add("success-animation");

    setTimeout(() => {
        window.location.href = "login.html";
    }, 3000);
});
    document.addEventListener("DOMContentLoaded", () => {
        const signupBox = document.querySelector(".signup-box");

        signupBox.addEventListener("animation", () => {
            signupBox.classList.remove("success-animation");
        
    });

});