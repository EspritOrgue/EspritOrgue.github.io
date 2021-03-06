var total = 60;
var r = 80;
var x0,y0, h, m, s, c;
var bool = false;

function setup() {
  createCanvas(250, 250);
  x0 = 0;
  y0 = 0;
  c = color(floor(random(255)),floor(random(255)),floor(random(255)));
}

function draw() {
  h = hour();
  m = minute();
  s = second();

  background(0,0,0,0);
  fill(10);
  translate(width/2,height/2);
  rotate(-PI/2);
  strokeWeight(1);
  stroke(25);
  ellipse(x0,y0,r*2+15);

  // The 60 points for the clock
  for(var i=0; i<total; i++){
    if(i%5 == 0){
  		strokeWeight(6);
    }else{
      strokeWeight(4);
    }
    stroke(75);
    if(i <= m)stroke(0,0,255);
    if(i%5==0 && i/5 == h%12)stroke(255);
    if(i == s)stroke(255,215,0);

    var x = x0 + r*cos(i*TWO_PI/total);
    var y = y0 + r*sin(i*TWO_PI/total);
  	point(x,y);
  }

  if(s==0){
    if(!bool){
        c = color(floor(random(255)),floor(random(255)),floor(random(255)));
        bool = !bool;
    }
  }else if(s == 1){
    if(bool){
      bool = !bool;
    }
  }

  // Logo
  fill(c);
  noStroke();
  ellipseMode(CENTER);
  ellipse(0,0,r-10);
  push();
  fill(0);
  ellipse(0,0,r/2);
  rectMode(CENTER);
  rect(0,0,7,r-5);
  pop();
  ellipse(0,0,r/3);
}
