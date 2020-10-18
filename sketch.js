
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground1;
var dustbin1,paper1;
function preload()
{
	
}


function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
  world = engine.world;
  
 

	//Create the Bodies Here.
 

  paper1=new paper(150,320,25);
  dustbin1=new dustbin(800,325,15,100);
  dustbin2=new dustbin(900,380,200,15);
  dustbin3=new dustbin(1000,325,15,100);
  ground1=new ground(600,392.5,1200,15);
	
  
}


function draw() {
  
  background(0);

  Engine.update(engine);
  

  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground1.display();


}
function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
    Body.applyForce(paper1.body,paper1.body.position,{x:115,y:-115});
  }
}


