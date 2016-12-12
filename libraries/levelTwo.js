
function levelTwo(){

background(bg_level2);

//.........................................INCOMING...BULLETS...................
if(random(100)<40){
    if (frameCount%130=== 0){
      var bulletUpper = createSprite(1400,420,40,60);
        bulletUpper.setSpeed(4,180);
        bulletUpper.life = 1300;
        bulletUpper.shapeColor = (250);
        enemies.add(bulletUpper);
        //bulletUpper.debug = true;
        bulletUpper.addAnimation("romanDefault",romanDefault);
        bulletUpper.scale = .5;
        bulletUpper.animation.frameDelay = 2;
    }
 }
 if(random(100)<30){
    if (frameCount%110=== 0){
      var bulletMiddle = createSprite(1400,560,40,60);
          bulletMiddle.setSpeed(2,180);
          bulletMiddle.life = 1300;
          bulletMiddle.shapeColor = (250);
          enemies.add(bulletMiddle); 
        //bulletMiddle.debug = true;
        bulletMiddle.addAnimation("romanDefault",romanDefault);
        bulletMiddle.scale = .5;
        bulletMiddle.animation.frameDelay = 2;
      
    } 
 }
  if(random(100)<60){
    if (frameCount%250=== 0){
      var bulletLower = createSprite(1400,720,40,60);
          bulletLower.setSpeed(3,180);
          bulletLower.life = 1300;
          bulletLower.shapeColor = (250);
          enemies.add(bulletLower); 
          bulletLower.addAnimation("romanDefault",romanDefault);
          bulletLower.scale = .5;
          bulletLower.animation.frameDelay = 2;
      
      }
    }
    //..........................POINTS..SYSTEM......................
  if(random(100)<70){
    if (frameCount%100=== 0){
      var fuel = createSprite(1400,random(720,420,560),40,50);
          fuel.setSpeed(6,180);
          fuel.life = 1300;
          fuel.shapeColor = (250,0,0);
        //fuel.debug = true;
        fuel.addImage(fuelIm);
        canisters.add(fuel);  
      }
  }
  //.................................AMMO..CRATES........................
  if(random(100)<20){
    if (frameCount%50=== 0){
      var crate = createSprite(1400,random(710,540),30,40);
          crate.setSpeed(3,180);
          crate.life = 1300;
          crate.shapeColor = ("yellow");
          crate.addImage(crateIm);
          blaster.add(crate);  
    }
  }
  //.............................audience wave.............................................
    for(var i = 0; i < 100; i++){
      var speed = .01;
      var time = (frameCount *speed)+(i* 1);
      var timeTwo = (frameCount *speed)+(i* 2)
      var timeThree = (frameCount *speed)+(i* 4)
      var firstRow = map(noise(time),0,1,100,200);
      var secondRow = map(noise(timeTwo),0,1,100,200);
      var thirdRow = map(noise(timeThree),0,1,100,200);
      //offest the varable in time
      var spacer = 45;
     
   push();
      //location of the ellipse
        translate(i*spacer, -70);
        translate(0,thirdRow);
      //the moving bars
        noStroke();
        fill(200,160,100)
        ellipse(0,0, 45, 45);
       fill(10);
        ellipse(10,-5, 10, 10);
        ellipse(-10,-5, 10, 10);
    pop();
    push();
      //location of the ellipse
        translate(i*spacer, -40);
        translate(0,secondRow);
      //the moving bars
        noStroke();
         fill(200,160,100)
        ellipse(0,0, 45, 45);
        fill(10);
        ellipse(10,-5, 10, 10);
        ellipse(-10,-5, 10, 10);
     pop();
     push();
      //location of the ellipse
        translate(i*spacer, firstRow);
        
      //the moving bars
        noStroke();
        fill(200,160,100)
        ellipse(0,0, 45, 45);
              fill(10);
        ellipse(10,-5, 10, 10);
        ellipse(-10,-5, 10, 10);
     pop();
    }
//........................................STAGE............................  

   fill(200,150,100)
  rect(0,180,1400,150)
   fill(192,192,192);
  rect(100,185,200,150);

//..................................SCORE..INDICATOR............................  
  fill(0,255,255);
  textSize(32);
  
  text('score '+score,100,285);
  text('ammo '+ammo,100,250);
  text('health '+heroHealth,100,220);
  
 //........................floor lanes................................................  
      for(var i = 0; i < 100; i++){
      var speed = .01;
      var Ftime = (frameCount *speed)+(i* .01);
      var FtimeTwo = (frameCount *speed)+(i* .01)
      var FtimeThree = (frameCount *speed)+(i* .01)
      var hfirstRow = map(noise(Ftime),0,1,100,200);
      var hsecondRow = map(noise(FtimeTwo),0,1,100,200);
      var hthirdRow = map(noise(FtimeThree),0,1,100,200);
      //offest the varable in time
      var spacerW = 52;
    
    push();
      //location of the ellipse
        translate(i*spacerW, 250);
         translate(0,hfirstRow);
      //the moving bars
        noStroke();
        fill(200,160,150);
        rect(0,0, 100, 150);
     pop();
    push();
      //location of the ellipse
        translate(i*spacerW, 395);
        translate(0,hsecondRow);
      //the moving bars
        noStroke();
        fill(200,160,125)
        rect(0,0, 100, 150);
     pop();
      push();
      //location of the ellipse
        translate(i*spacerW, 520);
        translate(0,hthirdRow);
      //the moving bars
        noStroke();
        fill(200,160,100)
        rect(0,0, 100, 150);
    pop();
      } 
    
 //................................................OVERLAPS....................   
enemies.overlap(bullets, enemyHit);
hero.overlap(canisters,heroScore);
hero.overlap(blaster,heroShoot);
enemies.overlap(hero,heroHit);


var yPos = map(yPosition,0,2,420,720);
easPosition += (yPos-easPosition)*eas;
hero.position.y = easPosition;
drawSprites();
}
