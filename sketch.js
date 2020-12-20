
var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var  paper1,line1,line2,line3,line4;	
var world;


function setup() {
	createCanvas(1440, 700,100,100);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	paper1=new paper(200,450,40);
	
	line4=new Dustbin(1200,500,300,300)
	//bin2=new binother(1120,630,150,20)
	//bin3=new binothert(1050,540,20,200)
	line1=new Dustbin(1250,540,20,220)
	line2=new Dustbin(1150,630,250,20)
	line3=new Dustbin(1030,515,20,250)
	ground=new ground1(width/2, 650, width, 10);
	
	Engine.run(engine);
	
	World.add(world,line4);
}


function draw() {
	
  rectMode(CENTER);
  background("gray");
  drawSprites();
  paper1.display();
  line1.display();
  line2.display();
  line3.display();
  line4.display();
  ground.display();
 }


function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-95});
		
	  }

}