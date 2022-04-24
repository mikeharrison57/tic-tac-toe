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
    newGame.declareWinner();
  }
}

function displayWinner() {
  if (newGame.declareWinner()) {
    turnText.innerHTML = `${newGame.currentPlayer.token} WON!!!`
  }
}

function displayDraw() {
  if (newGame.turns === 9 && !newGame.evaluatePlayerWins()) {
    newGame.turns = 0
    turnText.innerHTML = "IT'S A DRAW!!!";
    setTimeout(resetGameBoard, 3000)
  }
}

function resetGameBoard() {
  for (var i = 0; i < gameSpaces.length; i++) {
    gameSpaces[i].innerHTML = ''
  }
  return turnText.innerHTML = `IT'S  ${newGame.currentPlayer.token}'s TURN`
}
