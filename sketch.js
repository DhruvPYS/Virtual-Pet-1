//Create variables here
var dog, happyDog, database, foodS, foodStock


function preload()
{
	//load images here
  doghu = loadImage("images/dogImg.png")
  dogha = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database()

  foodStock = database.ref("Food")
  foodStock.on("value", readStock)

dog = createSprite(275,300)
dog.addImage(doghu)
dog.scale = 0.45
}


function draw() {  

  drawSprites();
  //add styles here
background(46,139,87)

if(keyWentDown(UP_ARROW))
{
writeStock(foodS)
dog.addImage(dogha)
}
drawSprites()
textSize(15)
fill ("black")
text("Food Remaining:" + foodS, 180, 40)
text("NOTE: Press the UP ARROW to feed Bruno!", 120, 20)
}

function readStock(data)
{
foodS=data.val()
}

function writeStock(x)
{
  if(x<=0)
  {
  x=0
  }else{
  x=x-1
  }
database.ref("/").update({
 Food: x
})

}


