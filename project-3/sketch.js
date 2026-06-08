import('p5');

function setup() {
  createCanvas(600, 400);
  noStroke()
}

function draw() {
  background("#62c6c4");

  fill("#62c6c4")
  rect(
    600/3*0 - 150 + (mouseX - width/2) * 0.7,
    -100,
    600/3 + 200,
    height + 200
  )
  fill("#02a6cb")
  rect(
    600/3*1 + (mouseX - width/2) * 0.7,
    -100,
    600/3 + 200,
    height + 200
  )
  fill("#006e93")
  rect(
    600/3*2 + (mouseX - width/2) * 0.7,
    -100,
    600/3 + 200,
    height + 200
  )
  
  noStroke();
  fill("#ffefe8")
  ellipse(300, 200, 180, 230)
  
  fill("black")
  ellipse(300, 109, 50, 50)
  ellipse(280, 109, 50, 50)
  ellipse(320, 109, 50, 50)
  ellipse(300, 125, 50, 50)
  ellipse(320, 125, 50, 50)
  ellipse(340, 125, 50, 50)
  ellipse(280, 125, 50, 50)
  ellipse(260, 125, 50, 50)
  ellipse(300, 145, 50, 50)
  ellipse(320, 145, 50, 50)
  ellipse(340, 145, 50, 50)
  ellipse(360, 145, 50, 50)
  ellipse(280, 145, 50, 50)
  ellipse(260, 145, 50, 50)
  ellipse(240, 145, 50, 50)
  
  fill("white")
  noStroke()
  ellipse(300-30, 210, 22, 18)
  ellipse(300+30, 210, 22, 18)

  if (keyIsDown(32)) {
    stroke("black")
    strokeWeight(2)
    line(300-30 - 8, 210, 300-30 + 8, 210)
    line(300+30 - 8, 210, 300+30 + 8, 210)
    strokeWeight(1)
  } else {
    fill("black")
    noStroke()
    ellipse(300-30 + (mouseX - width/2) * 0.03, 210, 10, 12)
    ellipse(300+30 + (mouseX - width/2) * 0.03, 210, 10, 12)
  }

  noFill()
  stroke(1)
  ellipse(300-30, 212, 45, 40)
  ellipse(300+30, 212, 45, 40)

  arc(300, 220, 45, 40, PI * 1.35, PI* (2-0.35))
  noStroke();
  fill("#ffefe8")
  rect(300 - 40/2, 350 - 100/2, 40, 100);
  fill("#0a162a")
  ellipse(300, 400, 160, 155)
  stroke(2)
  noFill()
  arc(300, 250, 60, 40, PI * 1/5, PI * 4/5)
  fill("white")
  noStroke()
  ellipse(300, 390, 5, 5)
  ellipse(300, 375, 5, 5)
  ellipse(300, 360, 5, 5)
  ellipse(300, 345, 5, 5) 
  textSize(14)
  textFont("sans")
  text('S', 345, 365);
}     
function keyPressed() { if (key === 's') { saveGif('mySketch', 5); } }