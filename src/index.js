const initPlayer = require("./player");

const Driver = function () {
  let player;
  const player1 = initPlayer("Random");
  const AiPlayer = initPlayer("Ai");
  // player1.gameBoard.initializeShipCoords();
  // AiPlayer.gameBoard.initializeShipCoords();
  player1.gameBoard.buildShip([5, 5], "y", 3);
  AiPlayer.gameBoard.buildShip([5, 5], "y", 3);

  const switchPlayer = function () {
    player == player1 ? (player = AiPlayer) : (player = player1);
  };

  const attackPlayer = function (coord) {
    switchPlayer();
    return player.gameBoard.receiveAttack(coord);
  };

  const checkGameOver = function () {
    return player1.gameBoard.allSunk() || AiPlayer.gameBoard.allSunk();
  };

  return {
    attackPlayer,
    checkGameOver,
  };
};

module.exports = Driver;
