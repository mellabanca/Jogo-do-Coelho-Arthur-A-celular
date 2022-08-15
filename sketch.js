const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var piso;
var teiadomiranha;
var lemon;
var colabastao;
var papeldeparede;
var magali;
var sansao;
var socrates;
var aristoteles;
var goku;
var vegeta;
var gohan;
var mestreKame;
var kuririn;
var raditz;
var bills;
var majinBoo;
var numero18;
var titi;
var lufy;
var zoro;
var usop;
var shanks;
var ace;
var goldroger;

function preload(){
  papeldeparede = loadImage("./Imagens/background.png");
  magali = loadImage("./Imagens/melon.png");
  sansao = loadImage("./Imagens/Rabbit-01.png");
  goku = loadAnimation("./Imagens/blink_1.png","./Imagens/blink_2.png","./Imagens/blink_3.png");
  vegeta = loadAnimation("./Imagens/eat_0.png","./Imagens/eat_1.png","./Imagens/eat_2.png","./Imagens/eat_3.png","./Imagens/eat_4.png");
  gohan = loadAnimation("./Imagens/sad_1.png","./Imagens/sad_2.png","./Imagens/sad_3.png",);
  mestreKame = loadSound("./Sons/sound1.mp3");
  kuririn = loadSound("./Sons/rope_cut.mp3");
  raditz = loadSound("./Sons/sad.wav");
  bills = loadSound("./Sons/eating_sound.mp3");
  majinBoo = loadSound("./Sons/air.wav");

  goku.playing = true;
  vegeta.playing = true;
  gohan.playing = true;

  goku.looping = true;
  vegeta.looping = false;
  gohan.looping = false;
}

function setup() 
{
  var estaNoCelular = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if(estaNoCelular){
    canW = displayWidth;
    canH = displayHeight;
    createCanvas(displayWidth+80,displayHeight);
  } else {
    canW = windowWidth;
    canH = windowHeight;
    createCanvas(windowWidth,windowHeight);
  }

  
  engine = Engine.create();
  world = engine.world;

  mestreKame.play();
  mestreKame.setVolume(0.4);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  imageMode(CENTER);
  textSize(50);

  goku.frameDelay = 15;
  vegeta.frameDelay = 15;

  piso = new Piso(200,canH,600,20);
  teiadomiranha=new Rope(8,{x:40,y:30});
  usop=new Rope(7,{x:370,y:40});
  shanks=new Rope(4,{x:400,y:225});
  lemon=Bodies.circle(300,300,15);
  Matter.Composite.add(teiadomiranha.body,lemon);
  colabastao=new Fitacrepe(teiadomiranha,lemon);
  ace=new Fitacrepe(usop,lemon);
  goldroger=new Fitacrepe(shanks,lemon);
  socrates=createSprite(170,canH-100,100,100);
  socrates.addImage(sansao);
  socrates.addAnimation("piscando", goku);
  socrates.addAnimation("comendo", vegeta);
  socrates.addAnimation("triste", gohan);
  socrates.changeAnimation("piscando");
  socrates.scale=0.3;
  aristoteles=createImg("./Imagens/cut_btn.png");
  aristoteles.position(20,30);
  aristoteles.size(50,50);
  aristoteles.mouseClicked(platao);
  lufy=createImg("./Imagens/cut_btn.png");
  lufy.position(330,35);
  lufy.size(50,50);
  lufy.mouseClicked(nami);
  zoro=createImg("./Imagens/cut_btn.png");
  zoro.position(360,200);
  zoro.size(50,50);
  zoro.mouseClicked(sanji);
  titi=createImg("./Imagens/mute.png");
  titi.position(450,20);
  titi.size(50,50);
  titi.mouseClicked(bulma);
  

}

function draw() 
{
  background(51);
  image(papeldeparede, width/2, height/2, displayWidth+80, displayHeight);

  Engine.update(engine);
  piso.tosemideia();
  teiadomiranha.show();
  usop.show();
  shanks.show();
  if(lemon !== null){
  image(magali,lemon.position.x,lemon.position.y,60,60);
  }

  if(cell(lemon,socrates) === true){
    socrates.changeAnimation("comendo");
    bills.play();
  }

  if(lemon !== null && lemon.position.y >= height-70){
    socrates.changeAnimation("triste");
    mestreKame.stop();
    raditz.play();
    lemon=null;
  }
  drawSprites();
}

function platao(){
  kuririn.play();
  teiadomiranha.break();
  colabastao.invisible();
  colabastao=null;
}

function cell(melancia,coelho){
  if(lemon !== null){
    var freeza = dist(melancia.position.x, melancia.position.y, coelho.position.x, coelho.position.y);
    if(freeza <= 80){
      World.remove(engine.world, lemon);
      lemon = null;
      return true;
    } else {
      return false;
    }
  }
}
function numero17(){
  Matter.Body.applyForce(lemon,{x:0,y:0},{x:0.01,y:0});
  majinBoo.play();
}
function bulma(){
  if(mestreKame.isPlaying()){
    mestreKame.stop();
  }else{
    mestreKame.play();
  }

}
function nami(){
  kuririn.play();
  usop.break();
  ace.invisible();
  ace=null;
}
function sanji(){
  kuririn.play();
  shanks.break();
  goldroger.invisible();
  goldroger=null;
}







