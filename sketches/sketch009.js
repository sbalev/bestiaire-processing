function setup() {
  parent.tweakCanvas(createCanvas(400, 400));
  parent.document.getElementById('author').innerHTML = 'Guillaume Dujardin';
  background(255);
}

function draw() {
  background(255);

  fill(mouseX);
  strokeWeight(7);
  arc(mouseX, mouseY, 200, 200, 0.5*QUARTER_PI, PI+3*QUARTER_PI+0.5*QUARTER_PI, PIE);

  noFill();
  ellipse(mouseX, mouseY, 200, 200);

  fill(255);
  ellipse(mouseX, mouseY - 50, 40, 40);

  fill(0);
  ellipse(mouseX, mouseY - 50, 15, 15);

  strokeWeight(3);
  line(mouseX + 30, mouseY + 10, mouseX + 30, mouseY - 10);

  line(mouseX + 30, mouseY - 10, mouseX + 50, mouseY + 20);

  line(mouseX + 50, mouseY + 20, mouseX + 70, mouseY - 30);

  line(mouseX + 70, mouseY - 30, mouseX + 93, mouseY + 39);

  strokeWeight(5);
  noFill();
  ellipse(mouseX - 115, mouseY, 25, 25);

  noFill();
  ellipse(mouseX - 120, mouseY + 25, 25, 25);

  noFill();
  ellipse(mouseX - 130, mouseY + 50, 25, 25);

  noFill();
  ellipse(mouseX - 155, mouseY + 50, 25, 25);

  quad(mouseX - 170, mouseY + 65, mouseX - 185, mouseY + 65, mouseX - 188, mouseY + 30, mouseX - 166.5, mouseY + 30);

  rect(mouseX - 197, mouseY + 30, 38, -15);
}
