var dinossauro;
function setup() {
  createCanvas(800,800);
  dinossauro=createSprite(200,200,15,15);
  dinossauro.shapeColor="green";
}

function draw(){


  background("white");
  if (keyIsDown(UP_ARROW)){
   dinossauro.y=dinossauro.y-5
  }
  if (keyIsDown(DOWN_ARROW)){
   dinossauro.y=dinossauro.y+5
  }
  if (keyIsDown(RIGHT_ARROW)){
    dinossauro.x=dinossauro.x+5
  }
  if (keyIsDown(LEFT_ARROW)){
    dinossauro.x=dinossauro.x-5
  }
 drawSprites(); 
}
