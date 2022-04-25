class Player {
  constructor(token, id) {
  this.token = token;
  this.id = id;
  this.wins = 0;
  }
  increaseWins() {
    this.wins++
  }
}
