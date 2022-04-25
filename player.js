class Player {
  constructor(token, id) {
  this.token = token;
  this.id = id;
  this.wins = 0;
  this.won = false;
  }
  increaseWins() {
    this.wins++
  }
}
