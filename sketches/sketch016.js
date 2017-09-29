function setup() {
  parent.tweakCanvas(createCanvas(400, 400));
  parent.document.getElementById('author').innerHTML = 'Jessy Fondimare';
  frameRate(30);
}


function draw() {

  //Tête
  background(255);
  fill(255, 144, 0); // orange
  ellipse(pmouseX, pmouseY-140, 140, 120);
  fill(255, 255, 0);  //jaune
  triangle(mouseX, mouseY-200, mouseX-60, mouseY-80, mouseX+60, mouseY-80);


  //Oeil

  fill(174, 239, 252);  //bleu clair
  ellipse(mouseX, mouseY-140, 20, 20);


  //Corps

  fill(63, 68, 68); //gris anthracite
  rectMode(CENTER);
  rect(mouseX, mouseY, 130, 150, 7);


  //Roue

  fill(239, 51, 64); //rouge
  ellipse(mouseX-50, mouseY+80, 20, 20);
  ellipse(mouseX+50, mouseY+80, 20, 20);

  //Numéro

  fill(63, 68, 68); //gris anthracite (interieur du 0)
  ellipse(mouseX-30, mouseY-10, 40, 60);
  line(mouseX+40, mouseY-40, mouseX+40, mouseY+20);
  line(mouseX+40, mouseY-40, mouseX+20, mouseY-20);

  /*************/
  /*Quadrillage*/
  /*************/

  /* int a=0;
   while (a<400)
   {
   a+=20;
   line(a, 0, a, 400);
   }

   int b=0;
   while (b<400)
   {
   b+=20;
   line(0, b, 400, b);
   }
   //fill(255, 0, 0, 63); //Transparence*/
}
