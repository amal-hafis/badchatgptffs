



document.addEventListener("DOMContentLoaded", () => {
    
    const chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
    const mainDiv = document.getElementById("message-section");

    
    function addToChatHistory(input, product) {
        chatHistory.push({ input, product });
        
        localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
        voiceControl(product)
    }

    
    function displayChatHistory() {
        mainDiv.innerHTML = ""; 
        chatHistory.forEach((item) => {
            const userDiv = document.createElement("div");
            userDiv.id = "user";
            userDiv.classList.add("message");
            userDiv.innerHTML = `<span id="user-response">${item.input}</span>`;
            mainDiv.appendChild(userDiv);

            const botDiv = document.createElement("div");
            botDiv.id = "bot";
            botDiv.classList.add("message");
            botDiv.innerHTML = `<span id="bot-response">${item.product}</span>`;
            mainDiv.appendChild(botDiv);
        });

        
        var scroll = document.getElementById("message-section");
        scroll.scrollTop = scroll.scrollHeight;
    }
    const synth = window.speechSynthesis;
  
    function voiceControl(string) {
        let u = new SpeechSynthesisUtterance(string);
        u.text = string;
        u.lang = "en-US";
        u.volume = 1;
        u.rate = 1;
        u.pitch = 1;
            synth.speak(u);
    
  }

    displayChatHistory();

    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", function (e) {
        if (e.code === "Enter") {
            const input = inputField.value.trim();
            if (input !== "") {
                inputField.value = "";
                getMessage(input);
            }
        }
    });

    async function getMessage(input) {
        const API_URL = "https://api.openai.com/v1/completions";
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer sk-0rCE8WrtInqOUih9UN2JT3BlbkF__urAPIkey___Jrjycii0Z2BNAcz`
            },
            body: JSON.stringify({
                model: "text-davinci-003",
                prompt: input,
                max_tokens: 2048,
                temperature: 0.2,
                n: 1,
                stop: null
            })
        }

        try {
            const response = await fetch(API_URL, requestOptions);
            const data = await response.json();
            const product = data.choices[0].text.trim();
            addToChatHistory(input, product); 
            displayChatHistory(); 
            voiceControl(product);
        } catch (error) {
            console.log(error);
        }
    }
});


 

