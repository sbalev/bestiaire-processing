function setup() {
  parent.tweakCanvas(createCanvas(700, 700));
  parent.document.getElementById('author').innerHTML = 'Imran Tierce';
  noStroke();
}

function draw() {
  var x = width, y = height;
  var hz = 500;
  fill((-200)*mouseY/(hz+50)+200, (-200)*mouseY/(hz+50)+200, (-255)*mouseY/(hz+50)+255);
  rect(0, 0, width, height);
  fill(255, 255, 0);
  ellipse(x/2, mouseY, 100, 100);

  fill(255);
  ellipse(x/2 - 350, hz-200, 300, 300);
  ellipse(x/2 + 300, hz, 300, 300);
  ellipse(x/2 + 100, hz+50, 300, 300);
  ellipse(x/2 + 150, hz-100, 200, 200);
  ellipse(x/2 - 500, hz-200, 200, 200);

  fill(100);

  rect(x/2-350, hz-90, 40, 90);
  rect(x/2-330, hz-100, 40, 100);
  rect(x/2-280, hz-80, 40, 80);
  rect(x/2-270, hz-50, 40, 50);
  rect(x/2-230, hz-150, 40, 150);
  rect(x/2-150, hz-110, 40, 110);

  rect(x/2+100, hz-150, 40, 150);
  rect(x/2+150, hz-90, 40, 90);
  rect(x/2+190, hz-60, 40, 60);
  rect(x/2+220, hz-60, 40, 60);
  rect(x/2+280, hz-85, 40, 85);
  rect(x/2+300, hz-55, 40, 55);

  fill(190);

  rect(x/2-350, hz-90, 40, 90);
  rect(x/2-350+50, hz-100, 40, 100);
  rect(x/2-350+100, hz-80, 40, 80);
  rect(x/2-350+150, hz-50, 40, 50);
  rect(x/2-350+200, hz-150, 40, 150);
  rect(x/2-350+250, hz-110, 40, 110);

  rect(x/2-350+410, hz-180, 40, 180);
  rect(x/2-350+460, hz-100, 40, 100);
  rect(x/2-350+510, hz-90, 40, 90);
  rect(x/2-350+560, hz-60, 40, 60);
  rect(x/2-350+610, hz-85, 40, 85);
  rect(x/2-350+660, hz-55, 40, 55);

  fill(93, 89, 155);
  rect(0, hz, x, y-hz);

  hz += 10;

  fill(190, 190, 190, 50);

  rect(x/2-350, hz, 40, 90);
  rect(x/2-350+50, hz, 40, 100);
  rect(x/2-350+100, hz, 40, 80);
  rect(x/2-350+150, hz, 40, 50);
  rect(x/2-350+200, hz, 40, 150);
  rect(x/2-350+250, hz, 40, 110);

  rect(x/2-350+410, hz, 40, 180);
  rect(x/2-350+460, hz, 40, 100);
  rect(x/2-350+510, hz, 40, 90);
  rect(x/2-350+560, hz, 40, 60);
  rect(x/2-350+610, hz, 40, 85);
  rect(x/2-350+660, hz, 40, 55);
}
