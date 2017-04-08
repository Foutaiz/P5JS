function setup() {
  createCanvas(1000, 1000);
}

function draw()
{
    var n = random(0,1000);
  noStroke();
  fill(random(800), random(250, 320), random(150, 220), random(600, 150));
  if (keyIsPressed)
  {
    if ((key == 'a') || (key == 'A')) {
  ellipse(random(0, 1000), random(0,1000), n, n);
    }
    if ((key == 'z') || (key == 'Z')) {
  rect(random(500, 0), random(200, 0),n, n);
    }
  if ((key == 'e') || (key == 'E')) {
  triangle(random(0,1000), random(0,1000), random(0,0), random(1000,0), random(0,400), random(0,400));
    }
  if ((key == 'r') || (key == 'R')) {
  rect(random(0, 0), random(500, 0),n, n);
    }
  if ((key == 't') || (key == 'T')) {
  rect(0, 0, 1000, 1000);
    }
  }
}
