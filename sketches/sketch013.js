function setup() {
  // initialisation
  parent.tweakCanvas(createCanvas(400, 400));
  parent.document.getElementById('author').innerHTML = 'Killian Martin et Luca Marinelli';
}

function draw() {
  // le code s'exécute en boucle
  background(131, 186, 240);

  // la roue
  fill(55);
  ellipse(mouseX, mouseY+70, 20, 40);

  // le corps
  fill(250, 210, 48);
  quad(mouseX-40, mouseY-15, mouseX+40, mouseY-15, mouseX+15, mouseY+70, mouseX-15, mouseY+70);

  // ligne
  noStroke();
  fill(255, 243, 147);
  quad(mouseX-30, mouseY+20, mouseX-27, mouseY+30, mouseX+27, mouseY+30, mouseX+30, mouseY+20);
  stroke(1);

  // Support Caméra
  fill(85, 67, 51);
  quad(mouseX-15, mouseY-15, mouseX+15, mouseY-15, mouseX+7, mouseY+35, mouseX-7, mouseY+35);

  // La Caméra
  fill(10, mouseX, 255);
  ellipse(mouseX, mouseY+5, 20, 20);

  // l'antenne
  strokeWeight(3);
  line(mouseX, mouseY-16, pmouseX, pmouseY-65);

  // les bras
  strokeWeight(5);
  line(mouseX+35, mouseY+5, pmouseX+55, pmouseY+30);
  line(pmouseX+55, pmouseY+30, pmouseX+35, pmouseY+45);
  line(mouseX-35, mouseY+5, pmouseX-65, pmouseY+8);
  line(pmouseX-65, pmouseY+8, pmouseX-63, pmouseY-30);
  strokeWeight(1);
}
