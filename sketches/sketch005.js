function setup() {
  // le code d'initialisation
  parent.tweakCanvas(createCanvas(400, 400));
  parent.document.getElementById('author').innerHTML = 'Joachim Bludoh';

}

function draw() {
  // le code qui s'exécute en boucle
  background(255);

  // l'anneau
  stroke(239, 51, 64); // rouge
  fill(239, 51, 64); // rouge
  rect(mouseX, mouseY, 100, 100);

  stroke(0); // noir
  fill(255, 255, 255); // blanc
  ellipse(mouseX +50, mouseY +50, 100, 100);

  // les branches
  stroke(239, 51, 64); // rouge
  fill(239, 51, 64);
  triangle(mouseX, mouseY, mouseX +50, mouseY -100, mouseX +100, mouseY);

  fill (239, 51, 64);
  triangle(mouseX +100, mouseY +100, mouseX +200, mouseY +50, mouseX +100, mouseY);

  fill (239, 51, 64);
  triangle(mouseX +50, mouseY +200, mouseX, mouseY +100, mouseX +100, mouseY +100);

  fill (239, 51, 64);
  triangle(mouseX -100, mouseY +50, mouseX, mouseY, mouseX, mouseY +100);
}
