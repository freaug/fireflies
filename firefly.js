// create a firefly
function fireFly() {
  //set HSB
  this.r = random(0, 20);
  this.g = random(50, 100);
  this.b = random(90, 120);
  this.alph = random(100,255);
  //set diameter
  this.diameter = random(8, 12);
  //set left wing
  this.offsetL = this.diameter / 2;
  //set right wing
  this.offsetR = this.diameter / 4;
  //assign a position
  this.newPosition = createVector(random(width), random(height));
  //set acceleration
  this.acceleration = createVector(random(-0.02, 0.02), random(-0.013, 0.02));

  // set velocity to zero so we can affect it with acceleration 
  this.vel = createVector(0, 0);
  //spawn a firefly!
  this.spawn = function() {
    //wings
    noStroke();
    fill(this.r, this.g, this.b, this.alph);
    ellipse(this.newPosition.x - this.offsetL, this.newPosition.y - this.offsetR, this.diameter * 0.5, this.diameter * 0.5);
    ellipse(this.newPosition.x + this.offsetL, this.newPosition.y - this.offsetR, this.diameter * 0.5, this.diameter * 0.5);
    //body
    fill(this.r, this.g, this.b, this.alph);
    ellipse(this.newPosition.x, this.newPosition.y, this.diameter, this.diameter);
  }

  this.update = function() {
    // randomly move the firefly left and right 
    this.newPosition.add(this.vel);
    this.vel.add(this.acc)
    this.acc = this.acceleration;
    this.acc.mult(0.9);

    this.alph--;
  }

  this.death = function() {
    if (this.alph <= 0) {
      return true;
    } else {
      return false;
    }
  }
}