document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".request-btn").forEach(button => {
        button.addEventListener("click", function () {
            alert("Friend request sent");
            this.textContent = "Request Sent";
            this.disabled = true;
        });
    });


    document.querySelectorAll(".group-btn").forEach(button => {
        button.addEventListener("click", function () {
            alert("Added to Study Group!");
            this.textContent = "Added"
            this.disabled = true;
        });
    });
});


document.addEventListener("DOMContentLoaded", function (){
    const filterBtn = document.getElementById("apply-filters");

    filterBtn.addEventListener("click", function () {
        const subject = document.getElementById("subject").value;
        const availability = document.getElementById("availability").value;
        const studyMethod = document.getElementById("study-method").value;

        let profiles = document.querySelectorAll(".profile-card");

        profiles.forEach(profile => {
            let matchesFilter = true;

            if (subject !== "all" && !profile.innerHTML.includes(subject)) {
                matchesFilter = false;
            }

            if (availability !== "any" && !profile.innerHTML.includes(availability)) {
                matchesFilter = false;
            }

            if (studyMethod !== "any" && !profile.innerHTML.includes(studyMethod)) {
                matchesFilter = false;
            }

            profile.style.display = matchesFilter ? "block" : "none";
        });

    });
});


document.addEventListener("DOMContentLoaded", function () {
    const studyGroups = [
        {name: "AI Enthusiasts", topics: ["Ai", "Machine Learning"] },
        {name: "Math Wizards", topics: ["Math", "Algebra"] },
        {name: "CS Coders", topics: ["Computer Science", "Programming"] },

    ];

    const userInterests = ["AI", "Math"];
    const recommendations = studyGroups = studyGroups.filter(groups => 
        groups.topics.some(topic => userInterests.includes(topic))
    );

    const groupList = document.getElementById("recommended-groups");
    recommendedGroups.forEach(group => {
        let li = document.createElement("li");
        li.textContent = group.name;
        groupList.appendChild(li);
    });
});

//
document.querySelectorAll('.buddy-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

//

document.addEventListener("DOMContentLoaded", function () {
    const filterBtn = document.getElementById("apply-filters");

    filterBtn.addEventListener("click", function() {
        const skillLevel = document.getElementById("skill-level").value;
        const studyMethod = document.getElementById("study-method").value;
        const availability = document.getElementById("availability").value;

        const buddyCards = document.querySelectorAll(".buddy-card");

        buddyCards.forEach(card => {
            const cardSkill = card.getAttribute("data-skill");
            const cardMethod = card.getAttribute("data-method");
            const cardAvailability = card.getAttribute("data-availability");

            let show = true;

            if (skillLevel && cardSkill !== skillLevel) show = false;
            if (studyMethod && cardMethod !== studyMethod) show = false;
            if (availability && cardAvailability !== availability) show = false;

            card.style.display = show ? "block" : "none";
        });
    });
});