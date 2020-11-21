
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, game_world;
function setup() {
  createCanvas(1500,600);
  engine = Engine.create();
  game_world = engine.world;

  box1 = new Box(1200,500,70,70)
  box2 = new Box(1400,500,70,70);
  ground = new Ground(750,590,1500,10);
  pig1 = new Pig(1300,500);
  log1 = new Log(1300,450,300,20);
  
  box3 = new Box(1200,400,70,70)
  box4 = new Box(1400,400,70,70);
  pig2 = new Pig(1300,400);
  log2 = new Log(1300,350,300,20);

}

function draw() {
  background(200); 
  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();
  pig1.display();
  log1.display();
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
}