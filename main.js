// Query Selectors
var gameGrid = document.querySelector('#gameBoard');
var turnText = document.querySelector('.turn__text')

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
    turnText.innerHTML = `IT'S  ${newGame.currentPlayer.token}'s TURN`
    newGame.turns ++
  }
}
