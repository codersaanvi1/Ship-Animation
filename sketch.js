
var sea
var seaship, seashipmove;



function preload(){
  sea = loadImage("sea.png")
  seashipmove = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");

}

function setup(){
  createCanvas(400,400);

  seaImg = createSprite(200,200,400,400)
  seaImg.addImage(sea)
  seaImg.scale = 0.5
  seaImg.velocityX = -2

  seaship = createSprite(200,200)
  seaship.addAnimation("movement", seashipmove)
  seaship.scale = 0.3
  
}

function draw() {
  background("blue");

  if(seaImg.x < 0){
    seaImg.x = 200;
  }

  drawSprites();
 
}