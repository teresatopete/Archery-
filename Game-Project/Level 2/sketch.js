let x;
let y;
let direction=1;
let textSize;


function setup(){
createCanvas(1200, 1200);
x=0;
y=0;

}


function draw (){
  background(239, 141, 103);
  textSize(32);
  text('Archery Simulation', 10, 30);
  fill(0, 102, 153);
  text('Archery Simulation', 10, 60);
  fill(0, 102, 153, 51);
  text('Archery Simulation', 10, 90);'Archery Simulation' displayed 3 times going from black, blue to translucent blue
  target(x, y);
  x=x+5.5*direction;
    y=y+5.5*direction;
    if (x>width-2){
      direction = direction* -1;
    }
    if (x<2){
        direction = direction* -1;
}

}

function target(x,y){
  ellipse(x, y, 195, 195);
  fill(0, 0, 0)
  ellipse(x, y, 175, 175);
  fill(0, 0, 0)
  stroke(255, 255, 255)
  ellipse(x, y, 155, 145);
  fill(5, 186, 77)
  ellipse(x, y, 135, 125);
  fill(5, 186, 77)
  ellipse(x, y, 115, 105);
  fill(255, 166, 2)
  ellipse(x, y, 95, 95);
  fill(255, 166, 2)
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
