function setup() {
  // Fenêtre
  parent.tweakCanvas(createCanvas(1000, 800));
  parent.document.getElementById('author').innerHTML = 'Léo Gosse';
}

function draw() {
  background(240);
  // Corps
  fill(200);
  quad(mouseX - 100, mouseY, mouseX + 100, mouseY, mouseX + 120, mouseY + 60, mouseX - 120, mouseY + 60);

  // Pimpage du corps
  colorMode(RGB, width, height, width + height);
  fill(mouseX, 0,0);
  rect(mouseX - 70, mouseY + 20, 20, 20);
  fill(mouseX,mouseY,0);
  rect(mouseX - 40 , mouseY + 20, 20, 20);
  fill(0,mouseX, mouseX+mouseY);
  rect(mouseX -10  , mouseY + 20, 20, 20);
  fill(0,0,mouseY);
  rect(mouseX + 20, mouseY + 20, 20, 20);
  fill(0,mouseX,0);
  rect(mouseX + 50, mouseY + 20, 20, 20);
  colorMode(RGB, 255, 255, 255);

  // La tête
  fill(200);
  ellipse(mouseX + 100, mouseY - 40, 80, 80);

  // Pimpage de la tête
  fill(255);
  ellipse(mouseX + 125, mouseY - 60, 10, 10);
  fill(0);
  ellipse(mouseX + 126, mouseY - 60, 4, 4);

  // L'antenne (tête)
  line(mouseX + 100, mouseY-80, pmouseX + 90, pmouseY - 120);

  // L'antenne (cul)
  line(mouseX - 100, mouseY, pmouseX -120, pmouseY - 60);

  // Bout de l'antenne de la tête
  colorMode(RGB, width, height, width + height);
  fill(mouseX+mouseY, 0, 0);
  ellipse(pmouseX + 90, pmouseY - 120, 10, 10);

  // Bout de l'antenne du cul
  fill(0,0,mouseX+mouseY);
  ellipse(pmouseX - 120, pmouseY - 60, 20, 20);
  colorMode(RGB,255,255,255);

  // Les roues
  fill(150);
  ellipse(mouseX - 80, mouseY + 60, 40, 40);
  ellipse(mouseX + 80, mouseY + 60, 40, 40);

  // Pimpage des roues
  fill(250);
  ellipse(mouseX - 80, mouseY + 60, 35, 35);
  ellipse(mouseX + 80, mouseY + 60, 35, 35);
}
