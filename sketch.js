var car, carImage, wall;

var randWeight, randSpeed, deformation;

function preload(){
  //carImage = loadImage("Car.png");
}
function setup() {
  createCanvas(1600,400);

  wall = createSprite(1500,200,50,400);
  wall.shapeColor = "Brown";

  car  = createSprite(50, 200, 20, 20);
  car.shapeColor = "Orange";

  randWeight = Math.round(random(400,1500));
  randSpeed = Math.round(random(30,95));
  deformation = 0.5*randWeight*randSpeed*randSpeed/22500;
}

function draw() {
  background(80,80,80);
  
  

  car.velocityX = randSpeed;

  if(car.x - wall.x < car.width/2 + wall.width/2
    && wall.x - car.x < car.width/2 + wall.width/2){
      car.velocityX = 0;
      
      if(deformation<100){
        car.shapeColor = rgb(0,255,0);
      }
      else if(deformation>100 && deformation < 180){
        car.shapeColor = rgb(230,230,0);
      }
      else{
        car.shapeColor = rgb(255,0,0);
      }
    }
    
    textSize(20);
    text("Weight : "+randWeight,100,50);
    text("Speed : "+randSpeed,300,50);
    text("Deformation : "+Math.round(deformation),500,50);
    textSize(100);
    text("GCSO",600,250);
  drawSprites();
}