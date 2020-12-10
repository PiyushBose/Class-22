const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var ground, ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var option = {
    isStatic : true
  }

  var boption = {
    restitution : 1,
  }

  ground = Bodies.rectangle(200,350,400,20,option);
  ball = Bodies.circle(200,100,30,boption);

  World.add(world,ground);
  World.add(world,ball);
  
}

function draw() {
  background(0); 
  
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);
}