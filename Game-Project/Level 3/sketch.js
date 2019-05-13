let x;
let y;

function setup(){
createCanvas(600, 600);
x=0;
y=0;

}



function draw (){
  background(33, 193, 221);
  target(x, y);
  x=x+5;
  y=y+5;
  //arrow();

}

function target(x,y){
  ellipse(x, y, 195, 195);
  fill(0, 0, 0)
  ellipse(x, y, 175, 175);
  fill(0, 0, 0)
  stroke(255, 255, 255)
  ellipse(x, y, 155, 145);
  fill(86, 1, 255)
  ellipse(x, y, 135, 125);
  fill(86, 1, 255)
  ellipse(x, y, 115, 105);
  fill("blue")
  ellipse(x, y, 95, 95);
  fill("blue")
  ellipse(x, y, 75, 75);
  fill("red")
  ellipse(x, y, 55, 55);
  fill("red")
  ellipse(x, y, 35, 35);
  fill(255, 255, 255);

}

//function arrow(){
//stroke(0, 0, 0)
//line(300, 300, 307, 312);
//line(300, 300, 293, 398);
//line(300, 300, 293, 312);
//stroke(0, 0, 0)
//}
