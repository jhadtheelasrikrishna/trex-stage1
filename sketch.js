
var trex ,trex_running;
var ground
var groungImage

function preload(){
  trex_running= loadAnimation("trex1.png","trex3.png","trex4.png")
groundImage= loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex= createSprite(50,150,10,10)
trex.addAnimation("running",trex_running)
trex.scale=0.5

ground= createSprite(300,185,600,30)
ground.addImage("ground",groundImage)
ground.velocityX=-3
}

function draw(){
  background("black")
 if (ground.x<0){

  ground.x=300

 }

if (keyDown("space")){

  trex.velocityY= -10
}
trex.velocityY=trex.velocityY+0.8
trex.collide(ground)

console.log(ground.x)

drawSprites()
}
