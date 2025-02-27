document.getElementById("search-btn").addEventListener("click", function(){
    let query = document.getElementById("search-groups").value.toLowerCase();
    let groups = document.querySelector("group-card");

    groups.forEach(group => {
        let groupName = group.querySelector("h3").innerText.toLowerCase();
        if (groupName.includes(query)) {
            group.style.display = "block";
        } else {
            group.style.display = "none";
        }
    });
});

document.getElementById("sort-groups").addEventListener("change", function(){
    let selectedSort = this.value;
    let groupContainer = document.querySelector(".groups-list");
    let groups = Array.from(groupContainer.getElementsByClassName("group-card"));

    groups.sort((a, b) => {
        let membersA = parseInt(a.dataset.members);
        let membersB = parseInt(b.dataset.members);
        let dateA = new Date(a.dataset.created);
        let dateB = new Date(b.dataset.created);
        let activityA = parseInt(a.dataset.activity);
        let activityB = parseInt(b.dataset.activity);

        if (selectedSort === "most-active") return activityB - activityA;
        if (selectedSort === "recent") return dateB - dateA;
        if (selectedSort === "largest") return membersB - membersA;
    });

    groupContainer.innerHTML = "";
    group.forEach(group => groupContainer.appendChild(group));
});

document.getElementById("apply-filters").addEventListener("click", function (){
    let selectedPrivacy = document.getElementById("filter-privacy").value;
    let selectedLanguage = document.getElementById("filter-language").value;
    let groups = document.querySelectorAll(".group-card");

    groups.forEach(group => {
        let groupPrivacy = group.dataset.privacy;
        let groupLanguage = group.dataset.language;
        let show = true;

        if (selectedPrivacy !== "all" && groupPrivacy !== selectedPrivacy) show = false;
        if (selectedLanguage !== "all" && groupLanguage !== selectedLanguage) show = false;

        group.style.display = show ? "block" : "none"

    });

});