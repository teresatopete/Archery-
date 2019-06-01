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
let a;

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
     fill(52, 173, 60)
       noStroke();
        ellipse(0, 0, 195, 195);
      fill(52, 173, 60)
      noStroke();
          ellipse(200, 200, 195, 195);
        fill(52, 173, 60)
        noStroke();
            ellipse(400, 400, 195, 195);
    textSize(35);{
    fill("red")
    text('Game Console', 450, 60)
    fill("blue")
    text('w = Move Up', 470, 100)
    text('s = Move Down', 440, 140)
    text('q+space = Shoot Arrow', 410, 180)
    }
    textSize(45);{
      text('Archery Simulation', 200, 400);
    fill("red");
    text('Archery Simulation', 200, 425);
    fill(255,  255, 255);
    text('Archery Simulation', 200, 450);
  }
  angleMode(DEGREES); // qq qChange the mode to DEGREES
   a = atan2(mouseY - height / 2, mouseX - width / 2);
    translate(width / 2, height / 2);
    push();
    rotate(a);
    ellipse(this.x,this.y,50);
        me.moveMe();
        me.drawMe();
        for (let i = 0; i < arrow.length; i++) {
          arrow[i].drawArrow();
          arrow[i].moveArrow();
          arrow[i].targetHit();
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
      ellipse(this.x, this.y, 175, 175);
      fill(0, 0, 0)
      ellipse(this.x, this.y, 155, 155);
      fill(0, 0, 0)
      stroke(255, 255, 255)
      ellipse(this.x, this.y, 135, 135);
      fill("blue")
      ellipse(this.x, this.y, 115, 115);
      fill("blue")
      ellipse(this.x, this.y, 95, 95);
      fill("red")
      ellipse(this.x, this.y, 75, 75);
      fill("red")
      ellipse(this.x, this.y, 50, 50);
      fill(238, 242, 0)
      ellipse(this.x, this.y, 25, 25);
      fill(238, 242, 0)
      ellipse(this.x, this.y, 5, 5);
      fill(255, 255, 255);
   }
  	moveTarget(){ //update the location of the ball, so it moves across the screen
      this.x=this.x+15*direction;
        this.y=this.y+15*direction;
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
    stroke(0)
          line(this.x+80,this.y+30,this.x,this.y+30)
      }

  moveArrow(){
    if (this.shot ==false){
      this.x=me.x;
      this.y=me.y;
    }
    if (this.shot == true){
      this.x=this.x+10;
     print(this.y+30);
     print(a);
    }

  }
  targetHit(){
    if(this.x>=width/2 && this.x<= width){
      print("target hit");
    }

  }


}
class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}


	drawMe(){
        stroke(0)
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
