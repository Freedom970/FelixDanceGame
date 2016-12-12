var hero;
var heroHealth = 5;
var score = 0;
var canisters; 
var explosionDensity = 20;
var gameState = 'startUp';
var ammo = 10;
var bullet;
var enemies;
var blaster;
var yPosition = 0;
var eas = .1;
var easPosition =420;
var heroDefault;
var titleSong , loseSong ,transition, winSong;
var transitionIm;


var bg_title, bg_win, bg_lose, bg_level1, bg_level2, bg_level3;

var heroDefaultFrames = [
  {'name':'Hero_Front_00001', 'frame':{'x':0, 'y': 0, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00002', 'frame':{'x':256, 'y': 0, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00003', 'frame':{'x':512, 'y': 0, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00004', 'frame':{'x':768, 'y': 0, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00005', 'frame':{'x':1024, 'y': 0, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00006', 'frame':{'x':1280, 'y': 0, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00007', 'frame':{'x':1536, 'y': 0, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00008', 'frame':{'x':1792, 'y': 0, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00009', 'frame':{'x':0, 'y': 256, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00010', 'frame':{'x':256, 'y': 256, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00011', 'frame':{'x':512, 'y': 256, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00012', 'frame':{'x':768, 'y': 256, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00013', 'frame':{'x':1024, 'y': 256, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00014', 'frame':{'x':1280, 'y': 256, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00015', 'frame':{'x':1536, 'y': 256, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00016', 'frame':{'x':1792, 'y': 256, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00017', 'frame':{'x':0, 'y': 512, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00018', 'frame':{'x':256, 'y': 512, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00019', 'frame':{'x':512, 'y': 512, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00020', 'frame':{'x':768, 'y': 512, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00021', 'frame':{'x':1024, 'y': 512, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00022', 'frame':{'x':1280, 'y': 512, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00023', 'frame':{'x':1536, 'y': 512, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00024', 'frame':{'x':1792, 'y': 512, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00025', 'frame':{'x':0, 'y': 768, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00026', 'frame':{'x':256, 'y': 768, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00027', 'frame':{'x':512, 'y': 768, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00028', 'frame':{'x':768, 'y': 768, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00029', 'frame':{'x':1024, 'y': 768, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00030', 'frame':{'x':1280, 'y': 768, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00031', 'frame':{'x':1536, 'y': 768, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00032', 'frame':{'x':1792, 'y': 768, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00033', 'frame':{'x':0, 'y': 1024, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00034', 'frame':{'x':256, 'y': 1024, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00035', 'frame':{'x':512, 'y': 1024, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00036', 'frame':{'x':768, 'y': 1024, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00037', 'frame':{'x':1024, 'y': 1024, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00038', 'frame':{'x':1280, 'y': 1024, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00039', 'frame':{'x':1536, 'y': 1024, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00040', 'frame':{'x':1792, 'y': 10240, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00041', 'frame':{'x':0, 'y': 1280, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00042', 'frame':{'x':256, 'y': 1280, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00043', 'frame':{'x':512, 'y': 1280, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00044', 'frame':{'x':768, 'y': 1280, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00045', 'frame':{'x':1024, 'y': 1280, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00046', 'frame':{'x':1280, 'y': 1280, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00047', 'frame':{'x':1536, 'y': 1280, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00048', 'frame':{'x':1792, 'y': 1280, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00049', 'frame':{'x':0, 'y': 1536, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00050', 'frame':{'x':256, 'y': 1536, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00051', 'frame':{'x':512, 'y': 1536, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00052', 'frame':{'x':768, 'y': 1536, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00053', 'frame':{'x':1024, 'y': 1536, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00054', 'frame':{'x':1280, 'y': 1536, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00055', 'frame':{'x':1536, 'y': 1536, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00056', 'frame':{'x':1792, 'y': 1536, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00057', 'frame':{'x':0, 'y': 1792, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00058', 'frame':{'x':256, 'y': 1792, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00059', 'frame':{'x':512, 'y': 1792, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00060', 'frame':{'x':768, 'y': 1792, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00061', 'frame':{'x':1024, 'y': 1792, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00062', 'frame':{'x':1280, 'y': 1792, 'width': 256, 'height': 256}},
  {'name':'Hero_Front_00063', 'frame':{'x':1536, 'y': 1792, 'width': 256, 'height': 256}},
];
var tribalFrames = [
  {'name':'Tribal00001', 'frame':{'x':0, 'y': 0, 'width': 256, 'height': 256}},
  {'name':'Tribal00002', 'frame':{'x':256, 'y': 0, 'width': 256, 'height': 256}},
  {'name':'Tribal00003', 'frame':{'x':512, 'y': 0, 'width': 256, 'height': 256}},
  {'name':'Tribal00004', 'frame':{'x':768, 'y': 0, 'width': 256, 'height': 256}},
  {'name':'Tribal00005', 'frame':{'x':1024, 'y': 0, 'width': 256, 'height': 256}},
  {'name':'Tribal00006', 'frame':{'x':1280, 'y': 0, 'width': 256, 'height': 256}},
  {'name':'Tribal00007', 'frame':{'x':1536, 'y': 0, 'width': 256, 'height': 256}},
  {'name':'Tribal00008', 'frame':{'x':1792, 'y': 0, 'width': 256, 'height': 256}},
  {'name':'Tribal00009', 'frame':{'x':0, 'y': 256, 'width': 256, 'height': 256}},
  {'name':'Tribal00010', 'frame':{'x':256, 'y': 256, 'width': 256, 'height': 256}},
  {'name':'Tribal00011', 'frame':{'x':512, 'y': 256, 'width': 256, 'height': 256}},
  {'name':'Tribal00012', 'frame':{'x':768, 'y': 256, 'width': 256, 'height': 256}},
  {'name':'Tribal00013', 'frame':{'x':1024, 'y': 256, 'width': 256, 'height': 256}},
  {'name':'Tribal00014', 'frame':{'x':1280, 'y': 256, 'width': 256, 'height': 256}},
  {'name':'Tribal00015', 'frame':{'x':1536, 'y': 256, 'width': 256, 'height': 256}},
  {'name':'Tribal00016', 'frame':{'x':1792, 'y': 256, 'width': 256, 'height': 256}},
  {'name':'Tribal00017', 'frame':{'x':0, 'y': 512, 'width': 256, 'height': 256}},
  {'name':'Tribal00018', 'frame':{'x':256, 'y': 512, 'width': 256, 'height': 256}},
  {'name':'Tribal00019', 'frame':{'x':512, 'y': 512, 'width': 256, 'height': 256}},
  {'name':'Tribal00020', 'frame':{'x':768, 'y': 512, 'width': 256, 'height': 256}},
  {'name':'Tribal00021', 'frame':{'x':1024, 'y': 512, 'width': 256, 'height': 256}},
  {'name':'Tribal00022', 'frame':{'x':1280, 'y': 512, 'width': 256, 'height': 256}},
  {'name':'Tribal00023', 'frame':{'x':1536, 'y': 512, 'width': 256, 'height': 256}},
  {'name':'Tribal00024', 'frame':{'x':1792, 'y': 512, 'width': 256, 'height': 256}},
  {'name':'Tribal00025', 'frame':{'x':0, 'y': 768, 'width': 256, 'height': 256}},
  {'name':'Tribal00026', 'frame':{'x':256, 'y': 768, 'width': 256, 'height': 256}},
  {'name':'Tribal00027', 'frame':{'x':512, 'y': 768, 'width': 256, 'height': 256}},
  {'name':'Tribal00028', 'frame':{'x':768, 'y': 768, 'width': 256, 'height': 256}},
  {'name':'Tribal00029', 'frame':{'x':1024, 'y': 768, 'width': 256, 'height': 256}},
  {'name':'Tribal00030', 'frame':{'x':1280, 'y': 768, 'width': 256, 'height': 256}},
  {'name':'Tribal00031', 'frame':{'x':1536, 'y': 768, 'width': 256, 'height': 256}},
  {'name':'Tribal00032', 'frame':{'x':1792, 'y': 768, 'width': 256, 'height': 256}},
  {'name':'Tribal00033', 'frame':{'x':0, 'y': 1024, 'width': 256, 'height': 256}},
  {'name':'Tribal00034', 'frame':{'x':256, 'y': 1024, 'width': 256, 'height': 256}},
  {'name':'Tribal00035', 'frame':{'x':512, 'y': 1024, 'width': 256, 'height': 256}},
  {'name':'Tribal00036', 'frame':{'x':768, 'y': 1024, 'width': 256, 'height': 256}},
  {'name':'Tribal00037', 'frame':{'x':1024, 'y': 1024, 'width': 256, 'height': 256}},
  {'name':'Tribal00038', 'frame':{'x':1280, 'y': 1024, 'width': 256, 'height': 256}},
  {'name':'Tribal_00039', 'frame':{'x':1536, 'y': 1024, 'width': 256, 'height': 256}},
  {'name':'Tribal00040', 'frame':{'x':1792, 'y': 10240, 'width': 256, 'height': 256}},
 ];
var romanFrames = [
  {'name':'Romans00000', 'frame':{'x':0, 'y': 1280, 'width': 256, 'height': 256}},
  {'name':'Romans00002', 'frame':{'x':256, 'y': 1280, 'width': 256, 'height': 256}},
  {'name':'Romans00004', 'frame':{'x':512, 'y': 1280, 'width': 256, 'height': 256}},
  {'name':'Romans00006', 'frame':{'x':768, 'y': 1280, 'width': 256, 'height': 256}},
  {'name':'Romans00008', 'frame':{'x':1024, 'y': 1280, 'width': 256, 'height': 256}},
  {'name':'Romans00010', 'frame':{'x':1280, 'y': 1280, 'width': 256, 'height': 256}},
  {'name':'Romans00012', 'frame':{'x':1536, 'y': 1280, 'width': 256, 'height': 256}},
  {'name':'Romans00014', 'frame':{'x':1792, 'y': 1280, 'width': 256, 'height': 256}},
  {'name':'Romans00016', 'frame':{'x':0, 'y': 1536, 'width': 256, 'height': 256}},
  {'name':'Romans00018', 'frame':{'x':256, 'y': 1536, 'width': 256, 'height': 256}},
  {'name':'Romans00020', 'frame':{'x':512, 'y': 1536, 'width': 256, 'height': 256}},
  {'name':'Romans00022', 'frame':{'x':768, 'y': 1536, 'width': 256, 'height': 256}},
  {'name':'Romans00024', 'frame':{'x':1024, 'y': 1536, 'width': 256, 'height': 256}},
  {'name':'Romans00026', 'frame':{'x':1280, 'y': 1536, 'width': 256, 'height': 256}},
 ];
var technoFrames = [
  {'name':'Tehcno00002', 'frame':{'x':1536, 'y': 1536, 'width': 256, 'height': 256}},
  {'name':'Tehcno00004', 'frame':{'x':1792, 'y': 1536, 'width': 256, 'height': 256}},
  {'name':'Tehcno00006', 'frame':{'x':0, 'y': 1792, 'width': 256, 'height': 256}},
  {'name':'Tehcno00008', 'frame':{'x':256, 'y': 1792, 'width': 256, 'height': 256}},
  {'name':'Tehcno00010', 'frame':{'x':512, 'y': 1792, 'width': 256, 'height': 256}},
  {'name':'Tehcno00012', 'frame':{'x':768, 'y': 1792, 'width': 256, 'height': 256}},
  {'name':'Tehcno00014', 'frame':{'x':1024, 'y': 1792, 'width': 256, 'height': 256}},
  {'name':'Tehcno00016', 'frame':{'x':1280, 'y': 1792, 'width': 256, 'height': 256}},
  {'name':'Tehcno00018', 'frame':{'x':1536, 'y': 1792, 'width': 256, 'height': 256}},
];
var countDowntimer1 = 0;
var countDowntimer2 = 0;


var loseSong;
var levelOneSong;
var levelTwoSong;
var levelThreeSong;

function preload(){
  default_sheet = loadSpriteSheet('assets/hero_Sprite_sheet.png',heroDefaultFrames);
  heroDefault = loadAnimation(default_sheet);
  
  tribal_sheet = loadSpriteSheet('assets/TribalRomanTechno.png',tribalFrames);
  tribalDefault = loadAnimation(tribal_sheet);
  
  roman_sheet = loadSpriteSheet('assets/TribalRomanTechno.png',romanFrames);
  romanDefault = loadAnimation(roman_sheet);
  
  techno_sheet = loadSpriteSheet('assets/TribalRomanTechno.png',technoFrames);
  technoDefault = loadAnimation(techno_sheet);
 
  bg_title  = loadImage("assets/title-01.png"); 
  bg_level1 = loadImage("assets/Bgtribal.png"); 
  bg_level2 = loadImage("assets/romanBg.png");
  bg_level3 = loadImage("assets/technoBg.png");
  
  bulletIm = loadImage("assets/bullet.png");
  crateIm = loadImage("assets/crate.png");
  fuelIm = loadImage("assets/fuel.png");
  transitionIm = loadImage("assets/transitions-01.png");
  
 titleSong = loadSound("assets/titleSong.mp3"); 
loseSong = loadSound("assets/lose.mp3"); 
transition = loadSound("assets/transition.mp3"); 

  bg_lose = loadAnimation("assets/lose00000.png","assets/lose00028.png"); 
  bg_win = loadAnimation("assets/win00000.png","assets/win00021.png"); 


winSong = loadSound("assets/winSong.mp3");
levelOneSong = loadSound("assets/tribal.mp3");
levelTwoSong = loadSound("assets/roman.mp3");
levelThreeSong = loadSound("assets/techno.mp3");
}

function setup() {
  createCanvas(1400,800);
      titleSong.loop();
  //........................................heroSprite............................
hero = createSprite(100, 550, 40, 75);
//hero.debug = true;
hero.addAnimation("heroDefault", heroDefault);
hero.scale = .4;
hero.animation.frameDelay = 2;


//..........................................points.....................................
bullets = new Group();
canisters = new Group();
enemies = new Group();
blaster = new Group();
  
}

function draw() {
  background(0,0,100);
  stroke(10);

switch (gameState) {
    case 'startUp':
      background(bg_title);
      break;
    case 'levelOne':
      levelOne();
      break;
    case 'levelTwo':
      transition.stop();
      levelTwo();
      break;
    case 'levelThree':
       transition.stop();
      levelThree();
      break;
    case 'win':
         animation(bg_win,width/2,height/2);
      bg_lose.looping = true;
     break;
    case 'lose':
       animation(bg_lose,width/2,height/2);
      bg_lose.looping = false;
    break;
    case 'countDown1':
  textSize(25);
      if(countDowntimer1 === 0){
        countDowntimer1 = frameCount;
      }
     background(transitionIm);
      var floorCount = floor((frameCount - countDowntimer1)/50);
      textAlign(CENTER);
      textSize(30);
      //text("Incoming Enemy Planes",width/2,100);
      textSize(150);
      text(3-floorCount, width/2, 250);
     
      
      if(floorCount > 3){
      gameState="levelTwo";
         levelTwoSong.loop();
      levelOneSong.stop();
    }

      break;
    case 'countDown2':
     background(transitionIm);
      textSize(25);
      if(countDowntimer2 === 0){
        countDowntimer2 = frameCount;
      }
      var floorCount = floor((frameCount - countDowntimer2)/50);
      textAlign(CENTER);
      textSize(30);
      //text("Incoming Enemy Planes",width/2,100);
      textSize(150);
      text(3-floorCount, width/2, 250);
    if(floorCount > 3){
      gameState="levelThree";
              levelThreeSong.loop();
      levelTwoSong.stop();

    }
      break;
    }

 
}
  
//..................................CONTROLS...........................................................
function keyPressed() {
  if (keyCode == UP_ARROW) {
    //hero.setSpeed(9, 270);
    yPosition --;
    yPosition = constrain( yPosition,0,2);
 
  } else if (keyCode == DOWN_ARROW) {
    //hero.setSpeed(9, 90);
    yPosition ++;
    yPosition = constrain( yPosition,0,2);
//...........................................BULLETS.................................................   
  }   if( ammo <= 0){
    bullets.remove;
    
    }else if (key == ' '){
    var bullet = createSprite(hero.position.x, hero.position.y, 5, 5);
      bullet.setSpeed(40,360);
      bullet.life = 1000;
      bullet.shapeColor = 'white';
      bullets.add(bullet);
      bullet.addImage(bulletIm);
      ammo--;
  }

 
}
function keyTyped() {
  if (key === 'x') {
    gameState = 'levelOne';
  titleSong.stop();
   levelOneSong.loop();
    }
}


