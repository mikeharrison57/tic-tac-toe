// Query Selectors

var gameGrid = document.querySelector('#gameBoard');
var gameSpace = document.querySelectorAll('.game-space');

console.log(gameGrid);

// Class Instances
var newGame = new Game();
console.log(newGame.player1.token)

// Event Listeners

gameGrid.addEventListener('click', placeToken);

// Functions

function placeToken(event) {
  var clickedSpace = event.target
  if (!clickedSpace.innerHTML) {
    clickedSpace.innerHTML = newGame.currentPlayer.token
    newGame.takeTurn(event.target.id)
    newGame.turns ++
  }
}
