// Query Selectors
var gameGrid = document.querySelector('#gameBoard');
var turnText = document.querySelector('.turn__text');
var gameSpaces = document.querySelectorAll('.game-space');
var samusWinCount = document.querySelector('#samusWins');
var metroidWinCount = document.querySelector('#metroidWins');


// Class Instances
var newGame = new Game();

// Event Listeners
gameGrid.addEventListener('click', placeToken);
gameGrid.addEventListener('click', displayDraw);
gameGrid.addEventListener('click', displayWinner);

// Functions
function placeToken(event) {
  var clickedSpace = event.target;
  if (!clickedSpace.innerHTML) {
    clickedSpace.innerHTML = newGame.currentPlayer.token;
    newGame.takeTurn(event.target.id);
    turnText.innerHTML = `IT'S  ${newGame.currentPlayer.token}'s TURN`
    }
  };

function displayWinner() {
  newGame.declareWinner();
  if (newGame.player1.won === true) {
    turnText.innerHTML = `${newGame.player1.token} WON!!!`;
    samusWinCount.innerHTML = `${newGame.player1.wins} WINS`;
    stopWins();
    setTimeout(resetGameBoard, 3000);
} else if (newGame.player2.won === true) {
    turnText.innerHTML = `${newGame.player2.token} WON!!!`;
    metroidWinCount.innerHTML = `${newGame.player2.wins} WINS`;
    stopWins();
    setTimeout(resetGameBoard, 3000);
  }
};

function displayDraw() {
  if (!newGame.board.includes('') && !newGame.evaluatePlayerWins()) {
    newGame.declareDraw();
    turnText.innerHTML = "IT'S A DRAW!!!";
    setTimeout(resetGameBoard, 3000);
  }
};

function stopWins() {
  gameGrid.removeEventListener('click', displayWinner);
};

function resetGameBoard() {
  newGame.resetGame();
  for (var i = 0; i < gameSpaces.length; i++) {
    gameSpaces[i].innerHTML = ''
  }
  gameGrid.addEventListener('click', displayWinner);
  return turnText.innerHTML = `IT'S ${newGame.currentPlayer.token}'s TURN`;
};
