let block, floor;

function setup() {
  x = 600;
  y = 400;
  createCanvas(x,y);
  displayMode('centered');
  world.gravity.y = 10;
  floor = new Sprite(x/2,y,x,2,"s");
}

function draw() {
  background(0);
  if(mouse.pressed()){
    block = new Sprite(mouse.x,mouse.y);
  }
 }
