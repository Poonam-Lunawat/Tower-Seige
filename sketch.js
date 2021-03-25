const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var score=0
function setup(){
    var canvas = createCanvas(700,700);
    engine = Engine.create();
    world = engine.world;


    ground1= new Ground(500,250,300,10);
    ground2 = new Ground(270,430, 200, 10);
    //tower1 level1
    box1 = new Box(595,240,30,30);
    box2 = new Box(565,240,30,30);
    box3 = new Box(535, 240,30,30);
    box4 = new Box(505,240,30,30 );
    box5 = new Box(475,240,30,30);
    box6 = new Box(445,240,30,30);
    box7 = new Box(415, 240,30,30);
    //tower 1level 2
    box8 = new Box(565, 210,30,30);   
    box9 = new Box(535, 210,30,30);
    box10 = new Box(505, 210,30,30);
    box11 = new Box(475, 210,30,30);
    box12 = new Box(445, 210,30,30);
   //tower1 level3
   box13 = new Box(535, 180,30,30);
   box14 = new Box(505, 180,30,30);
   box15 = new Box(475, 180,30,30);
   // tower1 level4
   box16 = new Box(505, 150,30,30);
   //tower2 level 1
   box17 = new Box(325, 420,30,30);
   box18 = new Box(295, 420,30,30);
   box19 = new Box(265, 420,30,30);
   box20 = new Box(235, 420,30,30);
   box21 = new Box(205, 420,30,30);
   //tower2 level 2
   box22 = new Box(295, 390,30,30);
   box23 = new Box(265, 390,30,30);
   box24 = new Box(235, 390,30,30);
   //tower2 level3
   
   box25 = new Box(265, 360,30,30);
    polygon=new Polygon(100,300,50,50)
    
    slingshot = new SlingShot(polygon.body,{x:100, y:200});
}

function draw(){
    background("black");
    text("score = " +score, 400,50)
    Engine.update(engine);
    strokeWeight(4);
    ground1.display();
    ground2.display();
    box1.display();
    box1.score()
    box2.display();
    box2.score()
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
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

    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();
    polygon.display ()  
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
