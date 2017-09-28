function setup() {
  parent.tweakCanvas(createCanvas(500, 500));
  parent.document.getElementById('author').innerHTML = 'Seraphin Lavice';
}

//change la couleur de l'arrière plan en fonction de la souris
function draw(){
  colorMode(RGB, width, height, width + height);
  background(mouseX);
  //partie supérieure
  strokeWeight(3);
  fill(mouseY,0,0);
  arc(mouseX,mouseY,200,200,PI,2*PI);

  //cercle intérieur partie supérieure
  fill(255);
  arc(mouseX,mouseY,50,50,PI,2*PI);

  //partie inférieure
  strokeWeight(3);
  fill(255);
  arc(mouseX,mouseY,200,200,0,PI);

  //cercle intérieur partie inférieure
  ellipse(mouseX,mouseY,50,50);

  //ouverture pokeball (cercle intérieur)
  strokeWeight(2);
  ellipse(mouseX,mouseY,25,25);


  //ouverture pokeball (lignes)
  strokeWeight(6);
  line(mouseX-27,mouseY,mouseX-98,mouseY);
  line(mouseX+27,mouseY,mouseX+98,mouseY);

  //texte
  textSize(50);
  text("Pokemon!",125,100);
  text("Attrappez les tous!",35,400);
}
