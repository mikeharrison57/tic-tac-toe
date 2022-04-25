// Query Selectors
var gameGrid = document.querySelector('#gameBoard');
var turnText = document.querySelector('.turn__text');
var gameSpaces = document.querySelectorAll('.game-space');

// Class Instances
var newGame = new Game();

// Event Listeners
gameGrid.addEventListener('click', placeToken);
gameGrid.addEventListener('click', displayDraw);
gameGrid.addEventListener('click', displayWinner);

// Functions

function placeToken(event) {
  var clickedSpace = event.target
  if (!clickedSpace.innerHTML) {
    clickedSpace.innerHTML = newGame.currentPlayer.token
    newGame.takeTurn(event.target.id)
    turnText.innerHTML = `IT'S  ${newGame.currentPlayer.token}'s TURN`
    newGame.turns ++
  }
};

function displayWinner() {
  newGame.declareWinner();
  if (newGame.player1.wins) {
    turnText.innerHTML = `${newGame.player1.token} WON!!!`
    setTimeout(resetGameBoard, 3000)
} else if (newGame.player2.wins) {
    turnText.innerHTML = `${newGame.player2.token} WON!!!`
    setTimeout(resetGameBoard, 3000)
  }
};

function displayDraw() {
  if (newGame.turns === 9 && !newGame.evaluatePlayerWins()) {
    newGame.turns = 0
    turnText.innerHTML = "IT'S A DRAW!!!";
    setTimeout(resetGameBoard, 3000);
  }
};

function resetGameBoard() {
  for (var i = 0; i < gameSpaces.length; i++) {
    gameSpaces[i].innerHTML = ''
  }
  return turnText.innerHTML = `IT'S ${newGame.currentPlayer.token}'s TURN`
};
