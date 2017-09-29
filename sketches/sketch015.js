function setup() {
  parent.tweakCanvas(createCanvas(600, 600));
  parent.document.getElementById('author').innerHTML = 'Niels Kerné';
  background(random(0, 255), random(0, 255), random(0, 255));
}

function draw() {
  // rien ne se passe ici
}

// un fantome apparaît à chaque clique (mettre 3 triangles sous les fantomes)
function mousePressed() {
  var color1 = random(0, 255);
  var color2 = random(0, 255);
  var color3 = random(0, 255);
  rectMode(CENTER);
  fill(color1, color2, color3);
  rect(mouseX, mouseY, 60, 50);
  //trouver comment faire un fantome ni coupé en deux ni sans crane
  noStroke();
  ellipse(mouseX, mouseY - 25, 60, 60);
  strokeWeight(1);
  stroke(0);
  fill(0, 0, 0);
  ellipse(mouseX - 15, mouseY - 25, 10, 10);
  ellipse(mouseX + 15, mouseY - 25, 10, 10);
}

// un pac man de taille, de couleur et avec une ouverture de bouche random
function keyPressed() {
  //faire le pacman avec des couleur random et
  var color1 = random(0, 255);
  var color2 = random(0, 255);
  var color3 = random(0, 255);
  fill(color1, color2, color3);
  //random taille du pacman
  var a = random(10, 100);
  //random taille de la bouche
  var b = random(1.99, 12);
  var c = random(1.99, 12);
  arc(mouseX, mouseY, a, a, PI/b, (2 * PI -PI/c), PIE);
  color1 = random(0, 255);
  color2 = random(0, 255);
  color3 = random(0, 255);
  fill(color1, color2, color3);
  ellipse(mouseX, mouseY - (a/5), (a/10), (a/10));
}
