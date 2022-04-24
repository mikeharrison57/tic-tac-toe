class Player {
  constructor(token, id) {
  this.token = token;
  this.id = id;
  this.choice = [];
  this.win = false;
  this.wins = 0;
  }
  increaseWins() {
    this.wins++
  }
}
