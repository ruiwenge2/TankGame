import Text from "./objects/text.js";
import Button from "./objects/button.js";


class Game extends Phaser.Scene {
  contructor(){
    
  }
  
  preload(){
    
  }
  
  create() {
    this.gametext = new Text(this, window.innerWidth / 2, 100, "Game", {fontSize: 100}).setOrigin(0.5);
    // var name = prompt("Hello what will your username be?");
    // alert("Hello " + name + "! Welcome to Supreme Tank Game!")
    
  }
  
  update(){
    
  }
}

export default Game;