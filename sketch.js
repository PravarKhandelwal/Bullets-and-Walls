var bullet,wall;

var deformation,thickness;

function setup() {
  createCanvas(1600,1000);
  
  

  speed1 = random(223,321);
  weight1 = random(30,52);
  

  speed2 = random(223,321);
  weight2 = random(30,52);
  

  speed3 = random(223,321);
  weight3 = random(30,52);

  thickness = random(22,83);
  

  bullet1 = createSprite(50,100,50,20);
  bullet1.shapeColor = "white";

  bullet2 = createSprite(50,500,50,20);
  bullet2.shapeColor = "white";

  bullet3 = createSprite(50,900,50,20);
  bullet3.shapeColor = "white";

  wall1 = createSprite(1200,100,thickness,300);
  wall1.shapeColor = (80,80,80);

  wall2 = createSprite(1200,500,thickness,300);
  wall2.shapeColor = (80,80,80);


  wall3 = createSprite(1200,900,thickness,300);
  wall3.shapeColor = (80,80,80);

  bullet1.velocityX = speed1;
  bullet2.velocityX = speed2;
  bullet3.velocityX = speed3;

  
}

function draw() {
  background(0,0,0); 
  drawSprites();

  

  
  
    collision(bullet1,wall1,weight1,speed1);
    collision(bullet2,wall2,weight2,speed2);
    collision(bullet3,wall3,weight3,speed3);

 
 
}

function collision(bullet,wall,weight,speed)
{
if(collide(bullet,wall))
 {
  bullet.velocityX = 0;
   var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

   if(damage>10)
   {
     wall.shapeColor = "red";
   }

   if(damage<10)
   {
     wall.shapeColor  = "green";
   }
  }
}
