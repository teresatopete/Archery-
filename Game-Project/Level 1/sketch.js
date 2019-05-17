let x;
let y;
let direction=1;

function setup(){
createCanvas(600, 600);
x=0;
y=0;
}


function draw (){
  background(52, 173, 60);
  target(x, y);
  x=x+2*direction;
  y=y+2*direction;
  if (x>width-2){
    direction = direction* -1;
  }
  if (x<2){
    direction = direction* -1;

  }

  //arrow();

}

function target(x,y){
  ellipse(x, y, 195, 195);
  fill(0, 0, 0)
  ellipse(x, y, 175, 175);
  fill(0, 0, 0)
  stroke(255, 255, 255)
  ellipse(x, y, 155, 145);
  fill("blue")
  ellipse(x, y, 135, 125);
  fill("blue")
  ellipse(x, y, 115, 105);
  fill("red")
  ellipse(x, y, 95, 95);
  fill("red")
  ellipse(x, y, 75, 75);
  fill(238, 242, 0)
  ellipse(x, y, 55, 55);
  fill(238, 242, 0)
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
