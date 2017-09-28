function setup(){
  parent.tweakCanvas(createCanvas(350, 900));
  parent.document.getElementById('author').innerHTML = 'Nicolas Prevost';
}

function draw(){

  // Antennes

  fill(61, 105, 10);
  triangle(122, 447, 138, 435, 130, 0);
  triangle(212, 435, 228, 447, 220, 0);
  fill(0, 24, 11);
  rect(104, 89, 52, 5);
  rect(104, 179, 52, 5);
  rect(104, 268, 52, 5);
  rect(104, 358, 52, 5);
  rect(194, 89, 52, 5);
  rect(194, 179, 52, 5);
  rect(194, 268, 52, 5);
  rect(194, 358, 52, 5);

  // pieds

  fill(61, 105, 10);
  rect(112, 750, 25, 137);
  rect(212, 750, 25, 137);
  stroke(0);

  arc(125, 887, 25, 25, 0, PI);
  arc(225, 887, 25, 25, 0, PI);

  //corps


  noStroke();
  rect(100, 500, 150, 250);
  stroke(1);
  arc(175, 750, 150, 125, 0, PI);
  noStroke();
  ellipse(175, 500, 150, 150);
  stroke(0);
  arc(175, 500, 150, 150, PI, 2 * PI);


  line(250, 750, 250, 500);
  line(100, 500, 100, 750);

  // pieds finition
  noStroke();
  rect(113, 750, 24, 137);
  rect(213, 750, 24, 137);


  // 1er bras

  noStroke();
  quad(100, 650, 100, 625, 25, 600, 0, 612);
  quad(25, 600, 0, 612, 0, 500, 25, 500);
  stroke(0);
  line(100, 650, 0, 612);
  line(100, 625, 25, 600);
  line(0, 612, 0, 500);
  line(25, 600, 25, 475);
  arc(25, 500, 50, 50, PI, 1.5 * PI);

  // 2eme bras

  noStroke();
  quad(250, 625, 337, 687, 312, 687, 250, 650);
  quad(312, 687, 337, 687, 262, 737, 250, 725);
  rect(250, 725, 12, 16);
  stroke(0);
  line(250, 725, 250, 741);
  line(250, 625, 337, 687);
  line(250, 650, 312, 687);
  line(337, 687, 262, 737);
  line(312, 687, 250, 725);
  line(262, 737, 271, 745);
  arc(262, 737, 25, 25, PI/4, 7 * PI/8);

  // oeil

  fill(247, 250, 161);
  ellipse(175, 525, 125, 125);
  noStroke();
  fill(193, 19, 31);
  ellipse(175+((mouseX-175)*62/width), 525+((mouseY-525)*62/height), 20, 20);
  fill(255, 255, 255, 120);
  ellipse(175+((mouseX-175)*72/width), 525+((mouseY-525)*72/height), 7, 7);

  // sourcil

  noFill();
  stroke(0);
  strokeWeight(25);
  arc(175, 525, 175, 150, PI + PI/4, PI+ 3 * PI/4);

  // sourire

  strokeWeight(1);
  arc(205, 550, 250, 200, 5 * PI / 12, PI - PI/4);
  strokeWeight(1);
  line(112, 623, 117, 618);
  arc(115, 620, 20, 20, PI - PI/8, 2 * PI - PI/6);
  strokeWeight(1);
  line(228, 635, 237, 645);
}

function mousePressed(){
  fill(250,192,78);
  rect(5,475-15,50,15,3,3,10,10);
  fill(130,50,23);
  rect(4,475-25,52,10,1);
  fill(188,228,119);
  rect(0,475-30,60,5,2);
  fill(250,192,78);
  rect(5,475-45,50,15,60,60,1,1);

}
