var bground , ground ;
var character,character_running;
/*const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body; 
const Bodies = Matter.Bodies;*/
var engine,world;
var wall,wall_image,wall_Breaking;

function preload(){
//character_running = loadAnimation("character_running_2.png","character_running_3.png","character_running_4.png");
character = loadImage("character_running_2.png");
bground = loadImage("background 1.jpg");
wall_image = loadImage("wall.png");
wall_Breaking = loadImage("broken_wall.png");
}

function setup (){
 var canvas = createCanvas(1200,700);
 
 ground = createSprite(600,670,1200,30);
 character = createSprite(200,620,100,50);
 
}
 function draw(){
    background(bground);
    //character.addAnimation("running",character_running);
    character.addAnimation("charcter",character);
drawSprites();
 }

 function player(){

 }