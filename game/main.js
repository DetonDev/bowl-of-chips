// the variables!
let time = 0; // the part of the game that you are at.
let progress = -1; // how close you are to getting to the next part.

// updating the game!
function update() {
  progress++;
  // have you made to the next part of the game? if so, then reset progress counter and move on to the next bit in the game!	
  if (progress == content[time].length) {
    progress = 0;
    time++;
  };
  document.getElementById("situation").innerHTML = content[time].text; // updating the main text that lets you know what's going on!
  document.getElementById("progress").innerHTML = content[time].progress + ':<br>' + progress + '/' + content[time].length; // updating the progress ticker so that you can know how close you are to the next part!
  document.getElementById("action").innerHTML = content[time].action; // updating the button text to fit with the rest of the program!
};

update();
