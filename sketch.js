const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2,box3,box4,box5,box6,box8;
var backgroundImg,platform;
var polygon, slingshot;
function preloud(){
    polygon_Img=loadImage(polygon.png)    
}
function setup(){
    var canvas = createCanvas(1200,400);
    imageMode(CENTER)
   Image(polygon_Img,polygon.position.x,polygon.position.y,40,40);
    engine = Engine.create();
    polygon=Bodies.circles(50,200,20)
    world.add(world,polygon)
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    stand= new Ground();
    box1 = new Box(330,235,30,40);
    box2 = new Box(360,235,30,40);
    box3 = new Box(390,235,30,40);
    box4 = new Box(420,235,30,40);
    box5 = new Box(450,235,30,40);
    box6 = new Box(360,195,30,40);
    box7 = new Box(390,195,30,40);
    box8 =  new Box(420,195,30,40);
    box9 = new Box(390,155,30,40)
    stand2 = new Ground(200,50);
    slingshot = new SlingShot(this.polygon,{x:100, y:200});

}
function draw(){
    background(backgroundImg);
    
    noStroke();
    textSize(35)
    fill("white")
    text("Score  " + score, width-300, 50)

Engine.update(engine);
strokeWeight(4);
box1.display();
box2.display();
ground.display();
box5.display();
box6.score();
box7.display();
box3.display();
box4.display();
box8.display();
box9.score();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
Ammo.display();
stand.display();
box15.display();
slingshot.display();    
}

function mouseDragged() {
    ellipse(mouseX, mouseY, 5, 5);
    return false;
  }
  mouseDragged
  function mouseDragged(event) {
    console.log(event);
  }


function mouseReleased(){
slingshot.fly();
}


