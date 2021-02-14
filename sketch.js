var backImg;
var balloon,balloonImage;

function preload() {

  backImg=loadImage("Hot Air Ballon_01.png");
balloonImage = loadAnimation("Hot Air Ballon_02.png,Hot Air Ballon_03.png,Hot Air Ballon_04.png")
  
  }

function setup() {
  database = firebase.database();
  createCanvas(800,400);

  balloon = createSprite(100 ,300,20,20);
balloon.addAnimation("balloon",balloonImage);
balloon.scale = 0.6;
 
}

function draw() {
  background(backImg);
  
  if(LEFT_ARROW){
    balloon.x = balloon.x - 10
  }

  if(UP_ARROW){
    balloon.y = balloon.y - 10
  }

  if(RIGHT_ARROW){
    balloon.x = balloon.x + 10
  }

  if(DOWN_ARROW){
    balloon.y = balloon.y + 10
  }
 
  drawSprites();
}