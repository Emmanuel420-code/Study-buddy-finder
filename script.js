const toggleButton = document.getElementById('dark-mode-toggle');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".hero");
    setTimeout(() => {
        hero.computedStyleMap.opacity = "1"
        hero.computedStyleMap.transform = "translateY(0)";
    }, 500);
    
});

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

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event){
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            event.preventDefault();
        }
    });
});

document.addEventListener("DOMContentLoaded", function(){
    const profilePicInput = document.getElementById("profile-pic");
    const profileImage = document.getElementById("profile-image");
    const saveButton = document.getElementById("save-profile");
    const addHoursButton = document.getElementById("add-hours");
    const studyHours = document.getElementById("study-hours");
    const themeToggle = document.getElementById("theme-toggle");


    
    profilePicInput.addEventListener("change", function(event){
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profileImage.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    saveButton.addEventListener("click", function() {
        alert("Profile updated successfully!");
    });

    addHoursButton.addEventListener("click", function(){
        let currentHours = parseInt(studyHours.textContent);
        studyHours.textContent = currentHours + 1;
    });
    
    themeToggle.addEventListener("click", function(){
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            themeToggle.textContent = "Light Mode";
        }else {
            themeToggle.textContent = "Dark Mode";
        }
    });
});



document.getElementById("apply-filters").addEventListener("click", function(){
    let subject = document.getElementById("subject").value;
    let availability = document.getElementById("availability").value;
    let studyMethod = document.getElementById("study-method").value;

    let studyBuddies = [
        {name: "Emily", subject: "Mathematics", studyMethod: "video"},
        {name: "James", subject: "Science", studyMethod: "text"},
        {name: "Sophia", subject: "Programming", studyMethod: "in-person"},

    ];

    let filterdResults = studyBuddies.filter(buddy =>{
        return (subject === "" || buddy.subject.toLowerCase() === subject.toLowerCase())
                (studyMethod === "" || buddy.studyMethod === studyMethod);
    });

    displayResults(filterdResults);

});

function displayResults(results) {
    let resultContainer = document.getElementById("results-container");
    resultContainer.innerHTML = "";

    results.forEach(buddy => {
        let card = document.createElement("div");
        card.className = "results-card";
        card.innerHTML = `
            <h3>${buddy.name}</h3>
            <p><strong>Subject:</strong> ${buddy.subject}</p>
            <p><strong>Study Method:</strong> ${buddy.studyMethod}</p>
            <button class="message-btn">Message</button>
            `;
            resultContainer.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", function(){
    const cards = document.querySelector(".search-card");

    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 150);
    });
});