let multiplayer = false;

//text properties
let offset = .4;
let padding = 32;

//score values
let playerScore = 0
let enemyScore = 0

//ball properties
let radius = 12;
let diameter = radius*2;
let ballSpeed = 8;
let ballXspeed, ballYspeed;
let ballXpos, ballYpos;
let side;

//player properties
let playerWidth = 16;
let playerHeight = 128;
let playerXpos, playerYpos;
let playerSpeed = 8;

//enemy properties
let enemyXpos, enemyYpos;
let enemySpeed = 7.6;
let delay = 5;
let target = 0;
let direction = 0;

//sounds
let enemypoint, playerpoint, hit;

function preload() {
  hitSound = loadSound("sounds/hit.wav");
  pointSound = loadSound("sounds/playerpoint.wav");
  enemyPointSound = loadSound("sounds/enemypoint.wav");
}

function setup() {
  createCanvas(1280, 720);
  
  textAlign(CENTER, TOP);
  textSize(32);
  fill(255);

  ballXspeed = random([-1, 1]) * ballSpeed;
  ballYspeed = random([-1, 1]) * ballSpeed;
  side = random([1,-1]);
  ballXpos=width/2;
  ballYpos=height/2;
  playerXpos = 8;
  playerYpos = height/2 - playerHeight/2
  enemyXpos = width - playerWidth - playerXpos;
  enemyYpos = playerYpos;
}

function draw() {
  background(0);
  
  ballDraw();
  scoreDraw();
  paddleDraw(playerXpos, playerYpos);
  paddleDraw(enemyXpos, enemyYpos);

  playerMovement();
  enemyMovement();
  ballMovement();

  edgeCollision();
  paddleCollision(playerXpos, playerYpos);
  paddleCollision(enemyXpos, enemyYpos);
}