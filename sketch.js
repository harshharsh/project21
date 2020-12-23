//For declaring all the variables here so that it becomes GLOBAL VARIABLES.
 var car;
 var wall;
 var speed;
 var weight;
 var deformation;

function setup() 
{
//For creating a canvas.
  createCanvas(1000,400);

//For creating CAR.
  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "white";

//Creating wall.
  wall = createSprite(950,200,60,height/2);
  wall.shapeColor = 80,80,80;

//creating speed & weight.
  speed=random(55,90);
  weight=random(400,700);
}

function draw() 
{
//For giving color to the canvas.
  background("black");  

//For giving VELOCITY to the CAR randomly as defined in the variable SPEED.
  car.velocityX = speed;

//Giving Collision.
  if (wall.x - car.x < car.width/2 + wall.width/2)
  {
    car.velocityX = 0;
    deformation = 0.5 * weight * speed * speed/22500;
  }
  if (deformation < 100)
  {
    car.shapeColor = "chartreuse";
  }
  if (deformation > 100 && deformation < 180 )
  {
    car.shapeColor = "yellow";
  } 
  if (deformation > 180)
  {
    car.shapeColor = "crimson";
  }

//Displaying sprites.
  drawSprites();
}