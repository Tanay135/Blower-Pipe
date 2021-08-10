class Ball{
 constructor(x,y,width,height){

    var options = {
     restitution: 0.8,
     isStatic:false,
     

    }
  this.body = Bodies.rectangle(x,y,width,height,options);
  World.add(world,this.body);
  this.w = width;
  this.h = height;


 }
 show(){
  var pos = this.body.position
  push();
  translate(pos.x,pos.y);
  rotate(this.body.angle);
  fill("red");
  rectMode(CENTER);
  rect(0,0,this.w,this.h)
  pop();

 }


}