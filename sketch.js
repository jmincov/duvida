
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground1; 
var ground2; 
var ground3;
var radius = 40; 

function preload()
{
	
}

function setup() {
	createCanvas (1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ball_options= {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	Engine.run(engine);
  
	ball = Bodies.circle (260, 1000, radius/2, bqll_options);
	World.add (world,ball);

	ground1 = new Ground (wifth/2, 670, width, 20);
	ground2 = new Ground (1100, 600, 20, 120);
	ground3 = new Ground (1350, 600, 20, 120);
}

function draw() {
  rectMode(CENTER);
  background(0);
  elipse (ball.position.x, ball.position.y, radius, radius); 
  ground1.show ();
  ground2.show ();
  ground3.show ();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(ball,ball.position,{x:85,y:-85} );

	}
}

