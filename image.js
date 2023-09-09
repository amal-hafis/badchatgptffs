

const shunt = document.getElementsByClassName("shunt");

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

for (let i = 0; i < shunt.length; i++) {
  shunt[i].addEventListener('click', function(event) {
    console.log("its a shunt");
    const answer = document.querySelector(".answer"); 
    answer.innerText = "A shunt is a device used to divert or bypass a portion of an electric current from one circuit to another. It is typically used to protect a circuit from excessive current or to measure the current flowing through a circuit.";
    voiceControl("A shunt is a device used to divert or bypass a portion of an electric current from one circuit to another. It is typically used to protect a circuit from excessive current or to measure the current flowing through a circuit.")
  });
}

const resistor = document.getElementsByClassName("resistor");

for (let i = 0; i < resistor.length; i++) {
  resistor[i].addEventListener('click', function(event) {
    console.log("its a resistor");
    const answer = document.querySelector(".answer"); 
    answer.innerText = "A resistor is an electrical component that resists the flow of electric current. It is used to regulate the current in an electrical circuit.";
    voiceControl("A resistor is an electrical component that resists the flow of electric current. It is used to regulate the current in an electrical circuit.")
  });
}

const galvanometer = document.getElementsByClassName("galvanometer");

for (let i = 0; i < galvanometer.length; i++) {
  galvanometer[i].addEventListener('click', function(event) {
    console.log("its a galvanometer");
    const answer = document.querySelector(".answer"); 
    answer.innerText = "A galvanometer is an instrument used for detecting and measuring electric current. It works by using a coil of wire and a magnetic field to deflect a pointer in proportion to the current. Galvanometers are used in a wide variety of applications, including measuring electrical power, monitoring electrical signals, and testing electrical circuits.";
    voiceControl("A galvanometer is an instrument used for detecting and measuring electric current. It works by using a coil of wire and a magnetic field to deflect a pointer in proportion to the current. Galvanometers are used in a wide variety of applications, including measuring electrical power, monitoring electrical signals, and testing electrical circuits.")
  });
}



