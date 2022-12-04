let distance, lanes, speeds, cars, carImages, xPos = [];
let bg, redCar, greenCar, blueCar, yellowCar;
let carWidth, carHeight;

function drawCar(x, y, car) {
  image(car, x, y, carWidth, carHeight);
}

function moveCar(car) {
  /* Translates distance by which car has moved into an x coordinate,
     then increments distance by the car's speed.
  */
  xPos[car] = translateDist(distance[car], dirs[car]);
  distance[car] += speeds[car];
  resetCar(car);
}

function resetCar(car) {
  /* Resets car position to its initial position if the distance by which it's
     moved is greater than the screen width by twice its own width, in order
     of accomodate for starting offscreen and moving entirely offscreen.
  */
  if (distance[car] > width + carWidth * 2) {
    distance[car] = 0;
  }
}
function translateDist(x, dir) {
  /* Magic formula that transforms the distance value by which a car has moved
     into the appropriate x coordinate of where it needs to be, depending on
     the direction in which it's moving. I wrote the formula, yet am puzzled
     by how or why it works.
  */
  return dir * x + width * map(dir,-1,1,1,0) -dir * carWidth;
}
function calculateLane(lane) {
  /* Takes a percentage value of the screen height in order to position a car
     vertically, so it appears in its corresponding lane.
  */
  return map(lane,0,100,0,height) - carHeight/2;
}
function calculateSpeed(speed) {
  // Calculates speed in thousandths of the screen width per frame.
  
  return map(speed,0,1000,0,width);
}
