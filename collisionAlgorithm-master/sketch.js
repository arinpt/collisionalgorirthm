var fixedRect, movingRect;
var gameobj1, gameobj2, gameobj3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameobj1=createSprite(200, 200, 60, 90);
  gameobj2=createSprite(300, 400, 60, 70);
  gameobj3=createSprite(300, 800, 30, 50);
  gameobj2.velocityY=10;
  gameobj3.velocityY=-2;

}

function draw() {
  background(0,0,0);  
  gameobj1.x = World.mouseX;
  gameobj1.y = World.mouseY;
  if(collision(gameobj1, gameobj2)){

    gameobj1.shapeColor="purple";
    gameobj2.shapeColor="cyan";
  }
  else{
    gameobj1.shapeColor="grey";
    gameobj2.shapeColor="grey";
  }
  bounceOff(gameobj2, gameobj3);
  drawSprites();
}

