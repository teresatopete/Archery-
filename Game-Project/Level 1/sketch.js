let x;
let y;
let direction=1;
let t;


function setup(){
createCanvas(800, 800);
x=0;
y=0;
t = new Target(x, y); //make a new ball from the Ball class and call it b.

}

function draw (){
  background(52, 173, 60);
    t.drawTarget(); //draw the ball called b (go look in the Ball class for the drawBall function)
    t.moveTarget(); //move the ball called b (go look in the Ball class for the moveBall function)
    textSize(45);{
    text('Archery Simulation', 200, 400);
    fill("red");
    text('Archery Simulation', 200, 425);
    fill(255, 255, 255);
    text('Archery Simulation', 200, 450);
  }
}

class Target{
  	constructor(x,y){ //every ball needs an x value and a y value
  		    this.x = x;
      		this.y = y;
        }
  	drawTarget(){  // draw a ball on the screen at x,y
      ellipse(this.x, this.y, 195, 195);
      fill(0, 0, 0)
      ellipse(this.x, this.y, 175, 175);
      fill(0, 0, 0)
      stroke(255, 255, 255)
      ellipse(this.x, this.y, 155, 145);
      fill("blue")
      ellipse(this.x, this.y, 135, 125);
      fill("blue")
      ellipse(this.x, this.y, 115, 105);
      fill("red")
      ellipse(this.x, this.y, 95, 95);
      fill("red")
      ellipse(this.x, this.y, 75, 75);
      fill(238, 242, 0)
      ellipse(this.x, this.y, 55, 55);
      fill(238, 242, 0)
      ellipse(this.x, this.y, 35, 35);
      fill(255, 255, 255);
   }
  	moveTarget(){ //update the location of the ball, so it moves across the screen
      this.x=this.x+4*direction;
        this.y=this.y+4*direction;
        if (this.x>width-2){
          direction = direction* -1;
        }
        if (this.x<2){
            direction = direction* -1;
  	    }

  }

}
