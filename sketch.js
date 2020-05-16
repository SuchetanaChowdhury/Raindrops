var rain=[], drop, rain1=[];


function setup() {
  createCanvas(1600,800);

  for(var i = 0; i < 600; i++){
    drop= new Drop(random(0,1600), random(0,800))
    rain.push(drop);
     }
}

function draw() {
  background(0);
  
  for(var i=0; i<rain.length; i++){
    rain[i].display();
    rain[i].fall();
  }
}

  