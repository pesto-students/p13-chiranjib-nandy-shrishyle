//Create an object called game.

let game = {
  lives: 3,
  coins: 0,
  get points() {
    return this.coins * 10;
  },
  playerDies() {
    if (lives > 0) {
      this.lives - 1;
    }
  },
  newGame() {
    this.lives = 3;
    this.coins = 0;
  },
};
