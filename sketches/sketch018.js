function setup() {
  parent.tweakCanvas(createCanvas(800, 800));
  parent.document.getElementById('author').innerHTML = 'Theo Boissel';
}

function draw() {
  background(255);

  //le corps
  fill(100);
  rect(mouseX, mouseY, 200, 200);

  //le ventre
  fill(255);
  rect(mouseX+25,mouseY+85,150,95);

  //antennes
  fill(0);
  line(mouseX+65, mouseY-100, pmouseX+30, pmouseY-150);
  line(mouseX+125, mouseY-100, pmouseX+165, pmouseY-150);

  //la tete

  fill(175);
  rect(mouseX+50, mouseY-100, 100, 100);

  //les yeux

  fill(255, 0, 0);
  rect(mouseX+50+10, mouseY-100+10, 25, 25);
  fill(0, 0, 255);
  rect(mouseX+50+65, mouseY-100+10, 25, 25);

  //la bouche

  fill(255);
  rect(mouseX+70, mouseY-35, 8, 13);
  rect(mouseX+70+8, mouseY-35, 8, 13);
  rect(mouseX+70+16, mouseY-35, 8, 13);
  rect(mouseX+70+24, mouseY-35, 8, 13);
  rect(mouseX+70+32, mouseY-35, 8, 13);
  rect(mouseX+70+40, mouseY-35, 8, 13);
  rect(mouseX+70+48, mouseY-35, 8, 13);
  rect(mouseX+70+56, mouseY-35, 8, 13);

  //les jambes

  fill(100);
  rect(mouseX+40, mouseY+200, 25, 75);
  rect(mouseX+160-25, mouseY+200, 25, 75);

  //bras

  fill(100);
  rect(mouseX+200, mouseY+30, 25, 25);
  rect(mouseX+225, mouseY+30, 25, 75);
  rect(mouseX-25, mouseY+30, 25, 25);
  rect(mouseX-50, mouseY+30, 25, 75);
}
