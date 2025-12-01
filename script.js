document.addEventListener("DOMContentLoaded", () => {
    const chatInput = document.getElementById("local-input");
    const sendBtn = document.getElementById("local-send");
    const chatMessages = document.getElementById("local-messages");

    function displayMessage(message, sender = "user") {
        const p = document.createElement("p");
        p.textContent = message;
        p.style.margin = "5px 0";
        if(sender === "bot") p.style.fontWeight = "bold";
        chatMessages.appendChild(p);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function getBotResponse(msg) {
        msg = msg.toLowerCase();
        if(msg.includes("hi") || msg.includes("hello")) return "Hi! I’m KasonBot. You can ask me about skills, projects, or my resume.";
        if(msg.includes("skill")) return "I am skilled in Python, Java, JavaScript, C++, React, Linux, and networking infrastructure.";
        if(msg.includes("project")) return "Check out my projects in the Projects section or on my GitHub repository!";
        if(msg.includes("experience")) return "I have hands-on experience in IT, cloud deployments, and networking projects.";
        if(msg.includes("resume")) return "You can view or download my resume from the Resume section above.";
        return "Sorry, I don't understand. Try asking about skills, projects, or resume.";
    }

    sendBtn.addEventListener("click", () => {
        const userMsg = chatInput.value.trim();
        if(!userMsg) return;
        displayMessage("You: " + userMsg);
        displayMessage("Bot: " + getBotResponse(userMsg), "bot");
        chatInput.value = "";
    });

    // Allow pressing Enter to send
    chatInput.addEventListener("keypress", (e) => {
        if(e.key === "Enter") sendBtn.click();
    });
});