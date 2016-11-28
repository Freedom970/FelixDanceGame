var hero;



function preload(){
  
}



function setup() {
  createCanvas(1400,800);

hero = createSprite(100, 550, 40, 75);
hero.friction =.95;
  
}

function draw() {
  background(0,0,100);


 //........................floor lanes................................................
 fill(150)
 rect(0,350,1400,150);
 fill(130)
 rect(0,500,1400,150);
 fill(110)
 rect(0,650,1400,150);
 //.....................HERO......................................................
 
 
  
//......................enemies................

 //audience wave.............................................
    for(var i = 0; i < 35; i++){
      var speed = .01;
      var time = (frameCount *speed)+(i* 1);
      var timeTwo = (frameCount *speed)+(i* 2)
      var timeThree = (frameCount *speed)+(i* 4)
      var firstRow = map(noise(time),0,1,100,200);
      var secondRow = map(noise(timeTwo),0,1,100,200);
      var thirdRow = map(noise(timeThree),0,1,100,200);
      //offest the varable in time
      var spacer = 55;

     
   push();
      //location of the ellipse
        translate(i*spacer, -70);
        translate(0,thirdRow);
      //the moving bars
        noStroke();
        fill(80)
        ellipse(0,0, 50, 50);
    pop();
    push();
      //location of the ellipse
        translate(i*spacer, -40);
        translate(0,secondRow);
      //the moving bars
        noStroke();
        fill(50)
        ellipse(0,0, 50, 50);
     pop();
     push();
      //location of the ellipse
        translate(i*spacer, firstRow);
        
      //the moving bars
        noStroke();
        fill('black')
        ellipse(0,0, 50, 50);
     pop();
      
    }
    drawSprites();
  }
//..................................CONTROLS...........................................................
function keyPressed() {


  if (keyCode == UP_ARROW) {
    hero.setSpeed(9, 270);
    

    
  } else if (keyCode == DOWN_ARROW) {
    hero.setSpeed(9, 90);


   }
}


