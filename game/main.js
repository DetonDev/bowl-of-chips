// The variables!
let time = 0; // the part of the game that you are at.
let progress = -1; // how close you are to getting to the next part.

// updating text!
function update() {
  progress++;
  if (progress == content[time].length) {
    progress = 0;
    time++;
  };
  document.getElementById("situation").innerHTML = content[time].text;
  document.getElementById("progress").innerHTML = content[time].progress + ': ' + progress + '/' + content[time].length;
  document.getElementById("action").innerHTML = content[time].action;
};

update();