
function setup () {
  parent.tweakCanvas(createCanvas(600, 400));
  parent.document.getElementById('author').innerHTML = 'Timothee Boutin';
  frameRate(40);
}

function draw () {
  background(0);
  fill(246, 229, 0);
  noStroke();
  stroke(0x03, 0x2A, 0xFF);
  strokeWeight(20);
  line(0, 75, 600, 75);
  noStroke();
  stroke(0x03, 0x2A, 0xFF);
  strokeWeight(20);
  line(0, 325, 600, 325);
  textSize(50);
  fill(246, 229, 0);
  text("PACMAN", 225, 60);
  strokeWeight (1);
  arc (mouseX, mouseY, 150, 150, 0+QUARTER_PI, PI+3*QUARTER_PI, PIE);
  fill (255);
  arc (mouseX, mouseY - 50, 20, 20, 0, 2*PI, CHORD);
  noStroke();
  fill(0);
  arc(mouseX + 5, mouseY - 50, 10, 10, 0, 2*PI, CHORD);
  fill(246, 229, 0);
  arc(250, 200, 20, 20, 0, 2*PI, CHORD);
  arc(300, 200, 20, 20, 0, 2*PI, CHORD);
  arc(350, 200, 20, 20, 0, 2*PI, CHORD);
  arc(400, 200, 20, 20, 0, 2*PI, CHORD);
  fill(0xFF, 0x25, 0x1A);
  arc(500, 200, 125, 125, -PI, 0, OPEN);
  noStroke();
  fill(0xFF, 0x25, 0x1A);
  rect(438, 200, 124, 75);
  noStroke();
  fill(255);
  arc(475, 180, 25, 25, 0, 2*PI, CHORD);
  noStroke();
  fill(255);
  arc(525, 180, 25, 25, 0, 2*PI, CHORD);
  noStroke();
  fill(0);
  arc(470, 180, 15, 15, 0, 2*PI, CHORD);
  noStroke();
  fill(0);
  arc(520, 180, 15, 15, 0, 2*PI, CHORD);
  noStroke();
  fill(0xFF, 0x25, 0x1A);
  triangle(438, 275, 453, 305, 469, 275);
  noStroke();
  fill(0xFF, 0x25, 0x1A);
  triangle(469, 275, 483, 305, 500, 275);
  noStroke();
  fill(0xFF, 0x25, 0x1A);
  triangle(500, 275, 513, 305, 531, 275);
  noStroke();
  fill(0xFF, 0x25, 0x1A);
  triangle(531, 275, 543, 305, 562, 275);
}

function mousePressed() {
  fill(246, 229, 0);
  arc (mouseX, mouseY, 150, 150, 0, 2*PI, CHORD);
  fill (255);
  arc (mouseX, mouseY - 50, 20, 20, 0, 2*PI, CHORD);
  noStroke();
  fill(0);
  arc(mouseX + 5, mouseY - 50, 10, 10, 0, 2*PI, CHORD);
  fill(246, 229, 0);
}
