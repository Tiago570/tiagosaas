let cor;
let circleX; // horizontal
let circleY; // vertical

function setup() {
  createCanvas(400, 400); // width x height
  background(color('#ACD793'));
  cor = color(random(0,255), random(0,255), random(0,255));
  circleX = [0,0,0,0,0];
  circleY = [random(height), random(height), random(height), random(height), random(height)];
}

// circleX = 0,0,0  
// circleY = 300, 150 , 150




function draw() {
  
  fill(cor);
  
  //console.log (circleX.length)
  
  for (let contador in circleX) {
    // console.log (contador)
  circle(circleX[contador], circleY[contador], 50);  
  circleX[contador] += random (0,3);
  circleY[contador] += random (-3,3);
    
    if (circleX[contador] >= width){
      circleX[contador] = 0;
      circleY[contador] = random(height);
    }
   
  }
 
  
  
  
  
  if (mouseIsPressed){
    cor = color(random(0,255), random(0,255), random(0,255), random(0,100));
  }
    
}