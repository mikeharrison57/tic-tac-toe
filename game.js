class Game {
  constructor() {
    this.id = Date.now().toString();
    this.turn = false;
    this.player1 = new Player;
    this.player2 = new Player;
    this.players = [this.player1, this.player2]
    this.win = false;
    this.lose = false;
    this.winCombos = [
      [0,1,2]
      [3,4,5]
      [6,7,8]
      [0,3,6]
      [1,4,7]
      [2,5,8]
      [0,4,8]
      [2,4,6]
    ];
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
