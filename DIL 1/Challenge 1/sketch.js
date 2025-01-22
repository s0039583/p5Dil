let pipe1, pipe2, bird, floor;

function setup() {
  x = 600;
  y = 400;
  createCanvas(x, y);
  world.gravity.y = 10;
floor = new Sprite(x/2,y,x,2,"s")
  pipe1 = new Sprite(150,50,25,100,"s");
  pipe2 = new Sprite(150,300,25,200,"s");
  pipe1.color = "green";
  pipe2.color = "green";

  bird = new Sprite(0,y/2,50,50,"d");
  bird.image = "🐥"
  bird.vel.x = 2;

}

function draw() {
  background('skyblue');
}
