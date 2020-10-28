const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,ground,slingshot,polygon1,stand,ball,stand2;

function preload(){
  polygon1 = loadImage("polygon.png");
}


function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  ball= Bodies.circle(50,200,20);
  World.add(world,ball);
  slingshot = new SlingShot(this.ball,{x:100, y:200});
  ground = new Ground(600, 390, 1200, 20);
  stand = new Stand(390,300,250,20);
 
  box1 = new Box(300,275,30,40);
  box2 = new Box(330,275,30,40);
  box3 = new Box(360,275,30,40);
  box4 = new Box(390,275,30,40);
  box5 = new Box(420,275,30,40);
  box6 = new Box(450,275,30,40);
  box7 = new Box(480,275,30,40);
   box10= new Box(330,235,30,40);
box11= new Box(360,235,30,40);
box12= new Box(390,235,30,40);
box13= new Box(420,235,30,40);
box14= new Box(450,235,30,40);
box15= new Box(360,195,30,40);
box16= new Box(390,195,30,40);
box17= new Box(420,195,30,40);
box18= new Box(390,155,30,40);
box19 = new Box(640,175,30,40);
box20 = new Box(670,175,30,40);
box21= new Box(700,175,30,40);
box22=new Box(730,175,30,40);
box23=new Box(760,175,30,40);
box24 = new Box(670,135,30,40);
box25 = new Box(700,135,30,40);
box26 = new Box(730,135,30,40);
box27 = new Box(700,95,30,40);
stand2 = new Stand(700,200,250,20);

}

function draw(){
  background(0);
  Engine.update(engine);
  strokeWeight(4);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
   box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
 box27.display();
 stand2.display();
     ground.display(); 
   stand.display();
   imageMode(CENTER);
   image(polygon1,ball.position.x,ball.position.y,40,40);
  slingshot.display();
  textSize(14);
fill("white");
text("'Press Space To Get A Second Chance To Play'",800,350);
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if (keyCode === 32){
      slingshot.attach(this.ball);
  }
}