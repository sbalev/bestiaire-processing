
function setup() {
  //initialisation
  parent.tweakCanvas(createCanvas(600, 400));
  parent.document.getElementById('author').innerHTML = 'Capucine Delobette';
  frameRate(1);
}

function draw() {
  //code en boucle
  //S1
  //ciel bleu:

  colorMode(RGB, width, height, width + height);
  fill(0, 180, 255);
  rectMode(CORNERS);
  rect(0, 0, 600, 400);
  fill(mouseX, 0, mouseY);
  rect(0, 0, 600, 400);




  //soleil:
  fill(220, 200, 0);
  ellipse(70, 40, 70, 70);

  //sol:
  fill(0, 230, 130);
  rectMode(CORNERS);
  rect(0, 300, 600, 400);

  //arbre:
  stroke(100, 100, 100);
  fill(150, 100, 0);
  rectMode(CORNERS);
  rect(100, 350, 150, 250);
  stroke(0, 100, 0);
  fill(0, 200, 0);
  ellipse(125, 180, 155, 155);

  //nuage:
  stroke(255, 255, 255);
  fill(255, 255, 255);
  ellipse(250, 50, 100, 100);

  ellipse(270, 40, 100, 100);

  ellipse(290, 35, 100, 100);
  ellipse(300, 50, 100, 100);

  //chip:

  //corps:
  stroke(0, 0, 0);
  fill(0, 0, 0);
  rectMode(CORNER);
  rect(275, 310, 70, 70);
  //3 leds:
  fill(0, 255, 0);
  rect(285, 330, 10, 10);
  fill(255, 0, 255);
  rect(305, 330, 10, 10);
  fill(255, 255, 0);
  rect(325, 330, 10, 10);

  //les roues:
  fill(0, 0, 0);
  ellipseMode(CENTER);
  ellipse(290, 380, 20, 20);
  ellipse(330, 380, 20, 20);
  //la tete:
  arc(310, 305, 70, 70, -PI, 0, CHORD);
  //camera:
  fill(200, 0, 0);
  ellipse(310, 290, 20, 20);
}
