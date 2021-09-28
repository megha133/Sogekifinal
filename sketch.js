var bg,s1,s2,s3,s4,s5,s6,s7,s8,p1,p2,p3,p4,n1,n2,n3,n4,gun1,target1,bullet1,gun2;
var player,form,game,allPlayers
var playerCount=0
var gameState=0
var player1=[]
var player2=[]
var bullets1,bullets2;
var mydepth
var killedbyplayer1=0,killedbyplayer2=0;
var winner = null
var team = null
function setup() {
  engine=Matter.Engine.create()
  world=engine.world;
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  bullets1=new Group()
  bullets2=new Group()
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  

}

function preload(){
  bg = loadImage("images/bg.jpg");
  s_1 = loadImage("images/sol1.png");
  s_2 = loadImage("images/sol2.png")
  s_3 = loadImage("images/sol3.png")
  s_4 = loadImage("images/sol4.png")
  s_5 = loadImage("images/sol5.png")
  s_6 = loadImage("images/sol6.png")
  s_7 = loadImage("images/sol7.png")
  s_8 = loadImage("images/sol8.png")
  p_1  = loadImage("images/pos.png")
  p_2  = loadImage("images/pos.png")
  p_3  = loadImage("images/pos.png")
  p_4  = loadImage("images/pos.png")
  n_1  = loadImage("images/neg.png")
  n_2  = loadImage("images/neg.png")
  n_3  = loadImage("images/neg.png")
  n_4  = loadImage("images/neg.png")
  gun_1 = loadImage("images/gun1.png")
  gun_2 = loadImage("images/gun2.png")
  target_1 = loadImage("images/target.png")
  b_1 = loadImage("images/bullet.png")
  bg2=loadImage("images/bg2.jpg")
  backsound = loadSound("bgS.wav")
  shotsound = loadSound("oneShot.wav")
  
}

function draw() {
  //text(mouseX+","+mouseY,width-100,90,80,80)
  Matter.Engine.update(engine)
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }  
 
}