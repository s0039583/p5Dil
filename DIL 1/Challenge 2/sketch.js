let dvd;

function setup() {
  x = 600;
  y = 400;
  createCanvas(x,y);
  displayMode('centered');

  //ceiling = new Sprite(x/2, 0, x, 2, "s");
  //bottom = new Sprite(x/2, y, x, 2, "s");
  //left = new Sprite(0, y/2, 2, y, "s");
  //right = new Sprite(x, y/2, 2, y, "s");

  dvd = new Sprite();
  dvd.text = "DVD";
  dvd.w = 120;
  dvd.h = 80;
  dvd.vel.y = 3;
  dvd.vel.x = 1;
  dvd.rotationLock = true;
}

function draw() {
  background(0);
  
  switch(true){
    case dvd.x >= x-60:
    dvd.vel.x *= -1
    dvd.color = color(random(255),random(255),random(255)) 
    break;
    case dvd.x <= 60: 
    dvd.vel.x *= -1 
    dvd.color = color(random(255),random(255),random(255)) 
    break;
    case dvd.y >= y-40: 
    dvd.vel.y *= -1 
    dvd.color = color(random(255),random(255),random(255)) 
    break;
    case dvd.y <= 40: 
    dvd.vel.y *= -1 
    dvd.color = color(random(255),random(255),random(255))
    break;
    }
}
