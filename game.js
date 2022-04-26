class Game {
  constructor() {
    // this.turns = 0;
    this.player1 = new Player('<img src="./assets/samus-head.png" alt="samus-head">', 1);
    this.player2 = new Player('<img src="./assets/Metroid.png" alt="samus-head">', 2);
    this.currentPlayer = this.player1;
    this.board = ['', '', '', '', '', '', '', '', '']
    this.winCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  };
  takeTurn(spaceId) {
    this.board[spaceId] = this.currentPlayer.token
    if (this.currentPlayer === this.player1) {
      this.currentPlayer = this.player2
    } else if (this.currentPlayer === this.player2) {
      this.currentPlayer = this.player1
    }
  };
  evaluatePlayerWins(player) {
    for (var i = 0; i < this.winCombos.length; i++) {
      var winCondition = this.winCombos[i];
      var zero = this.board[winCondition[0]];
      var one = this.board[winCondition[1]];
      var two = this.board[winCondition[2]];
      if (zero === player && one === player && two === player) {
        return this.currentPlayer.won = true;
      }
    }
  };
  declareWinner() {
    var player1Win = this.evaluatePlayerWins(this.player1.token);
    var player2Win = this.evaluatePlayerWins(this.player2.token);
    if (player1Win) {
      this.player1.increaseWins();
      this.player1.won = true;
      this.player2.won = false;
    } else if (player2Win) {
      this.player2.increaseWins();
      this.player2.won = true;
      this.player1.won = false;
    }
  };
resetGame() {
  for (var i = 0; i < this.board.length; i++) {
    this.board[i] = ''
    }
    this.player1.won = false;
    this.player2.won = false;
  }
};
