function setup() {
  parent.tweakCanvas(createCanvas(600, 400));
  parent.document.getElementById('author').innerHTML = 'Nathan Riette';
}

var x = 0;
var y = 0;
var j = 0;
var t1 = 0;
var t2 = 0;

function draw() { //Mise en place de la boucle

  fill(255, 255, 255);
  rect(0, 0, 600, 400); //Mise à jour de l'image
  fill(211, 136, 21);


  //pot de fleur

  quad(x+270, y+350, x+330, y+350, x+360, y+280, x+240, y+280); // Base du pot
  line(x+240, y+266, x+360, y+266); //ligne supérieur du rebord supérieur

  noStroke(); //Effacement des contours
  fill(211, 136, 21); //remplissage du pot
  rect(x+240, y+280, 120, -13); //position du remplissage en forme carré

  fill(211, 136, 21);
  stroke(0, 0, 0);
  arc(x+240, y+274, 19, 15, HALF_PI, PI+HALF_PI); //Demi cercle gauche du pot
  arc(x+360, y+274, 19, 15, -HALF_PI, HALF_PI); //Demi cercle droit du pot

  //tige de la plante
  strokeWeight(25); // Epaisseur de la tige de la plante
  stroke(47, 170, 0);
  line(x+300, y+260, mouseX-10, mouseY+25); //ligne représentant la tige de la plante
  strokeWeight(1); // Epaisseur normales des lignes
  stroke(0, 0, 0);

  //Emplacement de la machoire du pac man
  fill(255, 255, 255, 0);
  noStroke();
  arc(mouseX, mouseY, 150, 150, PI+HALF_PI+QUARTER_PI, TWO_PI+QUARTER_PI);
  stroke(0, 0, 0);
  fill(255, 0, 0);

  if (keyIsPressed == true) {
    if (keyCode == LEFT_ARROW) {
      x = x - 2;
    }
    if (keyCode == RIGHT_ARROW) {
      x =  x+2;
    }
    if (keyCode == UP_ARROW) {
      y = y - 2;
    }
    if (keyCode == DOWN_ARROW) {
      y = y + 2;
    }
  }

  //Tête de la plante quand la touche est pressée
  if (mouseIsPressed == true) {
    arc(mouseX, mouseY, 150, 150, 0, PI+PI, PIE);
    fill(255, 255, 255);
  } else {
    //Tête de la plante quand la touche n'est pas pressée
    arc(mouseX, mouseY, 150, 150, QUARTER_PI, PI+QUARTER_PI+HALF_PI, PIE);
    fill(255, 255, 255);
    triangle(mouseX+7, mouseY+7, mouseX+22, mouseY+22, mouseX+23, mouseY+5);//Dent du bas dans l'ordre du + prêt au + éloigné par rapport au centre du cercle
    triangle(mouseX+22, mouseY+22, mouseX+37, mouseY+37, mouseX+44, mouseY+10);
    triangle(mouseX+37, mouseY+37, mouseX+53, mouseY+53, mouseX+60, mouseY+25);

    triangle(mouseX+7, mouseY-7, mouseX+22, mouseY-22, mouseX+23, mouseY-5); //Dent du haut dans l'ordre du + prêt au + éloigné par rapport au centre du cercle
    triangle(mouseX+22, mouseY-22, mouseX+37, mouseY-37, mouseX+44, mouseY-10);
    triangle(mouseX+37, mouseY-37, mouseX+53, mouseY-53, mouseX+60, mouseY-25);
  }

  //Oeil du Pacman
  arc(mouseX+10, mouseY-40, 20, 20, 0, PI+QUARTER_PI, CHORD);
}
