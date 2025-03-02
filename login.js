document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username !== "testuser" || password !== "password123") {
        let form = document.querySelector(".form-container");
        form.classList.add("shake");
        setTimeout(() => {
            form.classList.remove("shake");
        }, 500);
        }else {
            alert("Login Successful!");
        }
    
});
