const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var man;
var maxDrops = 100;
var drop = [];
//var water;
//var thunder, thunderImg;

function preload(){
    thunderImg = loadImage("images/thunder.jpg");
}

function setup(){
 createCanvas(600, 750);  

    engine = Engine.create();
    world = engine.world;

    man = new Umbrella(450, 530, 12);  

    thunder = createSprite(230, 90);
    thunder.addImage("thunder", thunderImg);

    // for(var i = 0; i < 100; i++){
    //     drop= new Drop(random(0,600), random(0,400), 5);
    //     rain.push(drop);
    // }

    if(frameCount%200 ===0){
        for(var i=0; i<maxDrops; i++){
            water = new Drop(random(100,600), random(0,400), 5);
            drop.push(water);
        }
    }
}

function draw(){
    background(0);
    Engine.update(engine);
    man.display();
    //water.display();
    //console.log(water.body.position.y);

    for(var i=0; i<maxDrops; i++){
        drop[i].display();
        drop[i].fall();
      }

    //rain[i].display();

    if(frameCount%80 === 0){
        drawSprites();
    }
  
}   

