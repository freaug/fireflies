//variables
var fireflies = [];

//setup this shizz
function setup() {
  createCanvas(windowWidth - 10, windowHeight - 10);
  frameRate(20);

  fadeOut = true;
  yourHealth = 0;

  for (var i = 0; i < 20; i++) {
    fireflies.push(new fireFly());
  }
}

//draw function
function draw() {
  background(0);
      for (var k = fireflies.length - 1; k >= 0; k--) {
      fireflies[k].update();
      fireflies[k].spawn();
      if (fireflies[k].death()) {
        fireflies.splice(k, 1);
      }
    }
  if (fireflies.length <= 16) {
    for (var i = 0; i < 20; i++) {
      fireflies.push(new fireFly());
    }
    for (var j = fireflies.length - 1; j >= 0; j--) {
      fireflies[j].update();
      fireflies[j].spawn();
      if (fireflies[j].death()) {
        fireflies.splice(j, 1);
      }
    }
  }
}

//fix canvas if window resized
function windowResized() {
  resizeCanvas(windowWidth - 10, windowHeight - 10);
}
