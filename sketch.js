var PLAY = 1, END =0, gameState = PLAY;
var climberImg ,doorImg ,ghostImg ,towerImg;
var spooky_sound;
var tower,ghost,climber,door;
var doorGroup,climberGroup;

function preload(){
climberImg = loadImage("climber.png");
doorImg = loadImage("door.png");
ghostImg = loadImage("ghost-standing.png");
towerImg = loadImage("tower.png");
spooky_sound = loadSound("spooky.wav");                     

}


function setup(){
  createCanvas(600,600);
  
  tower = createSprite(300,300,20,20);
  tower.addImage(towerImg);
  tower.velocityY = +1;
  
  ghost = createSprite(200,200,20,20);
  ghost.addImage(ghostImg);
  ghost.scale = 0.5;
  
  doorGroup = new Group();
  climberGroup = new Group();
   
  
  
  
  
}

function draw(){
  background("black");
  
  if(gameState == PLAY){

  
  
  if(tower.y > 600){
    tower.y = tower.width/2;
  }
  
  if (keyDown("space")){
      ghost.velocityY = -4;
      
      }
  ghost.velocityY = ghost.velocityY + 0.1;
    
  if (ghost.collide(climberGroup)){
      gameState = END;
      }
    windows(); 
  }
    drawSprites();
  
  if (gameState == END){
    textSize(30);
    fill("yellow");
    text("GAME OVER !",300,300);
    ghost.destroy();
    tower.velocityY = 0;
    doorGroup.setVelocityYEach(0);
    climberGroup.setVelocityYEach(0);
    
    
  }
  
}


function windows(){
 if(frameCount% 200 === 0){
   door = createSprite(Math.round(random(100,300)),-50,20,20);
   door.addImage(doorImg);
   door.velocityY = 1;
   door.lifetime = 500;
   climber = createSprite(door.x,10,20,20);
   climber.addImage(climberImg);
   climber.velocityY = 1;
   climber.lifetime = 500;
   climber.depth = ghost.depth;
   door.depth = ghost.depth;
   ghost.depth = ghost.depth + 1;
   doorGroup.add(door);
   climberGroup.add(climber);
 }
  
}