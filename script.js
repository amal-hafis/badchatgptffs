const userMessage = [
    ["hi", "hey", "hello"],
    ["how are you","how is life","how is your day"],
    ["what is the si unit of electric field"],
    ["is electric field a vector"],
    ["what is si unit of electric flux"],
    ["what is the formula of drift velocity"],
    ["what is the si unit of magnetic field"],
    ["is magnetic field vector"],
    ["what is faradays 1st law"],
    ["what is the formula for peek current"],
    ["what is a transformer"],
    ["what is the si unit of impedence"],
    ["what is the formula for conductivity"],
    ["what is the use of an ac genarator"],
    ["what is the si unit of refractive index"],
    ["what is the speed of light"],
    ["what is the si unit of c"],
    ["what is the formula for refractive index"],
    ["what is the si unit of capacitance"],
    ["what is the si unit of inductance"],
    ["what is resonance"],
    ["formula of frequency"],
    ["what is shunt"],
    ["what is the formula for capacitance"],
    ["what is the full form of LDR"],
    ["einstein's equation"],
    ["the peak voltage of 220v ac mains is"],
    ["i have a physics test"],
    ["where is stai hosted in 2023"],
    ["what is the fullform of stai"]
  ];
  
  
  const botReply = [
    ["Hello!", "Hi!", "Hey!", "Hi there!"],
    ["Fantastic"],
    ["Newton per coulumb or Volt per meter"],
    ["Yes,defentely!!","It is an vector because with magnitude it also has direction"],
    ["Newton meter"],
    ["v=I / neA"],
    ["Tesla"],
    ["The magnetic field is described mathematically as a vector field"],
    ["Faraday's first law of electromagnetic induction states the following: Whenever a conductor is placed in a varying magnetic field, an electromotive force is induced. "],
    ["peak current= I rms * root 2"],
    ["A transformer is a device that transfers electric energy from one alternating-current circuit to one or more other circuits, either increasing (stepping up) or reducing (stepping down) the voltage."],
    ["The SI of Impedence is Ohm"],
    ["conductivty is inverse of resistivity "],
    ["AC genarator is used to create alternating current"],
    ["Refractive index has no SI unit"],
    ["It is approximately equal to 300,000,000"],
    ["The SI unit of speed of light is meter per second"],
    ["n=sine(i) per sine(r)"],
    ["The SI unit of capacitance is Faraday"],
    ["The SI unit of inductance is Henry"],
    ["Resonance occurs when an LC circuit is driven from an external source at an angular frequency ω0 at which the inductive and capacitive reactances are equal in magnitude. "],
    ["f= 1 / Time period"],
    ["Shunt is the small resistance connected in parllel with the galvanometer"],
    ["C=Q/V"],
    ["Light Dependent Resistor"],
    ["E=m*c*c"],
    ["Okay No problem i can prepare you ask me as many questions you can"],
    ["311 Volts"],
    ["Stai is hosted ISAM in 2023"],
    ["Science Technology And Innovation"]
   
  ];
  
  
  
  const alternative = [
    
    "I am in my learning stage so i dont know answers to all questions",
    "Ask something else...",
    "I can be linked to huge database to answer all your queries.Apparently that will happen in the near future."
  ];
  
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
  
  function sendMessage() {
    const inputField = document.getElementById("input");
    let input = inputField.value.trim();
    input != "" && output(input);
    inputField.value = "";
  }
  document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", function (e) {
      if (e.code === "Enter") {
        let input = inputField.value.trim();
        input != "" && output(input);
        inputField.value = "";
      }
    });
  });
  
  function output(input) {
    let product;
  
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  
    text = text
      .replace(/[\W_]/g, " ")
      .replace(/ a /g, " ")
      .replace(/i feel /g, "")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "")
      .trim();
  
    let comparedText = compare(userMessage, botReply, text);
  
    product = comparedText
      ? comparedText
      : alternative[Math.floor(Math.random() * alternative.length)];
    addChat(input, product);
  }
  
  function compare(triggerArray, replyArray, string) {
    let item;
    for (let x = 0; x < triggerArray.length; x++) {
      for (let y = 0; y < replyArray.length; y++) {
        if (triggerArray[x][y] == string) {
          items = replyArray[x];
          item = items[Math.floor(Math.random() * items.length)];
        }
      }
    }
    //containMessageCheck(string);
    if (item) return item;
    else return containMessageCheck(string);
  }
  
  function containMessageCheck(string) {
    let expectedReply = [
      [
        "Good Bye",
        "Bye, See you!",
        "Bye. Take care of your health in this situation."
      ],
      ["Good Night, dude", "Have a sound sleep", "Sweet dreams"],
      ["Have a pleasant evening!", "Good evening too", "Evening!"],
      ["Good morning, Have a great day!", "Morning!"],
      ["Good Afternoon", "Noon, dude!", "Afternoon!"]
    ];
    let expectedMessage = [
      ["bye", "tc", "take care"],
      ["night", "good night"],
      ["evening", "good evening"],
      ["morning", "good morning"],
      ["noon"]
    ];
    let item;
    for (let x = 0; x < expectedMessage.length; x++) {
      if (expectedMessage[x].includes(string)) {
        items = expectedReply[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
    return item;
  }

  function addChat(input, product) {
    const mainDiv = document.getElementById("message-section");
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.classList.add("message");
    userDiv.innerHTML = `<span id="user-response">${input}</span>`;
    mainDiv.appendChild(userDiv);
  
    let botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.classList.add("message");
    botDiv.innerHTML = `<span id="bot-response">${product}</span>`;
    mainDiv.appendChild(botDiv);
    var scroll = document.getElementById("message-section");
    scroll.scrollTop = scroll.scrollHeight;
    voiceControl(product);
  }
