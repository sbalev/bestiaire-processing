function setup() {
  parent.tweakCanvas(createCanvas(1000, 1000));
  parent.document.getElementById('author').innerHTML = 'Killian Giard';
}

function draw() {
  frameRate(30);
  colorMode(RGB,255);
  background(0);
  strokeWeight(1);

  //Tête
  fill(150,200,10);
  stroke(150,200,10);
  arc(mouseX,mouseY - 100,300,300,PI,TAU,CHORD);

  //Corps
  rectMode(CORNERS);
  rect(mouseX-150,mouseY-90,mouseX+150,mouseY+180,20);
  rect(mouseX-150,mouseY-90,mouseX+150,mouseY+80);

  //Bras Gauche
  rect(mouseX-160,mouseY-60,mouseX-220,mouseY+80);
  arc(mouseX-190,mouseY-60,60,60,PI,TAU,CHORD);
  arc(mouseX-190,mouseY+80,60,60,0,PI,CHORD);

  //Bras Droit
  rect(mouseX+160,mouseY-60,mouseX+220,mouseY+80);
  arc(mouseX+190,mouseY-60,60,60,PI,TAU,CHORD);
  arc(mouseX+190,mouseY+80,60,60,0,PI,CHORD);

  //Jambe Gauche
  rect(mouseX-80,mouseY+180,mouseX-20,mouseY+260);
  arc(mouseX-50,mouseY+260,60,60,0,PI,CHORD);

  //Jambe Droite
  rect(mouseX+20,mouseY+180,mouseX+80,mouseY+260);
  arc(mouseX+50,mouseY+260,60,60,0,PI,CHORD);

  //Antennes
  strokeWeight(5);
  line(mouseX-74,mouseY-220,mouseX-114,mouseY-280);
  line(mouseX+74,mouseY-220,mouseX+114,mouseY-280);

  //Oeils
  strokeWeight(1);
  colorMode(RGB,500);
  fill(mouseX,0,0);
  stroke(mouseX,0,0);
  ellipse(mouseX-60,mouseY-160,mouseY/10,mouseY/10);
  ellipse(mouseX+60,mouseY-160,mouseY/10,mouseY/10);

  //Message
  textSize(60);
  textAlign(CENTER,CENTER);
  fill(500);
  text("Hey! My name is Andro",500,500);
}

function mousePressed() {
  //Fond
  frameRate(1);
  background(450,0,0);
  strokeWeight(1);
  colorMode(RGB,500);

  //Tête
  fill(450,0,0);
  stroke(100,0,0);
  arc(mouseX,mouseY - 100,300,300,PI,TAU,CHORD);

  //Corps
  rectMode(CORNERS);
  rect(mouseX-150,mouseY-90,mouseX+150,mouseY+180,20);
  rect(mouseX-150,mouseY-90,mouseX+150,mouseY+80);

  //Bras Gauche
  rect(mouseX-160,mouseY-60,mouseX-220,mouseY+80);
  arc(mouseX-190,mouseY-60,60,60,PI,TAU,CHORD);
  arc(mouseX-190,mouseY+80,60,60,0,PI,CHORD);

  //Bras Droit
  rect(mouseX+160,mouseY-60,mouseX+220,mouseY+80);
  arc(mouseX+190,mouseY-60,60,60,PI,TAU,CHORD);
  arc(mouseX+190,mouseY+80,60,60,0,PI,CHORD);

  //Jambe Gauche
  rect(mouseX-80,mouseY+180,mouseX-20,mouseY+260);
  arc(mouseX-50,mouseY+260,60,60,0,PI,CHORD);

  //Jambe Droite
  rect(mouseX+20,mouseY+180,mouseX+80,mouseY+260);
  arc(mouseX+50,mouseY+260,60,60,0,PI,CHORD);

  //Antennes
  line(mouseX-74,mouseY-220,mouseX-114,mouseY-280);
  line(mouseX+74,mouseY-220,mouseX+114,mouseY-280);

  //Oeils
  colorMode(RGB,10);
  fill(10);
  stroke(10);
  ellipse(mouseX-60,mouseY-160,mouseY/10,mouseY/10);
  ellipse(mouseX+60,mouseY-160,mouseY/10,mouseY/10);

  //Texte
  colorMode(RGB,100);
  textSize(40);
  textAlign(CENTER,CENTER);
  fill(0);
  text("I'm an evil Robot",500,500);
}
