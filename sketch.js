const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1,bobObject2;
var bobObject3,bobObject4,bobObject5;
var bobDiameter=2;
var roofObject;

function preload()
{
	
}

function setup() {
	canvas = createCanvas(windowWidth/2,windowHeight/1.5);
	createCanvas(600,500);
	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRation = pixelDensity();
	let options = {
		mouse: canvasmouse
	};
	mConstraint = MouseConstraint.create(engine,options);
	World.add(world,mConstraint);

	bobObject1=new Bob (200,400,15);
	bobObject2=new Bob (220,400,15);
	bobObject3=new Bob (230,400,15);
	bobObject4=new Bob (250,400,15);
	bobObject5=new Bob (270,400,15);

	roofObject=new Roof (120,80,110,25);

	rope1=new Rope (bobObject1.body,roofObject.body,-bobDiameter*2,0);
	rope2=new Rope (bobObject2.body,roofObject.body,-bobDiameter*2,0);
	rope3=new Rope (bobObject3.body,roofObject.body,-bobDiameter*2,0);
	rope4=new Rope (bobObject4.body,roofObject.body,-bobDiameter*2,0);
	rope5=new Rope (bobObject5.body,roofObject.body,-bobDiameter*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roofObject.display();

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(pendulum1.body,{x: mouseX , y: mouseY});
}



