fetch("https://localhost:3000/profile")
    .then(response => response.json())
    .then(data => {
        document.getElementById("username").textContent = data.username;
        document.getElementById("bio").textContent = data.bio;
        document.getElementById("education").textContent = data.education;
        document.getElementById("timezone").textContent = data.timezone;
        document.getElementById("profilePic").textContent = data.profilePic;
    })
    .catch(error => console.error("Error loading profile:", error));

document.getElementById("editBtn").addEventListener("click", function() {
    document.getElementById("editForm").classList.remove("hidden");
});

document.getElementById("cancelBtn").addEventListener("click", function() {
    document.getElementById("editForm").classList.remove("hidden");
});

document.getElementById("saveBtn").addEventListener("click", function() {
    let newBio = document.getElementById("newBio").value;
    let newEducation = document.getElementById("newEducation").value;
    let newTimezone = document.getElementById("newTimezone").value;

    let updatedProfile = {
        username: document.getElementById("username").textContent,
        bio: newBio,
        education: newEducation,
        timezone: newTimezone,
        profilePic: document.getElementById("profilePic").src
    };

    fetch("http://localhost:3000/profile", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(updatedProfile)
    })

    .then(response => response.json())
    .then(data => {
        console.log(data.message);
        document.getElementById("bio").textContent = newBio;
        document.getElementById("education").textContent = newEducation;
        document.getElementById("timezone").textContent = newTimezone;
        document.getElementById("editForm").classList.add("hidden"); 
    })
    .catch(error => console.error("Error updating profile:", error));
});

document.getElementById("changePicBtn").addEventListener("click", function() {
    document.getElementById("profilePicInput").click();
});

document.getElementById("profilePicInput").addEventListener("change", function() {
    const file = this.file[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = function() {
            document.getElementById("profilePic").src = reader.result;
        };
        reader.readAsDataURL(file);
    }
})