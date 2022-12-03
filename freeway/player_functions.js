let xPlayer = [0,0];
let yPlayer = [0,0];
let up = [0,0];
let down = [0,0];
let xScore = [0,0];
let yScore = [0,0];
let playerSpeed;
let playerWidth, playerHeight;
let score = [0,0];

function drawPlayer(id) {
  image(players[id], xPlayer[id], yPlayer[id], playerWidth, playerHeight);
}

function drawScore(id) {
  text(score[id],xScore[id],yScore[id]);
}

function movePlayer(id) {
  
  if (up[id]) {
    let limit = height*.04;
    yPlayer[id] -= playerSpeed;
    if (yPlayer[id] < limit) {
      getPoint.play();
      updateScore(id,1);
      resetPlayer(id);
    }
  }
  if (down[id]) {
    let limit = .92*height;
    yPlayer[id] += playerSpeed;
    if (yPlayer[id] > limit) {
      yPlayer[id] = limit;
    }
  }
}

function collidePlayer(id,x,y,x2,y2) {
  let hit = collideRectRect(x, y, playerWidth, playerHeight, x2, y2, carWidth, carHeight);
  if (hit) {
    losePoint.play();
    updateScore(id,-1);
    resetPlayer(id);
  }
}

function resetPlayer(id) {
  up[id] = false;
  yPlayer[id] = .91*height;
}

function updateScore (id,value) {
  let newScore = score[id] + value;
  if (newScore >= 0) {
    score[id] = newScore;
  }
}