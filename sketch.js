var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;

function preload() {
  backgroundImage = loadImage("assets/background.png");
}

function setup() {
  //windowWidth/2-800/2
  canvas = createCanvas(windowWidth, windowHeight);

  database = firebase.database();

  game = new Game();
  game.start();

}

function draw() {
  background(backgroundImage);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
