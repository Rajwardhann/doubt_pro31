const Engine = Matter.Engine
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const World = Matter.World;
function preload(){
    //boyimg = loadImage("bboy.png");
    thunder1img = loadImage("thunder1.png")
    thunder2img = loadImage("thunder2.png")
}

function setup(){
    var canvas = createCanvas(400,600);

    engine = Engine.create();
    world = engine.world;

    boy = new umbrella(200,420,350);
    Engine.run(engine);
    dripping = new drops(200,1,10);
}

function draw(){
    background("black");
    dripping.display();
    boy.display();
}   

