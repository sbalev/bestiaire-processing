function setup() {
  parent.tweakCanvas(createCanvas(500, 500));
  parent.document.getElementById('author').innerHTML = 'Anthony Le Moal';
}

function draw() {
  background(255);
  fill(0);
  triangle(mouseX -5, mouseY -25, mouseX -35, mouseY -65, mouseX +5, mouseY -35);
  triangle(mouseX +55, mouseY -25, mouseX +85, mouseY -65, mouseX +45, mouseY -35);
  fill(0);
  ellipse(mouseX+10, mouseY+100, 20, 20);
  ellipse(mouseX+40, mouseY +100, 20, 20);
  strokeWeight(3);
  line(mouseX + 50, mouseY + 75, mouseX +75, mouseY +95);
  fill(200, 0, 0);
  strokeWeight(1);
  rect(mouseX, mouseY, 50, 100);

  ellipse(mouseX +25, mouseY -5, 75, 75);
  fill(255);
  ellipse(mouseX +10, mouseY-15, 20, 20);
  ellipse(mouseX +40, mouseY -15, 20, 20);

  point(mouseX+10, mouseY -15);
  point(mouseX+40, mouseY-15);
  arc(mouseX+25, mouseY, 50, 50, 0, PI, CHORD);
  line(mouseX, mouseY -35, mouseX + 15, mouseY -25);
  line(mouseX +50, mouseY -35, mouseX +35, mouseY -25);

  fill(0);
  triangle(mouseX +65, mouseY +93, mouseX +75, mouseY+88, mouseX +80, mouseY+98);
}
