class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  setElementsPosition() {
    this.titleImg.position(120, 100);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }
 
  setElementStyling(){
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting")

  }

  handleMousePressed(){
   this.playButton.mousePressed(()=>{
      
    var message=`Hello ${this.input.value()} </br> Wait for another player to join.... `
    this.greeting.html(message)

   })
  }
 
 
  display() {
   this.setElementsPosition();
   this.setElementStyling();
   this.handleMousePressed();
  }
}