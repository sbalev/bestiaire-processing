// Enzo De Luca
function setup() {
  parent.tweakCanvas(createCanvas(400, 400));
  parent.document.getElementById('author').innerHTML = 'Enzo De Luca';
}

function draw() {
  background(255);
  rectMode(CORNER);
  //Boucle
  strokeWeight(1);
  // manche
  stroke(0);
  fill(127);
  rect(180, 200, 30, 80);
  fill(180);
  rect(185, 200, 20, 30);
  fill(255, 0, 0);
  ellipse(195, 230, 5, 5);
  fill(0, 255, 0);
  ellipse(195, 240, 5, 5);
  fill(174, 239, 252);
  ellipse(195, 250, 5, 5);
  stroke(0);
  noFill();
  rect(187, 260, 15, 15);
  //laser
  noStroke();
  fill(0, 255, 0, 180);
  rectMode(CORNERS);
  if (mouseY<200 & mouseY>20) {
    rect(180, mouseY, 210, 200);
    strokeWeight(3);
  }
}
