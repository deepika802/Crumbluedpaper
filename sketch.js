
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper;
var render;

function setup() {
	createCanvas(1600, 500);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,480,width,20);
	dustbinObj=new dustbin(1200,460);
	paper = new Paper (700,450,30,40);


	

	Engine.run(engine);
   
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paper.display();

  
}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:3,y:-5})
	    
	}
}