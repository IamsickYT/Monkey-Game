
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage, bananaGroup;
var FoodGroup, obstacleGroup;
var score;
var survivalTime=0;
var ground;

function preload(){
  
  
  monkey_running =       loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}


 

function setup() {
 createCanvas(600,200)
  //monkey 
  {
  monkey=createSprite(80,150,20,20)
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1;
}
  //ground
  
  ground = createSprite(150,200,900,10);
  console.log(ground.x);

obstacleGroup = new Group();
bananaGroup = new Group(); 
}


function draw() {
background ("white");
  
  if (keyWentDown("space") && monkey.Y >= 100) {
monkey.velocityY = -12
}

  
monkey.velocityY= monkey.velocityY+0.8
monkey.collide(ground);
spawnBananas();
spawnobstacles();
  
 if (monkey.isTouching(obstacleGroup)){
   monkey.VelocityX= 0;
   obstacleGroup.VelocityXEach= 0;
   bananaGroup.VelocityCEach= 0;
   } 
  
  
   drawSprites();
 
}

function spawnBananas () {
if (frameCount%60===0) {
banana=createSprite(500,10,30,30)
banana.addImage(bananaImage)
banana.y = Math.round(random(10,160))

banana.scale = 0.1
banana.velocityX=-3
banana.lifetime = 600
bananaGroup.add(banana);
}
}

function spawnobstacles () {
if (frameCount%60===0) {
obstacle=createSprite(500,190,30,30)
obstacle.addImage(obstacleImage)
obstacle.velocityX=-3
obstacle.lifetime = 600
obstacle.scale = 0.1
obstacleGroup.add(obstacle);

}
}







