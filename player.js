class Player {
  constructor(icon) {
  this.id = Date.now().toString();
  this.icon = icon;
  this.wins = 0;
  this.wins = [];
  }
  increaseWins() {
    this.wins++
  }
}
