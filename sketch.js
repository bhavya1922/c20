var fobj,mobj;
function setup() {
  createCanvas(800,400);
  fobj=createSprite(400, 200, 50, 50);
  fobj.shapeColor="red"
  mobj=createSprite(200,200,20,20);
  mobj.shapeColor="blue"
}

function draw() {
  background("lightgreen");
  mobj.x=World.mouseX;
  mobj.y=World.mouseY

  if(fobj.x-mobj.x<(fobj.width+mobj.width)/2  &&
     mobj.x-fobj.x<(fobj.width+mobj.width)/2  &&
     fobj.y-mobj.y<(fobj.height+mobj.height)/2 &&
     mobj.y-fobj.y<(fobj.height+mobj.height)/2  )
  {
    fobj.shapeColor="pink"
    mobj.shapeColor="pink"
  }
  else
  {
    fobj.shapeColor="red"
    mobj.shapeColor="blue"
  }


  drawSprites();
}