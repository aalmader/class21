
var fixedRect, movingRect
var gameObject1,gameObject2,gameObject3,gameObject4

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green"

  movingRect = createSprite(800,400,80,30)
  movingRect.shapeColor = "green"

  gameObject1 = createSprite(100,100,80,30)
  gameObject1.shapeColor = "green" 
  
  gameObject2 = createSprite(200,100,80,30)
  gameObject2.shapeColor = "green"

  gameObject3 = createSprite(300,100,80,30)
  gameObject3.shapeColor = "green"

  gameObject4 = createSprite(400,100,80,30)
  gameObject4.shapeColor = "green"

  movingRect.velocityY = -5;
  gameObject2.velocityY = +5;
  movingRect.velocityX = -5;
  gameObject2.velocityX = +5;

}

function draw() {
  background(0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(movingRect, gameObject1)){
 
  movingRect.shapeColor = "red"
  gameObject1.shapeColor = "red"

 }else{
  
  movingRect.shapeColor = "green"
  gameObject1.shapeColor = "green"

 }
 bounceOff(movingRect, gameObject2);
  drawSprites();
}

