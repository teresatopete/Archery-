let x;
let y;
let direction=1;
let t;
let me;
let r;
let g;
let b;
let bow;
let arrow = [];

function preload() {
  bow = loadImage('bowandarrow.png')
}

function setup(){
createCanvas(800, 800);
x=0;
y=0;
t = new Target(x, y); //make a new ball from the Ball class and call it b.
  r=255;
  g=255;
  b=255;

  angleMode(DEGREES);

  //make one avatar called me
  me = new Avatar(0, 0, 10);
//  arrow = new Arrow(0,0,10);
}

function draw (){
  background(52, 173, 60);
    t.drawTarget(); //draw the ball called b (go look in the Ball class for the drawBall function)
    t.moveTarget(); //move the ball called b (go look in the Ball class for the moveBall function)
    textSize(45);{
    text('Archery Simulation', width/2, height/2);
    fill("red");
    text('Archery Simulation', width/2, height/2);
    fill(255, 255, 255);
    text('Archery Simulation', width/2, height/2);
  }
  angleMode(DEGREES); // Change the mode to DEGREES
    let a = atan2(mouseY - height / 2, mouseX - width / 2);
    translate(width / 2, height / 2);
    push();
    rotate(a);
    image(bow,this.x,this.y,100,100)
    me.drawMe();
    me.moveMe();
    for (let i = 0; i < arrow.length; i++) {
        arrow[i].drawArrow();
        arrow[i].moveArrow();

      }

    pop();



    if (me.y >= 500){
      me.y=499
    }
}
function keyPressed() {
  if (keyCode === 81) {

    let  b = new Arrow(me.x, me.y, 10, false);
    arrow.push(b);
    console.log(arrow);
  }

  if (keyCode === 32){
    for (let i = 0; i < arrow.length; i++) {
        arrow[i].shot = true;
      }
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
      this.x=this.x+2*direction;
        this.y=this.y+2*direction;
        if (this.x>width-2){
          direction = direction* -1;
        }
        if (this.x<2){
            direction = direction* -1;
  	    }

  }

}
class Arrow {

  constructor(x,y, speed, shot){ //every avatar needs an x value, a y value, and a speed
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.shot = shot;
  }

  drawArrow(){

          line(this.x+80,this.y+30,this.x,this.y+30)
      }

  moveArrow(){
    if (this.shot ==false){
      this.x=me.x;
      this.y=me.y;
    }
    if (this.shot == true){
      this.x=this.x+10;
      print("arrow is shot");
    }

  }
  shootArrow(){

  }


}
class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}


	drawMe(){
        // strokeWeight(3);
    		// fill("blue");
		    // ellipse(this.x,this.y,20,20);
        // line(this.x,this.y, this.x, this.y+40);
        // line(this.x, this.y+40, this.x-20, this.y+60);
        // line(this.x, this.y+40, this.x+10, this.y+50);
        // line(this.x+10, this.y+50, this.x+5, this.y+60);
        // line(this.x, this.y+15, this.x-10, this.y+25);
        // line(this.x-10, this.y+25, this.x+10, this.y+35);
        ellipse(this.x,this.y,50);
        line(this.x,this.y+25,this.x,this.y+80)
        line(this.x,this.y+40,this.x+70,this.y+35)
        line(this.x,this.y+80,this.x+20,this.y+130)
        line(this.x-30,this.y+130,this.x,this.y+80)
        line(this.x,this.y+40,this.x-50,this.y+40)
        line(this.x-5,this.y+30,this.x-50,this.y+40)
        ellipse(this.x+70,this.y+35,10)
        ellipse(this.x-8,this.y+30,10)
        image(bow,this.x-10,this.y-20,100,100)

	}

	moveMe(){
    if (keyIsDown(87)) { //if you hold the up arrow, move up by speed
       this.y -= this.speed;
    }

    if (keyIsDown(83)) { // if you hold the down arrow, move down by speed
        this.y += this.speed;
    }
    if (keyIsDown(65)){
      this.x -= this.speed;
    }
    if (keyIsDown(68)){
      this.x += this.speed;
    }
    if (keyIsDown(80)) { //if you hold the up arrow, move up by speed
       this.y -= this.speed;
    }

    if (keyIsDown(60)) { // if you hold the down arrow, move down by speed
        this.y += this.speed;
    }
    if (keyIsDown(60)){
      this.x -= this.speed;
    }
    if (keyIsDown(60)){
      this.x += this.speed;
    }
    if (keyIsDown(32)){
      r = 255;
      g = 255;
      b = 255;
    }
	}

  die(){
if (me.y = 0){
  me.y = 779

    }
  }
 bouncefloor(){
   if (this.y >= 580){
   this.jump = -this.jump;
   }

 }
}
