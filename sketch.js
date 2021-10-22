var box

function setup() {
  createCanvas(400,400);
 box = createSprite(200, 200 ,100, 100)
box.shapeColor = "white"


}

function draw() 
{
  background("red");
  
  var count = World.seconds;
  if(count > 2){
    background("orange")
    
  }
  if(count > 4){
    background("yellow")
    
  }
  if(count >  6){
    background("green")
    
  }
  if(count > 8){
    background("blue")
    
  }
  if(count > 10){
    background("purple")
    
  }
  if(count > 12){
    background("magenta")
    
  }


drawSprites()
}




