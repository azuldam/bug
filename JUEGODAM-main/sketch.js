const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var player
let engine, world;
var paredes;

function preload(){
  
}

function setup() {
  createCanvas(600, 600);
  
  engine = Engine.create();
  world = engine.world;  
  player = createSprite(200,200,10,10);
  paredes = new Pared(200, 300, 30, 550);
  
}

function draw() {
  background(220);
  
  if(keyDown(UP_ARROW)) {
    player.y = player.y-10;
  }
  
  if(keyDown(LEFT_ARROW)) {
    player.x = player.x-10;
  }
  if(keyDown(DOWN_ARROW)) {
    player.y = player.y+10;
  }
  if(keyDown(RIGHT_ARROW)) {
    player.x = player.x+10;
  }
 
  paredes.show();
  Engine.update(engine);

  drawSprites();
}
