var jwel,jwelImg;
var enemy1,enemyImg1;
var enemy2,enemyImg2;
var treasure,treasureImg,treasureImg1;
var portionImg;
var score=0;
var life=3;
var gameState="play";

function preload()
{

  jwelImg = loadImage("Diamond.png");
  enemyImg1 = loadImage("Enemy1.png");
  enemyImg2 = loadImage("Enemy2.png");
  treasureImg = loadImage("Treasure.png")
  treasureImg1 = loadImage("Treasure1.png")
  portionImg = loadImage("Portion.png")

}


function setup() 
{

  createCanvas(1200,800);



  //Player
  player = createSprite(45,50,20,20);
  player.shapeColor = "lightblue";
  
  //Upper Portion
  
  line1 = createSprite(170,300,170,7);
  line1.shapeColor = rgb(255,191,0);
  
  line2 = createSprite(250,270,10,70);
  line2.shapeColor = rgb(255,191,0);

  line3 = createSprite(195,240,100,7);
  line3.shapeColor = rgb(255,191,0);

  line4 = createSprite(150,140,10,200);
  line4.shapeColor = rgb(255,191,0);

  line5 = createSprite(535,40,780,7);
  line5.shapeColor = rgb(255,191,0);

  line6 = createSprite(920,140,10,200);
  line6.shapeColor = rgb(255,191,0);

  line7 = createSprite(875,240,100,7);
  line7.shapeColor = rgb(255,191,0);

  line8 = createSprite(830,270,10,70);
  line8.shapeColor = rgb(255,191,0);

  line9 = createSprite(910,305,170,7);
  line9.shapeColor = rgb(255,191,0);

  //Lower Portion

  line10 = createSprite(170,355,170,7);
  line10.shapeColor = rgb(255,119,51);

  line11 = createSprite(250,390,10,70);
  line11.shapeColor = rgb(255,119,51);

  line12 = createSprite(195,420,100,7);
  line12.shapeColor = rgb(255,119,51);

  line13 = createSprite(150,570,10,300);
  line13.shapeColor = rgb(255,119,51);

  line14 = createSprite(535,720,780,7);
  line14.shapeColor = rgb(255,119,51);

  line15 = createSprite(920,570,10,300);
  line15.shapeColor = rgb(255,119,51);

  line16 = createSprite(875,420,100,7);
  line16.shapeColor = rgb(255,119,51);

  line17 = createSprite(830,385,10,70);
  line17.shapeColor = rgb(255,119,51);

  line18 = createSprite(910,350,170,7);
  line18.shapeColor = rgb(255,119,51);

  //Treasure
  treasure = createSprite(530,360,20,20);
  treasure.addImage(treasureImg);
  treasure.scale = 0.3;

  //Treasure Protection
  protect1 = createSprite(440,360,5,120);
  protect1.shapeColor = "blue"

  protect2 = createSprite(525,300,170,5);
  protect2.shapeColor = "blue"

  protect3 = createSprite(610,360,5,120);
  protect3.shapeColor = "blue";
  
  protecthalf1 = createSprite(475,420,68,5);
  protecthalf1.shapeColor = "yellow";

  protecthalf2 = createSprite(585,420,68,5);
  protecthalf2.shapeColor = "yellow";

  protecthalf3 = createSprite(430,500,120,10);
  protecthalf3.shapeColor = "brown";
  protecthalf3.velocityX = 1;

  protecthalf4 = createSprite(620,500,120,10);
  protecthalf4.shapeColor = "brown";
  protecthalf4.velocityX = -1;

  //Insider Obstacles

  line19 = createSprite(360,380,10,260);
  line19.shapeColor = "white";

  line20 = createSprite(525,255,340,10);
  line20.shapeColor = "white";

  line21 = createSprite(690,380,10,260)
  line21.shapeColor = "white";

  line22 = createSprite(300,280,10,310);
  line22.shapeColor="white";

  line23 = createSprite(485,130,380,10);
  line23.shapeColor="white";

  line24 = createSprite(680,170,10,90);
  line24.shapeColor = "white";

  line25 = createSprite(735,210,120,10);
  line25.shapeColor = 'white';

  line26 = createSprite(790,390,10,370);
  line26.shapeColor="white";

  line27 = createSprite(440,180,10,80);
  line27.shapeColor = "white";

  line28 = createSprite(495,200,120,10);
  line28.shapeColor = "white";

  line29 = createSprite(550,220,10,60);
  line29.shapeColor = "white";

  line30 = createSprite(575,580,440,10);
  line30.shapeColor = "white";

  

  

  
  //Invisible Blocks
  block1 = createSprite(530,500,5,20);
  block1.visible = false;

  block2 = createSprite(740,330,80,10);
  block2.shapeColor = "white";
  block2.visible = false;

  line31 = createSprite(360,540,10,70);
  line31.addImage.shapeColor = "white";
  line31.visible = false;

  line32 = createSprite(275,400,40,10);
  line32.visible = false;
  

  //Enemies
  pacman = createSprite(390,460,20,20);
  pacman.velocityX = 3;
  pacman.addImage(enemyImg1);
  pacman.scale = 0.145;

  pacman1 = createSprite(390,280,20,20);
  pacman1.velocityX = 3;
  pacman1.addImage(enemyImg2);
  pacman1.scale = 0.145;

  jwel = createSprite(470,170,20,20);
  jwel.addImage(jwelImg);
  jwel.scale = 0.275



}

function draw() 
{

  background('black');  

    //Displaying And Counting Score

    textSize(25);
    fill("white")
    text("Score: " + score, 1020,170);

    //Displaying And Counting Score

    textSize(25);
    fill("white")
    text("Lifeline: " + life, 1020,570);

    //Colliding
    protecthalf3.bounceOff(block1);
    protecthalf3.bounceOff(line19);

    protecthalf4.bounceOff(block1);
    protecthalf4.bounceOff(line21);

    pacman.bounceOff(line19);
    pacman.bounceOff(line21);

    pacman1.bounceOff(line19);
    pacman1.bounceOff(line21);

    
  
        if(gameState == "play")
        {
           //Player Controls

            if(keyDown("DOWN_ARROW"))
            {
              player.y = player.y+2;
            }

            if(keyDown("UP_ARROW"))
            {
              player.y = player.y-2;
            }

            if(keyDown("RIGHT_ARROW"))
            {
              player.x = player.x+2;
            }

            if(keyDown("LEFT_ARROW"))
            {
              player.x = player.x-2;
            }

            //Colliding Obstacles
            pacman.bounceOff(line15);
            pacman.bounceOff(line13);

            if(player.isTouching(block1))
            {
              player.x=45;
              player.y=50;
            }

            if(player.isTouching(pacman))
            {
              player.x=45;
              player.y=50;
              pacman.velocityX=0;
              protecthalf3.velocityX=0;
              protecthalf4.velocityX=0;
            }

            if(player.isTouching(line31))
            {
              player.x=50;
              player.y=50;
            }

            if(player.isTouching(line32))
            {
              player.x=50;
              player.y=50;
            }
        }

       
  

  drawSprites();

}