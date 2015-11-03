var x = 20;
var y = 20;


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
	// place your drawing code here
	
  background(25);
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  var size = map(x, 0, 2, 0, 200);
  cylinder(x, y);
}

function mousePressed() {
       x += 5;
       y += 5;
       redraw();
     }
  
  
    
    
    
    /*stroke(200,200,250);
    strokeWeight(20);
    strokeCap(ROUND);
    line(width/2.3, height/2.3, width/2.1, height/2.6);*/
    
    
    
    /*noStroke();
    quad(100,100,150,200,150,200,270,330);
    noFill();
    triangle(150,150,120,120,20,120);
    fill(30, 82, 54);
	ellipse(100,100,40,40);
	point(200,100);
    fill(99,100,191);
	rect(200,200,70,140,10);
	rect(300,200,70,140,80);
	stroke(255);
	strokeWeight(10);
	line(0,0,width/2,height/2);*/
	



