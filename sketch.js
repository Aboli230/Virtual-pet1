//Create variables here
var dog,happydog;
var database;
var foodstock,foodS;

function preload()
{
  //load images here
  dog=loadImage("Images/dogImg.png");
  happydog=loadImage("Images/happydog.png");

  
}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);
 dog=createSprite(250,250);
 dog=addImage("Images/dogImg.png");

var foodstock=database.ref("food")
foodstock.on("value",readstock);
  
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog=addImage("Images/happydog.png")
}
  drawSprites();
  //add styles here
  textsize("35")
  Fill("blue")
  Stroke("yellow")
  text("NOTE:Press up arrow key to start playing",300,250);

}
function readstock(data){
  foodS=data.val();
function writeStock(x){
  database.ref("/").update({
    food:x
  })
}
}


