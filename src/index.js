import { Player } from "./player";
import "./styles.css";
import { DOMControl } from "./DomControl";

const Driver = function (name) {
  let player;

  if (!name) name = "Player";

  const player1 = Player(name);
  const AiPlayer = Player("Ai");

  AiPlayer.gameBoard.initializeShipCoords();
  player1.gameBoard.initializeShipCoords();
  // player1.gameBoard.buildShip([5, 5], "y", 3);
  // AiPlayer.gameBoard.buildShip([5, 5], "y", 3);

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

const DCon = DOMControl();
DCon.populateBoard(DCon.setupBoard);

export { Driver };
