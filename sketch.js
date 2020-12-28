
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, dustbin, ball;
var engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground=new Ground(width/2,470,width,20);
	ball=new Ball(200,450,20);
	dustbin=new Dustbin(1200,360);
	 
  
}


function draw() {
  
  Engine.update(engine)
  background(0);
  
  ground.display();
  ball.display();
  dustbin.display();
   
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
  
	}
}

 
