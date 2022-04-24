class Game {
  constructor() {
    this.turns = 0;
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
  }
  takeTurn(spaceId) {
    this.board[spaceId] = this.currentPlayer.token
    if (this.currentPlayer === this.player1) {
      this.currentPlayer = this.player2
    } else if (this.currentPlayer === this.player2) {
      this.currentPlayer = this.player1
    }
  }
  // evaluatePlayerWins() {
  //   for (var i = 0; i < this.winCombos.length; i++) {
  //     var winCondition = this.winCombos[i];
  //     var one = this.board[winCondition[0]];
  //     var two = this.board[winCondition[2]];
  //     var three = this.board[winCondition[3]];
  //     if (one === '' || two === '' || three === '') {
  //       continue;
  //     } else if (one === two && two === three) {
  //       this.currentPlayer.increaseWins();
  //       this.currentPlayer.win = true;
  //       break;
  //     }
  //   }
  // }
  // evaluatePlayerWins() {
  //   if ((this.winCombos[0] === this.board[this.player1.token]) ||
  //     (this.winCombos[1] === this.board[this.player1.token]) ||
  //     (this.winCombos[2] === this.board[this.player1.token]) ||
  //     (this.winCombos[3] === this.board[this.player1.token]) ||
  //     (this.winCombos[4] === this.board[this.player1.token]) ||
  //     (this.winCombos[5] === this.board[this.player1.token]) ||
  //     (this.winCombos[6] === this.board[this.player1.token]) ||
  //     (this.winCombos[7] === this.board[this.player1.token]) ||
  //     (this.winCombos[8] === this.board[this.player1.token])) {
  //     this.player1.increaseWins();
  //     this.player1.win = true;
  //     }
  // }
}


// A Game should include:

// A way to keep track of the data for the game board
// have two arrays to keep track of wins and ties. Need wins to update
// win counter on DOM eventually.


// A way to check the Game’s board data for win conditions
// Need array of win conditions. Loop through array to have it
// trigger a win when one of the players has won.

// A way to detect when a game is a draw (no one has won)
// Conditionals for if all spaces on the grid are full. If all the spaces
// are full, then the game will result in a draw, not update wins, and game
// will reset.

// A way to reset the Game’s board to begin a new game
// reset game once win or tie conditions are met. Remove all tokens
// switch who's turn it is, and update win counter if a player has won
