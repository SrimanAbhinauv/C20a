var bgImhg;
var cat,cating1,cating2,cating3,cating4;
var mouse,mousing1,mousing2,mousing3,mousing4;

function preload() {
    //load the images herej 
    bgImg = loadImage("garden.png");
    cating1 = loadImage("cat1.png");
    mousing1 = loadImage("mouse1.png");
    cating2 = loadImage("cat2.png");
    mousing2 = loadImage("mouse2.png");
    cating3 = loadImage("cat3.png");
    mousing3 = loadImage("mouse3.png");
    cating4 = loadImage("cat4.png");
    mousing4 = loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

}

function draw() {

    background("garden.png");
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode=== RIGHT_ARROW){
    mouse.addAnimaton("mouseTeasing",mousing2);
    mouse.changeAnmation("mouseTeasng");
    mouse.frameDelay = 25;

}
if(keyCode=== LEFT_ARROW){
    mouse.addAnimaton("mouseTeasing",mousing2);
    mouse.changeAnmation("mouseTeasng");
    mouse.frameDelay = 25;
    
}

}
