class Player {
  constructor(token, id, turn) {
  this.token = token;
  this.id = id;
  this.turn = turn;
  this.choice = [];
  this.wins = 0;
  }
  increaseWins() {
    this.wins++
  }
}
