let increment, step, angle, speed, speedX, speedY, x, y;
let time = 0;
let maxTime;
let size = 12;
let balls = 32;

function setup() {
  createCanvas(800, 800);
  noStroke();
  maxTime = 100;
  increment = .5;
}

function draw() {
  let step = time/100 * width/2;
  background(0);
  for (let i = 0; i < balls; i++){
    angle = TAU * i/balls;
    speedX = sin(angle);
    speedY = -cos(angle);
    x = width/2 + speedX * step;
    y = height/2 + speedY * step;
    ellipse(x, y, size);
  }

  time += increment;
  if (time > maxTime || time < 0) {
    increment *= -1;
  }
}