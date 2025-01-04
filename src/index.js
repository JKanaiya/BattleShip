import { Player } from "./player";
import "./styles.css";
import { DOMControl } from "./DomControl";

const Driver = function (name) {
  if (!name) name = "Player";

  const player1 = Player(name);
  const AiPlayer = Player("Ai");

  let player = player1;

  AiPlayer.gameBoard.initializeShipCoords();

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
    AiPlayer,
    player1,
    switchPlayer,
    checkGameOver,
  };
};

const DCon = DOMControl();
const drive = Driver("Dave");
DCon.populateBoard(DCon.setupBoard);

const playerGrid = document.querySelector("#playerBoard");
const AiBoard = document.querySelector("#computerBoard");

DCon.populateBoard(playerGrid);
DCon.populateBoard(AiBoard);

const genAttack = function () {
  return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
};

const testAttacks = function (attacks, aiAttack) {
  let valid = true;
  attacks.forEach((attack) => {
    if (attack[0] == aiAttack[0] && attack[1] == aiAttack[1]) {
      valid = false;
    }
  });
  return valid;
};

const aiPlay = function () {
  let aiAttack = genAttack();
  const attacks = drive.AiPlayer.gameBoard.getAttacks();
  const recCheck = function () {
    aiAttack = genAttack();
    if (testAttacks(attacks, aiAttack)) {
      return aiAttack;
    } else {
      return recCheck();
    }
  };
  return recCheck();
};

const addListeners = function (board) {
  board.addEventListener("click", (event) => {
    event.stopPropagation();
    const target = event.target;
    if (target.dataset.id) {
      const n = target.dataset.id.split(",");
      const b = drive.attackPlayer(n.map((n) => Number(n)));
      const ap = aiPlay();
      if (ap) {
        const c = drive.attackPlayer(ap);
        const r = document.querySelector(`[data-id = "${ap}"]`);
        if (c == "Miss") {
          r.style.backgroundColor = "red";
        } else {
          r.style.backgroundColor = "green";
        }
      } else {
        console.log("error??");
        drive.switchPlayer(aiPlay());
      }
      if (b == "Miss") {
        target.style.backgroundColor = "red";
      } else {
        target.style.backgroundColor = "green";
      }
    }
  });
};

addListeners(AiBoard);

const done = document.querySelector("#done");

const dataTransfer = function (arr) {
  arr.forEach((ship) => {
    drive.player1.buildShip(ship.center, ship.axis, ship.length);
  });
};

drive.AiPlayer.gameBoard.initializeShipCoords();

done.addEventListener("click", () => dataTransfer(DCon.shipData));

export { Driver };
