let x;
let y;
let direction=1;

function setup(){
createCanvas(600, 600);
x=100;
y=100;
}

function draw (){
  background(33, 193, 221);
  target(x, y);
  x=x+5.5*direction;
    y=y+5.5*direction;
    if (x>width-2){
      direction = direction* -1;
    }
    if (x<2){
        direction = direction* -1;
  }

  fill(33, 193, 221)
  noStroke();
    ellipse(0, 0, 195, 195);
  fill(33, 193, 221)
  noStroke();
      ellipse(200, 200, 195, 195);
    fill(33, 193, 221)
    noStroke();
          ellipse(400, 400, 195, 195);

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
