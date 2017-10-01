function setup() {
  parent.tweakCanvas(createCanvas(400, 400));
  parent.document.getElementById('author').innerHTML = 'Noémie Fontaine';
  frameRate(30);
}

function draw() {
  // code qui s'éxécute en boucle
  background(255);

  // le corps
  colorMode(RGB,width, height, width + height);
  fill(mouseX + mouseY,0,0);
  stroke(0);
  arc(mouseX, mouseY +100, 150, 150, 0, 2*PI);
  colorMode(RGB, 255, 255, 255);

  // les bras

  line(mouseX + 30, mouseY + 100, mouseX + 80, mouseY + 10);
  line(mouseX - 30, mouseY + 100, mouseX - 80, mouseY +10);

  //boutons

  strokeWeight(6);
  point(mouseX, mouseY + 65);
  point(mouseX, mouseY + 90);
  point(mouseX, mouseY + 115);

  // tête

  fill(255);
  stroke(0);
  strokeWeight(1);
  arc(mouseX, mouseY - 25, 100, 100, 0, 2*PI);

  // yeux

  strokeWeight(6);
  point(mouseX - 20, mouseY - 35);
  strokeWeight(6);
  point(mouseX + 20, mouseY - 35);

  // nez

  strokeWeight(1);
  noStroke();
  fill(255, 153, 0);
  triangle(mouseX, mouseY - 20, mouseX -40 , mouseY - 10, mouseX, mouseY - 30);
}
