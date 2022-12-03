function preload() {
  bg = loadImage("assets/bg.png");
  player = loadImage("assets/player.png");

  blueCar = loadImage("assets/bluecar.png");
  greenCar = loadImage("assets/greencar.png");
  redCar = loadImage("assets/redcar.png");

  cyanCar = loadImage("assets/cyancar.png");
  purpleCar = loadImage("assets/purplecar.png");
  yellowCar = loadImage("assets/yellowcar.png");

  getPoint = loadSound("assets/getpoint.wav")
  losePoint = loadSound("assets/losepoint.wav")
}

function setup() {
  createCanvas(960, 800);
  resetPlayer(0);
  resetPlayer(1);
  
  textAlign(CENTER, TOP);
  textSize(height*.05);
  fill(color(255,192,0));
  
  lanes = [18,30,42,58,70,82];
  speeds = [7.1,9.9,14.3,10.7,7.5,6.3];
  dirs = [-1,-1,-1,1,1,1];
  distance = [0,0,0,0,0,0];
  cars = [blueCar, greenCar, redCar, yellowCar, purpleCar, cyanCar];
  players = [player, player];

  xScore=[width * .3, width * .7];
  yScore=[height * .04, height * .04];

  carHeight = height * .08;
  carWidth = carHeight * 1.33;
  
  playerHeight = height * .06;
  playerWidth = playerHeight * 1.33;
  playerSpeed = calculateSpeed(5);

  xPlayer[0]=.25*width;
  xPlayer[1]=.75*width-playerWidth;
  
  for (i = 0; i < lanes.length; i++) {
    lanes[i] = calculateLane(lanes[i]);
  }

  for (i = 0; i < speeds.length; i++){
    speeds[i] = calculateSpeed(speeds[i]);
  }

}

function draw() {
  image(bg,0,0,width,height);

  for (let i in players) {
    drawScore(i);
    drawPlayer(i); 
    movePlayer(i);
  }

  for (let i in lanes) {
    drawCar(xPos[i],lanes[i],cars[i]);
    moveCar(i);
    
    for (let j in score) {
      collidePlayer(j,xPlayer[j],yPlayer[j],xPos[i],lanes[i]);
    }
  }
}
