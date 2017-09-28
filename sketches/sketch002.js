var x;
var y;
var z;
var a;
var b;
var c;
var g;
var h;
var i;

function setup() {
  parent.tweakCanvas(createCanvas(400, 400));
  parent.document.getElementById('author').innerHTML = 'Clément Genay-Gosnat';
}

function draw() {
  background(255);


  // le pied
  fill(g,h,i);
  rect(mouseX, mouseY, 70, 70);

  // le 1erpoteau
  strokeWeight(4);
  line(mouseX+35, mouseY-100, mouseX+35, mouseY);

  // le 1er feu
  fill(120, 190, 32);//vert
  ellipse(mouseX+35,mouseY-100, 30, 30);

  // le 2eme poteau
  strokeWeight(4);
  line(mouseX+35,mouseY-150, mouseX+35,mouseY-115);

  // le 2eme feu
  fill(255, 144, 0);//orange
  ellipse(mouseX+35, mouseY-150, 30, 30);

  // le 3eme poteau
  strokeWeight(4);
  line(mouseX+35, mouseY-200, mouseX+35, mouseY-165);

  // le 3eme feu
  fill(239, 51, 64);//rouge
  ellipse(mouseX+35, mouseY-200, 30, 30);

  //ligne de droite
  strokeWeight(4);
  line(mouseX+135, mouseY-100, mouseX+70, mouseY);

  //cercle de droite
  fill(x,y,z);
  ellipse(mouseX+135, mouseY-100, 30, 30);

  //ligne de gauche
  strokeWeight(4);
  line(mouseX-65, mouseY-100, mouseX, mouseY);

  //cercle de gauche
  fill(a,b,c);
  ellipse(mouseX-65, mouseY-100, 30,30);
}

function mousePressed() {
  x=random(255);
  y=random(255);
  z=random(255);
  a=random(255);
  b=random(255);
  c=random(255);
}

function keyPressed() {
  g=random(255);
  h=random(255);
  i=random(255);
}
