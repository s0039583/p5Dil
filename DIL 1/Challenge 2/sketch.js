function setup() {
  x = 600;
  y = 400;
  createCanvas(x,y);
  displayMode('centered');

  ceiling = new Sprite(x/2, 0, x, 2, "s");
  bottom = new Sprite(x/2, y, x, 2, "s");
  left = new Sprite(0, y/2, 2, y, "s");
  right = new Sprite(x, y/2, 2, y, "s");
  ceiling.color = "black";
  bottom.color = "black";
  left.color = "black";
  right.color = "black";

  logo = new Sprite(x/2, y/2, 100, 75, "d");
  logo.text = "DVD";
  logo.vel.y = 1;
  logo.vel.x = 1;
  logo.direction.x = 1;
  logo.direction.y = 1;
  //logo.bounciness = 1;
  logo.rotationLock = true;
}

function draw() {
  background(0);


}