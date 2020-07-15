var backgroundImage, background1, buttonImage, vaultImage, eightImage, twoImage, sevenImage, oneImage;
var vault, two, button, eight, seven, one;
var enter, oldPaper, oldPaperImage;

function preload(){
backgroundImage = loadImage("room1.jpg");
vaultImage = loadImage("vault5.jpg");
buttonImage = loadImage("button.png");
eightImage = loadImage("eight.jpg");
sevenImage = loadImage("seven.png");
twoImage = loadImage("number2.jpg");
oneImage = loadImage("one1.jpg");
oldPaperImage = loadImage("old paper.jpg");

}

function setup(){
createCanvas(displayWidth,displayHeight);
button = createSprite(displayWidth/2,displayHeight/2+360,50,50)
background1 = createSprite(displayWidth/2,displayHeight/2,50,50)
}
function draw(){
background("white");
background1.addImage(backgroundImage,"bg")
background1.scale = 2.3;

button.addImage(buttonImage,"button")
button.scale = 0.01;
button.depth = 20;

if(mousePressedOver(button)){
vault = createSprite(displayWidth/2,displayHeight/2,200,200);
vault.addImage(vaultImage,"");
vault.scale = 0.5
background1.visible = false
button.visible = false
enter = createSprite(displayWidth/2+165,displayHeight/2+130,100,50);
enter.visible = false;    

}

if(keyCode===56&&vault.x===displayWidth/2){
    eight = createSprite(displayWidth/2-175,displayHeight/2-300,200,200);
    eight.addImage(eightImage,"eight");
}

if(keyCode===50&&vault.x===displayWidth/2){
    two = createSprite(displayWidth/2-50,displayHeight/2-300,200,200);
    two.addImage(twoImage,"two");
    two.scale = 0.2
}

if(keyCode===55&&vault.x===displayWidth/2){
    seven = createSprite(displayWidth/2+60,displayHeight/2-300,200,200);
    seven.addImage(sevenImage,"seven");
    seven.scale = 0.15
}

if(keyCode===49&&vault.x===displayWidth/2){
    one = createSprite(displayWidth/2+180,displayHeight/2-300,200,200);
    one.addImage(oneImage,"one");
    one.scale = 2.0
}


if(mousePressedOver(enter)&&one.x===displayWidth/2+180){
    vault.velocityY=2;
    text("THE BAG CARRIED TO THE 5TH FLOOR FOUNTAIN PLAZA EVERYDAY.Find the treasure there",displayWidth/2-150,displayHeight/2+330);

    
}



// 548385

drawSprites();
}
