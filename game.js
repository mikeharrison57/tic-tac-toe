class Game {
  constructor(board) {
    this.id = Date.now().toString();
    this.turn = false;
    this.player1 = new Player;
    this.player2 = new Player;
    this.players = [this.player1, this.player2]
    this.win = false;
    this.lose = false;
    this.board = board;
    this.winCombos = {
      one: 123,
      two: 321,
      three: 456,
      four: 654,
      five: 789,
      six: 987,
      seven: 147,
      eight: 741,
      nine: 258,
      ten: 852,
      eleven: 369,
      twelve: 963,
      thirteen: 159,
      fourteen: 951,
      fifteen: 357,
      sixteen: 753
    };
  }
  evaluateWinConditions() {

  }
  trackWins() {
    if (this.player1.increaseWins()) {
      return this.player1.wins
    } else if (this.player2.increaseWins) {
      return this.player2.wins
    }
  }
}

// A Game should include:

// Two Player instances
// likely need player instances in method to track game wins
// and ties.

// A way to keep track of the data for the game board
// have two arrays to keep track of wins and ties. Need wins to update
// win counter on DOM eventually.

// A way to keep track of which player’s turn it currently is
// Take turns having the first turn. Likely need conditionals for this
// with the player instances

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
