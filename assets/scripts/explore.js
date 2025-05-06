// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // getting the voice element(s)
  const voiceSelect = document.getElementById("voice-select");
  // getting the text input of the user
  const input = document.getElementById("text-to-speak");
  // getting the button
  const button = document.querySelector("#explore button");
  // getting the face
  const face = document.querySelector("#explore img");

  let allVoices = [];

  // making a helper function
  function getAllVoices(){
    allVoices = window.speechSynthesis.getVoices();

    // setting up the  default "Select voice" option
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';
    
    // loading in all the voices
    allVoices.forEach((voice, i) => {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = i;
      voiceSelect.appendChild(option);
    });
  }

  // calling the helper
  window.speechSynthesis.onvoiceschanged = getAllVoices;
  getAllVoices();

  // button event listener
  button.onclick = function(){
    const speech = new SpeechSynthesisUtterance(input.value);
    const index = voiceSelect.value;

    if(index !== "select"){
      speech.voice = allVoices[index];
    }

    // changing the smiling image when speaking to open mouth
    speech.onstart = function(){
      face.src = "assets/images/smiling-open.png";
    }
    speech.onend = function(){
      face.src = "assets/images/smiling.png";
    }

    // starting the speech
    speechSynthesis.speak(speech);
  }
}