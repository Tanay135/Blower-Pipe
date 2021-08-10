const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;



var engine,world,blower,blowerMouth,button,ball;

function preload(){



}

function setup() {
  createCanvas(400,400);
  
  
 

 //(x,y,width,height); 
 blower = new Blower(250,200,100,100);
 blowerMouth = new BlowerMouth(200,290,100,20);
 ball = new Ball(50,200,50,50);
 engine = Engine.create();
 world = engine.world;
}





function draw() {
  background(255,255,255);  
  Engine.update(engine);
  
 blower.show();
 blowerMouth.show();
 blower.show();
}

function blow(){
Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.05});
}

function createButton(){
  button = createButton('click to blow')
  button.position(width/2,height - 100)
  button.class("blowButton");
  button.mousePressed(blow);


}