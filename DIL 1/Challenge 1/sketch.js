let pipe1, pipe2, bird;

function setup() {
  x = 300;
  y = 400;
  createCanvas(x, y);
  world.gravity.y = 10;
  pipe1 = new Sprite(150,50,20,100,"k");
  pipe2 = new Sprite(150,300,20,200,"k");
  pipe1.color = "green";
  pipe2.color = "green";

  bird = new Sprite(0,y/2,50,50,"d");
  bird.image = "🐥"
}

function draw() {
  background('skyblue');

  if(kb.spacebar){
    bird.vel.y = -5;
    bird.vel.x = 2;
  }

  if(bird.x >= 300 || bird.x <= -5){
    bird.x = 10 
  }
}
