import Game from "./game.js";

const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: "#000000",
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 0
      },
      debug: false
    }
  }
};

document.getElementById("startGame").addEventListener("click", function(){
  const game = new Phaser.Game(config);

  game.scene.add("game", Game);
  game.scene.start("game")
});
