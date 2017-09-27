function setup() {
  parent.tweakCanvas(createCanvas(400, 400));
  parent.document.getElementById('author').innerHTML = 'Thomas MARAITRE';
}

function draw() {
  background(255);
  /* strokeWeight(0.01);
   // grille
   line(20, 0, 20, 400);
   line(40, 0, 40, 400);
   line(60, 0, 60, 400);
   line(80, 0, 80, 400);
   line(100, 0, 100, 400);
   line(120, 0, 120, 400);
   line(140, 0, 140, 400);
   line(160, 0, 160, 400);
   line(180, 0, 180, 400);
   line(200, 0, 200, 400);
   line(220, 0, 220, 400);
   line(240, 0, 240, 400);
   line(260, 0, 260, 400);
   line(280, 0, 280, 400);
   line(300, 0, 300, 400);
   line(320, 0, 320, 400);
   line(340, 0, 340, 400);
   line(360, 0, 360, 400);
   line(380, 0, 380, 400);

   line(0, 20, 400, 20);
   line(0, 40, 400, 40);
   line(0, 60, 400, 60);
   line(0, 80, 400, 80);
   line(0, 100, 400, 100);
   line(0, 120, 400, 120);
   line(0, 140, 400, 140);
   line(0, 160, 400, 160);
   line(0, 180, 400, 180);
   line(0, 200, 400, 200);
   line(0, 220, 400, 220);
   line(0, 240, 400, 240);
   line(0, 260, 400, 260);
   line(0, 280, 400, 280);
   line(0, 300, 400, 300);
   line(0, 320, 400, 320);
   line(0, 340, 400, 340);
   line(0, 360, 400, 360);
   line(0, 380, 400, 380);
   strokeWeight(1);
   */
  // le corps

  noStroke();
  fill(0xFF, 0xD9, 0x17);
  rectMode(CENTER);
  rect(mouseX, mouseY, 80, 120);
  stroke(0);
  fill(mouseX, mouseY, mouseX*mouseY);
  ellipse(mouseX, mouseY, 40, 40);
  strokeWeight(2.5);
  line(mouseX-40, mouseY-60, mouseX+40, mouseY+60);
  line(mouseX+40, mouseY-60, mouseX-40, mouseY+60);

  //partie inferieur
  strokeWeight(1);
  rectMode(CORNER);
  rect(mouseX-20, mouseY+60, 10, 40);
  rect(mouseX+10, mouseY+60, 10, 40);
  fill(255);
  arc(mouseX-15, mouseY+100, 10, 10, PI, 2*PI);
  arc(mouseX+15, mouseY+100, 10, 10, PI, 2*PI);

  // brasGauche

  fill(mouseX, mouseY, mouseX*mouseY);
  rectMode(CORNER);
  noStroke();
  rect(mouseX-80, mouseY-40, 40, 20);
  rect(mouseX-80, mouseY-40, 20, 40);
  stroke(0);
  ellipse(mouseX-70, mouseY+15, 20, 20);

  //BrasDroit
  noStroke();
  rect(mouseX+40, mouseY-40, 40, 20);
  rect(mouseX+60, mouseY-40, 20, 40);
  stroke(0);
  ellipse(mouseX+70, mouseY+15, 20, 20);
  noStroke();

  // tête

  fill(0xFF, 0xD9, 0x17);
  rectMode(CENTER);
  rect(mouseX, mouseY-110, 140, 80, 50, 50, 50, 50);
  fill(mouseX, mouseY, mouseX+mouseY);
  stroke(0);
  ellipse(mouseX-30, mouseY-120, 20, 20);
  ellipse(mouseX+30, mouseY-120, 20, 20);
}
