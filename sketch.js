var red_button, blue_button, yellow_button, green_button, pink_button, purple_button, grey_button, aqua_button;
var redImg, blueImg, yellowImg, greenImg, pinkImg, purpleImg, greyImg, aquaImg;
var customCursor, customImg
var bgImg

function preload() {
    redImg = loadImage("./assets/red_square.png");
    blueImg = loadImage("./assets/blue_square.png");
    yellowImg = loadImage("./assets/yellow_square.png");
    greenImg = loadImage("./assets/green_square.png");
    pinkImg = loadImage("./assets/pink_square.png");
    purpleImg = loadImage("./assets/purple_square.png");
    greyImg = loadImage("./assets/grey_square.png");
    aquaImg = loadImage("./assets/aqua_square.png");
    
    customImg = loadImage("./assets/cursor.png");
    bgImg = loadImage("./assets/background.png")
}

function setup() {

    createCanvas(windowWidth, windowHeight);

    red_button = createSprite(200, 200);
    red_button.addImage(redImg);
    red_button.scale = 0.2;
    


    
}

function draw() {

    background(bgImg, windowWidth/2, windowHeight/2);
    drawSprites();
}