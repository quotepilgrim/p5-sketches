//draw
function ballDraw() {
  circle(ballXpos, ballYpos, diameter);
}

function scoreDraw() {
  text(playerScore, width * offset, padding)
  text(enemyScore, width * (1-offset), padding)
}

function paddleDraw(x, y) {
  rect(x, y, playerWidth, playerHeight);
}

//movement
function ballMovement() {
  ballXpos += ballXspeed;
  ballYpos += ballYspeed;
}

function playerMovement() {
  if (keyIsDown(87) && playerYpos > playerHeight * -.6) {
    //w key
    playerYpos -= playerSpeed;
  }
  if (keyIsDown(83) && playerYpos < height - playerHeight * .4) {
    //s key
    playerYpos += playerSpeed;
  }
}

function enemyMovement(){
  if (multiplayer){
    if (keyIsDown(73) && enemyYpos > playerHeight * -.6) {
      //i key
      enemyYpos -= playerSpeed;
    }
    if (keyIsDown(75) && enemyYpos < height - playerHeight * .4) {
      //k key
      enemyYpos += playerSpeed;
    }
  } else {
    if (frameCount % delay == 0) {
      target = ballYpos - playerHeight/2
      if (target < enemyYpos) {
        direction = -1;
      
      } else {
        direction = 1;
      }
    }
    enemyYpos += enemySpeed * direction;
  }
}

//collision
function edgeCollision() {
  if (ballXpos + radius > width) {
    playerScore += 1;
    ballReset();
    pointSound.play();
  }
  if (ballXpos - radius < 0) {
    enemyScore += 1;
    ballReset();
    if (multiplayer) {
      pointSound.play();
    } else {
      enemyPointSound.play();
    }
  }
  if (ballYpos + radius > height || ballYpos - radius < 0) {
    ballYspeed *= -1;
  }
}

function paddleCollision(x,y)  {
  let hit = collideRectCircle(x, y, playerWidth, playerHeight, ballXpos, ballYpos, diameter);

  if (hit) {
    ballXspeed *= -1;
    hitSound.play();
  }
}

function ballReset() {
  side *= -1;
  ballXspeed = side * ballSpeed;
  ballYspeed *= random([-1,1]);
  ballXpos = width/2;
  ballYpos = height/2;
}
