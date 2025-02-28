document.getElementById("create-group").addEventListener("click", function() {
    const groupName = document.getElementById("group-name").value;
    const groupDescription = document.getElementById("group-description").value;
    const groupTopic = document.getElementById("group-topic").value;

    const newGroup = document.createElement("div");
    newGroup.classList.add("group");
    newGroup.innerHTML = `
        <h4>${groupName}</h4>
        <p>${groupDescription}</p>
        <p>Topic: ${groupTopic}</p>
        <button class="join-btn">Join</button>
        `;

        document.querySelector("group-list").appendChild(newGroup);
});

document.querySelectorAll(".join-btn").forEach(btn => {
    btn.addEventListener("click", function() {
        alert("You have joined the group!");
    });
});

document.getElementById("leave-group").addEventListener("click", function() {
    alert("You have left the group");
});

document.getElementById("send-btn").addEventListener("click", function() {
    const message = document.getElementById("message").value;
    if (message.trim()) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.innerHTML = `
            <div class="content">${message}</div>
       `;

        document.getElementById("message-list").appendChild(messageElement);

        document.getElementById("message").value ='';
    }
});


document.getElementById("edit-group").addEventListener("click", function() {
    const newGroupName = prompt("Enter new group name");
    const newGroupDescription = prompt("Enter new group description");
    document.querySelector(".group-header h2").innerText = newGroupName;
    document.querySelector(".group-header p").innerText = newGroupDescription;
});

document.getElementById("delete-group").addEventListener("click", function () {
    if(confirm("Are you sure you want to delete this group?")) {
        alert("Group deleted");
    }
});


function sendNotification(message) {
    alert(`New message: ${message}`);
}

document.getElementById("send-btn").addEventListener("click", function () {
    const message = document.getElementById("message").value;
    if (message.trim()) {
        sendNotification(message);
    }
});




let typingTimeout;
document.getElementById("message").addEventListener("input", function() {
   clearTimeout(typingTimeout);
   document.getElementById("typing-indicator").style.display = "block";

   typingTimeout = setTimeout(function () {
    document.getElementById("typing-indicator").style.display = "none";
   }, 1000);
});




setInterval(function () {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.innerHTML = `
      <div class="content">This is a new message from another user!</div>
      `;
      document.getElementById("message-list").appendChild(messageElement);      
}, 5000);




document.getElementById("send-btn").addEventListener("click", function() {
    const message = document.getElementById("message").value;
    if (message.trim()) {
        const messages = JSON.parse(localStorage.getItem("messages")) || [];
        messages.push({content: message});
        localStorage.setItem("messages", JSON.stringify(messages));

        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.innerHTML = `<div class="content">${message}</div>`;
        document.getElementById("message-list").appendChild(messageElement);
        document.getElementById("message").value = '';
    }
});

window.addEventListener("load", function() {
    const messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.forEach(function(msg) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.innerHTML = `<div class="content">${msg.content}</div>`;
        document.getElementById("message-list").appendChild(messageElement);
    });
});



document.getElementById("schedule-session-btn").addEventListener("click", function () {
    const sessionTime = document.getElementById("study-session-time").value;
    if (sessionTime) {
        alert(`Study session scheduled for ${sessionTime}`);

        setTimeout(function() {
            alert(`Reminder: Your study session starts now!`);
        }, new Date(sessionTime) - new Date());
    }
});