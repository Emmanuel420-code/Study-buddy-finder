document.addEventListener("DOMContentLoaded", () => {
    const chatBox = document.getElementById("chatBox");
    const messageInput = document.getElementById("messageInput");
    const sendButton = document.getElementById("sendButton");
    const typingIndicator = document.getElementById("typingIndicator");

    let typingTimeout;

    sendButton.addEventListener("click", sendMessage);
    messageInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") sendMessage();
    });

    function sendMessage(){
        const messageText = messageInput.value.trim();
        if (messageText === "") return;

        addMessage("You", messageText, "user");

        setTimeout(() => {
            addMessage("Study Budy", "That sounds great!", "other");
        }, 1500);

        messageInput.value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function addMessage(sender, text, type) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", type);
        messageElement.innerHTML = `<strong>${sender}:</strong> ${text}`;
        chatBox.appendChild(messageElement);

        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function showTyping() {
        typingIndicator.style.display = "block";

        clearTimeout(typingTimeout);
        typingTimeout = setTimeout(() => {
            typingIndicator.style.display = "none";
        }, 1000);
    }

});