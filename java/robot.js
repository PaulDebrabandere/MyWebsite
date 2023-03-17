function setup() {
  createCanvas(800, 650);
  background(255, 190, 0);
}

function draw() {
  fill(235);
  stroke(0)
  quad(300,550, 250,550, 225,600, 325,600);
  rect(300,250,-50,300);
  quad(500,550, 550,550, 575,600, 475,600);
  rect(500,250,50,300);
  quad(375,525, 425,525, 450,575, 350,575);
  rect(375,450,50,75);

  fill(235);
  stroke(0);
  rect(300,250,200,200);

  fill(180);
  arc(400,251,202,220,PI,0);

  fill(0,13,189);
  noStroke();
  rect(372,315,58,100);
  rect(308,220,184,17);
  arc(400,166,115,47,PI,0);
  quad(355,208, 360,176, 392,173, 400,210);
  ellipse(400,275,160,15);
  ellipse(400,295,160,15);
  rect(250,335,20,150);
  rect(550,335,-20,150);

  fill(255,0,0)
  circle(395,228,22)

  fill(0);
  stroke(255);
  strokeWeight(2);
  circle(377,191,27);
  noStroke();
  rect(300,422,200,20);

  fill(100);
  noStroke();
  ellipse(400,342,40,46);
  ellipse(400,387,40,46);
}

