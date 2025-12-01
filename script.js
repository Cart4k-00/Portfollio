const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");
const chatMessages = document.getElementById("chat-messages");

sendBtn.addEventListener("click", () => {
    const userMsg = chatInput.value.trim();
    if (!userMsg) return;
    displayMessage("You: " + userMsg);

    // Simple chatbot responses
    let botMsg = "Sorry, I don't understand.";
    if (userMsg.toLowerCase().includes("skill")) {
        botMsg = "I am skilled in Python, Java, JavaScript, C++, React, and networking infrastructure.";
    } else if (userMsg.toLowerCase().includes("project")) {
        botMsg = "Check out my projects on the Projects section or GitHub!";
    } else if (userMsg.toLowerCase().includes("experience")) {
        botMsg = "I have hands-on experience in IT and cloud deployments.";
    }

    displayMessage("Bot: " + botMsg);
    chatInput.value = "";
});

function displayMessage(message) {
    const p = document.createElement("p");
    p.textContent = message;
    chatMessages.appendChild(p);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

(function(){
  const faq = [
    {keys:['languages','language','programming'], answer:'I use Python, JavaScript, Java, C++ and Bash. I also work with Linux and networking.'},
    {keys:['skills','experience','what can you do'], answer:'I work with networking infrastructure, Linux servers, cloud security, and technical support.'},
    {keys:['linux','ubuntu','centos'], answer:'I use Ubuntu, Linux Mint and CentOS for server tasks and Linux hardening.'},
    {keys:['projects','portfolio','demo'], answer:'Check the Projects section — links to my work are listed there.'},
    {keys:['resume','download'], answer:'You can download my resume in the Resume section.'},
    {keys:['availability','internship','hiring'], answer:'I am available for internships; contact me via the Contact section.'}
  ];

  function localReply(text){
    const t=text.toLowerCase();
    for(const item of faq){
      for(const k of item.keys){
        if(t.includes(k)) return item.answer;
      }
    }
    return "Sorry — I didn't catch that. Try: 'skills', 'resume', or 'projects'.";
  }

  function postLocal(who, text){
    const box = document.getElementById('local-messages');
    if(!box) return;
    const el = document.createElement('div');
    el.style.marginBottom='8px';
    el.textContent = (who==='user' ? 'You: ' : 'Bot: ') + text;
    if(who==='user') el.style.fontWeight='600';
    box.appendChild(el);
    box.scrollTop = box.scrollHeight;
  }

  document.addEventListener('DOMContentLoaded', ()=>{
    const input = document.getElementById('local-input');
    const btn = document.getElementById('local-send');
    if(!btn) return;
    btn.addEventListener('click', ()=>{
      const v = input.value.trim();
      if(!v) return;
      postLocal('user', v);
      setTimeout(()=> postLocal('bot', localReply(v)), 300);
      input.value='';
    });
    input.addEventListener('keydown', (e)=>{
      if(e.key==='Enter'){ e.preventDefault(); btn.click(); }
    });
  });
})();