
//Create variables here

var dog;

var happyDog;

var database;

var foodS;

var foodStock;

function preload()
{
  //load images here
  
  dogimg=loadImage("images/dogImg.png");

  happyDogimg=loadImage("images/dogImg1.png");

}

function setup() 
{

  createCanvas(500,500);
 
  engine=Engine.create();

  world=engine.world;

  dog = Bodies.circle(50,200,220);

  World.add(world,dog);

  happyDog = Bodies.circle(50,200,220);

  World.add(world,happyDog);

  foodStock=database.ref('food');

  foodStock.on("value",readStock);

}


function draw() 
{  

  background(46,139,87);

  if(keyWentDown(UP_ARROW))
  {
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();

  //add styles here

    Stroke();
    textSize(35);
    fill("black");
    text("Note:Press UP_ARROW KEY to Feed Drago Milk!", width-300, 50);
}
//Function to read values from DB

function readStock(data)
{
  foodS=data.val();
}

//Function to write values in DB
function writeStock(x)
{
  database.ref('/').update
  ({
    food:x
  })
}