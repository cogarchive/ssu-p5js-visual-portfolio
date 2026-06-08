function keyPressed() {
  if (key === 's') {
    saveGif('ssu-p5js-assignment-4', 10);
  }
}


function setup() {
    createCanvas(600, 400);
    background('#fff');
    noStroke()
}

function draw() {
    const t = millis() * 0.001
    
    const sea4 = lerpColor(color('#2e354f'), color('#3b425d'), Math.abs(sin(t/2)));
    const sea3 = lerpColor(color('#5c6b99'), color('#6a7aa9'), Math.abs(sin(t/2)));
    const sea2 = lerpColor(color('#9da6c3'), color('#adb6d3'), Math.abs(sin(t/2)));
    const sea1 = lerpColor(color('#dee0ec'), color('#eef1fd'), Math.abs(sin(t/2)));
    const sea0 = '#ffffff';
    
    translate(0, sin(t)*20)
  
    fill(sea4)
    rect(0, 350, 600, 100)
    fill(sea3)
    rect(0, 250, 600, 100)
    fill(sea2)
    rect(0, 150, 600, 100)
    fill(sea1)
    rect(0, 50, 600, 100)
    fill(sea0)
    rect(0, -50, 600, 100)
    fill(sea4)
    
    translate(-(sin(t)+1) * 35, 0)
    arc(0*150+75, 350, 150, 30 + sin(0.95*t+0.1)*5, PI*1, PI*2)
    arc(2*150+75, 350, 150, 30 + sin(0.95*t+0.1)*5, PI*1, PI*2)
    arc(4*150+75, 350, 150, 30 + sin(0.95*t+0.1)*5, PI*1, PI*2)
    fill(sea3)
    arc(1*150+75, 350, 150, 30 + sin(0.95*t+0.1)*5, PI*0, PI*1)
    arc(3*150+75, 350, 150, 30 + sin(0.95*t+0.1)*5, PI*0, PI*1)
    translate((sin(t)+1) * 35, 0)
  
    translate(-(sin(t+0.1)+1) * 15, 0)
    arc(1*150+5, 250, 150, 30 + sin(1.07*t+0.3)*5, PI*1, PI*2)
    arc(3*150+5, 250, 150, 30 + sin(1.07*t+0.3)*5, PI*1, PI*2)
    fill(sea2)
    arc(0*150+5, 250, 150, 30 + sin(1.07*t+0.3)*5, PI*0, PI*1)
    arc(2*150+5, 250, 150, 30 + sin(1.07*t+0.3)*5, PI*0, PI*1)
    arc(4*150+5, 250, 150, 30 + sin(1.07*t+0.3)*5, PI*0, PI*1)
    translate((sin(t+0.1)+1) * 15, 0)

    translate(-(sin(t+0.25)+1) * 7, 0)
    arc(0*150+50, 150, 150, 15 + sin(0.89*t+0.5)*10, PI*1, PI*2)
    arc(2*150+50, 150, 150, 15 + sin(0.89*t+0.5)*10, PI*1, PI*2)
    arc(4*150+50, 150, 150, 15 + sin(0.89*t+0.5)*10, PI*1, PI*2)
    fill(sea1)
    arc(1*150+50, 150, 150, 15 + sin(0.89*t+0.5)*10, PI*0, PI*1)
    arc(3*150+50, 150, 150, 15 + sin(0.89*t+0.5)*10, PI*0, PI*1)
    translate((sin(t+0.25)+1) * 7, 0)

    translate(-(sin(t+0.5)+1) * 5, 0)
    arc(0*150+10, 50, 150, 15 + sin(t+0.7)*5, PI*1, PI*2)
    arc(2*150+10, 50, 150, 15 + sin(t+0.7)*5, PI*1, PI*2)
    arc(4*150+10, 50, 150, 15 + sin(t+0.7)*5, PI*1, PI*2)
    fill(sea0)
    arc(1*150+10, 50, 150, 15 + sin(t+0.7)*5, PI*0, PI*1)
    arc(3*150+10, 50, 150, 15 + sin(t+0.7)*5, PI*0, PI*1)
    translate((sin(t+0.5)+1) * 5, 0)

    translate(0, -sin(t)*20)

}