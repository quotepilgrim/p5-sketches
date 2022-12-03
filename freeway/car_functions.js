let distance, lanes, speeds, cars, carImages, xPos = [];
let bg, redCar, greenCar, blueCar, yellowCar;
let carWidth, carHeight;

function drawCar(x, y, car) {
  image(car, x, y, carWidth, carHeight);
}
function moveCar(car) {
  xPos[car] = translateDist(distance[car], dirs[car]);
  distance[car] += speeds[car];
  resetCar(car);
}
function resetCar(car) {
  if (distance[car] > width + carWidth * 2) {
    distance[car] = 0;
  }
}
function translateDist(x, dir) {
  return dir * x + width * (-dir + 1) / 2 - dir * carWidth;
}
function calculateLane(lane) {
  return height * lane / 100 - carHeight / 2;
}
function calculateSpeed(speed) {
  return speed * width/1000;
}
