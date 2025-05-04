// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // getting horn stats
  const horn = document.getElementById("horn-select");
  const hornImage = document.querySelector("#expose img");
  const hornSound = document.querySelector("#expose audio");

  // getting volume stats
  const volume = document.getElementById("volume");
  const volume_logo = document.querySelector("#volume-controls img");

  // getting the play button
  const play_button = document.querySelector("#expose button");
  

  /**
   * Verification and debugging purposes
   */
  console.log("hornSelefct = ", horn);
  console.log("hornImage = ", hornImage);
  console.log("hron sound ", hornSound);
  console.log("Volume at ", volume);
  console.log("Volume logo: ", volume_logo);
  console.log("Plya button: ", play_button);


  /**
   * Event listener for horn
   */
  horn.onchange = function(){
    // getting the chosen horn type
    const hornType = horn.value;
    console.log("Horn type: ", hornType);

    // choosing the correct image based on change
    hornImage.src = `assets/images/${hornType}.svg`;
    hornImage.alt = hornType + " image";

    // choosing the appropirate sound value
    hornSound.src = `assets/audio/${hornType}.mp3`;
  }

  /**
   * Event listener for volume
   */
  volume.oninput = function(){
    const vol = Number(volume.value);
    let volume_level;
    hornSound.volume = vol / 100;

    // to monitor volume levels
    console.log(vol);

    if(vol == 0) volume_level = 0;
    else if(vol < 33) volume_level = 1;
    else if(vol < 67) volume_level = 2;
    else volume_level = 3;

    volume_logo.src = `assets/icons/volume-level-${volume_level}.svg`;
  }

  /**
   * Event Listener for play button
   */
  play_button.onclick = function(){
    console.log("clicked!");
    hornSound.play();

    // playing the confetti animation
    if (horn.value === "party-horn") {
      // creating a canvas element through js
      const canvas = document.createElement("canvas");
      canvas.id = "confetti-canvas";  // assigning ID
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.position = "fixed";  // styling position
      canvas.style.pointerEvents = "none"; // allows clicking during animation
      
      // adding the canvas to the page
      document.body.appendChild(canvas);
  
      // carrying out the confetti animation
      const jsConfetti = new window.JSConfetti({ canvas });
      jsConfetti.addConfetti({
        confettiNumber: 1000,
      });
  
      // cleaning up the canvas -- removing it -- to avoid stacking
      setTimeout(() => {
        document.body.removeChild(canvas);
      }, 3000);
    }
  }
}