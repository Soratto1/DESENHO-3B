function setup() {
    background(220);
    createCanvas(400, 400)
  }
  
  function draw() {
   
    
    stroke("yellow");
    fill("red");
    
    //console.log(mouseIsPressed);
    
    if(mouseIsPressed){
    rect(mouseX,mouseY, 30, 50);
    }
    
  }
   
  