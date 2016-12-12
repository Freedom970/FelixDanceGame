
//printline(enemyHit);
function heroScore(hero,fuel){

for(var i=0; i<explosionDensity; i++) {
    var p = createSprite(hero.position.x, hero.position.y,4,4);
    p.setSpeed(random(3,5), random(360));
    p.friction = 0.95;
    p.life = 15;
    }

fuel.remove();

score++;
//.......................................Score..Setup...............................
  if (score == 5){
      gameState = 'countDown1';
      transition.loop();
      levelOneSong.stop();
   } 
      if (score == 10){
      gameState = 'countDown2';
      transition.loop();
      levelTwoSong.stop();
   } 
        if (score > 15 ) {  
      gameState = 'win';
      winSong.loop();
     
   } 
}
function enemyHit(enemy,bullet){
  enemy.remove();
  bullet.remove();
}
function heroShoot(hero,crate){
ammo++;
crate.remove();
  
}

function heroHit(enemy,hero){
  heroHealth--;

  if(heroHealth <= 0){
    gameState = 'lose';
  loseSong.loop();
  levelThreeSong.stop();
  }
  enemy.remove();
  hero.shapeColor=('red');
}