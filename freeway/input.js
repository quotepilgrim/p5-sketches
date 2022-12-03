function keyPressed() {
  if (keyCode == 87) {
    //w key
    up[0] = true;
  }
  if (keyCode == 83) {
    //s key
    down[0] = true;
  }
  if (keyCode == 73) {
    //i key
    up[1] = true;
  }
  if (keyCode == 75) {
    //k key
    down[1] = true;
  }
}
function keyReleased() {
  if (keyCode == 87) {
    //w key
    up[0] = false;
  }
  if (keyCode == 83) {
    //s key
    down[0] = false;
  }
  if (keyCode == 73) {
    //i key
    up[1] = false;
  }
  if (keyCode == 75) {
    //k key
    down[1] = false;
  }
}
