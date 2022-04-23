class Player {
  constructor(token) {
  this.id = Date.now().toString();
  this.token = token;
  this.choice = []
  this.wins = 0;
  }
  increaseWins() {
    this.wins++
  }
}
