const chatInput = document.getElementById("local-input");
const sendBtn = document.getElementById("local-send");
const chatMessages = document.getElementById("local-messages");

sendBtn.addEventListener("click", () => {
    const userMsg = chatInput.value.trim();
    if (!userMsg) return;

    displayMessage("You: " + userMsg);

    // Local chatbot responses
    let botMsg = "Sorry, I don't understand. Try asking about skills, projects, or resume.";
    if (userMsg.toLowerCase().includes("skill")) {
        botMsg = "I am skilled in Python, Java, JavaScript, C++, React, Linux, and networking infrastructure.";
    } else if (userMsg.toLowerCase().includes("project")) {
        botMsg = "Check out my projects in the Projects section or on my GitHub repository!";
    } else if (userMsg.toLowerCase().includes("experience")) {
        botMsg = "I have hands-on experience in IT, cloud deployments, and networking projects.";
    } else if (userMsg.toLowerCase().includes("resume")) {
        botMsg = "You can view or download my resume from the Resume section above.";
    } else if (userMsg.toLowerCase().includes("hello") || userMsg.toLowerCase().includes("hi")) {
        botMsg = "Hi! I’m KasonBot. You can ask me about skills, projects, or my resume.";
    }

    displayMessage("Bot: " + botMsg);
    chatInput.value = "";
});

function displayMessage(message) {
    const p = document.createElement("p");
    p.textContent = message;
    chatMessages.appendChild(p);
    chatMessages.scrollTop = chatMessages.scrollHeight;