
function setup() {
  parent.tweakCanvas(createCanvas(500, 300));
  parent.document.getElementById('author').innerHTML = 'Adel Abid et Sullyvan Ponizy';

}


function draw() {



  frameRate(60);

  background(0);
  // point faiblesse phamtom
  fill(255-mouseX+240, 255-mouseX+240, 255-mouseX+240);
  ellipse(445, 100, 25, 25);
  // point
  fill(255-mouseX+150, 255-mouseX+150, 255-mouseX+150);
  ellipse(340, 100, 5, 5);
  // point jaune
  fill(255-mouseX+150, 255-mouseX+150, 255-mouseX+150);
  ellipse(260, 100, 5, 5);
  // point jaune
  fill(255-mouseX, 255-mouseX, 255-mouseX);
  ellipse(100, 100, 5, 5);
  // point jaune
  fill(255-mouseX+150, 255-mouseX+150, 255-mouseX+150);
  ellipse(180, 100, 5, 5);
  // corps pacman

  noStroke();
  fill(255, 255, 0);
  arc(mouseX, mouseY, 80, 80, PI/12, (2 * PI -PI/6), PIE);
  // yeux pacman
  fill(0, 0, 0);
  ellipse(mouseX, mouseY-20, 10, 10);
  rectMode(CORNER);
  // rect bleu bas
  fill(0, 0, 150);
  rect(0, 200, 400, 200);
  // rect bleu haut
  fill(0, 0, 150);
  rect(0, 0, 500, 20);
  // phamtom  tete rouge
  strokeWeight(0);
  fill(245, 70, 70);
  ellipse(445, 200, 60, 60);
  // phamtom rect rouge
  strokeWeight(0);
  fill(245, 70, 70);
  rectMode(CENTER);
  rect(445, 225, 60, 50);
  // blanc des yeux phamtom G
  fill(255, 255, 255);
  ellipse(430, 200, 10, 10);
  // yeux phamtom noir G
  fill(0, 0, 0);
  ellipse(430, 200, 2, 2);
  // blanc des yeux phamtom D
  fill(255, 255, 255);
  ellipse(460, 200, 10, 10);
  // yeux phamtom noir D
  fill(0, 0, 0);
  ellipse(460, 200, 2, 2);
  // bas phamtom G
  triangle(420, 250, 430, 250, 425, 240);
  fill(0);
  strokeWeight(0);
  //bas phamtom M
  triangle(440, 250, 450, 250, 445, 240);
  fill(0);
  strokeWeight(0);
  // bas phamtom D
  triangle(460, 250, 470, 250, 465, 240);
  fill(0);
  strokeWeight(0);
}

function keyPressed() {
  frameRate(5);
  fill(255, 255, 0);

  noStroke();
  arc(mouseX, mouseY, 80, 80, -PI/5, (PI/11 ), PIE)  ;
}
