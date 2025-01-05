import { Player } from "./player";
import "./styles.css";
import { DOMControl } from "./DomControl";

const Driver = function (name) {
  if (!name) name = "Player";

  const player1 = Player(name);
  const AiPlayer = Player("Ai");
  let player1Ct = 0;
  let AiCt = 0;

  let player = player1;

  AiPlayer.gameBoard.initializeShipCoords();

  const switchPlayer = function () {
    player == player1 ? (player = AiPlayer) : (player = player1);
  };

  const declareSunkShip = function () {
    if (AiPlayer.gameBoard.sunkShips.length > player1Ct) {
      document.querySelector("#textArea").textContent = `${
        player1.name
      } has sunk a ${AiPlayer.gameBoard.sunkShips[
        AiPlayer.gameBoard.sunkShips.length - 1
      ].getName()}`;
      player1Ct++;
    }
    if (player1.gameBoard.sunkShips.length > AiCt) {
      document.querySelector("#textArea").textContent = `${
        AiPlayer.name
      } has sunk a ${player1.gameBoard.sunkShips[
        player1.gameBoard.sunkShips.length - 1
      ].getName()}`;
      AiCt++;
    }
  };

  const attackPlayer = function (coord) {
    switchPlayer();
    const n = player.gameBoard.receiveAttack(coord);
    declareSunkShip();
    return n;
  };

  const resetBoards = function () {
    player1.gameBoard.resetBoard();
    AiPlayer.gameBoard.resetBoard();
  };

  const checkGameOver = function () {
    return player1.gameBoard.allSunk() || AiPlayer.gameBoard.allSunk();
  };

  return {
    name,
    attackPlayer,
    AiPlayer,
    player1,
    resetBoards,
    switchPlayer,
    checkGameOver,
  };
};

let DCon;
let drive;
const playerGrid = document.querySelector("#playerBoard");
const AiBoard = document.querySelector("#computerBoard");
const setupWindow = document.querySelector("#setupWindow");
const introWindow = document.querySelector("#introWindow");
const displayText = document.querySelector("#textArea");
const retryWindow = document.querySelector("#retryWindow");

document.querySelector("#yes").addEventListener("click", () => {
  location.reload();
});

document.querySelector("#no").addEventListener("click", () => {
  DCon.toggleFocus(retryWindow);
});

document.querySelector("#startGame").addEventListener("click", (e) => {
  e.stopPropagation();
  DCon = DOMControl();
  console.log(introWindow);
  DCon.toggleFocus(introWindow);
  DCon.toggleFocus(setupWindow);
  drive = Driver(document.querySelector("#name").value);
  DCon.populateBoard(DCon.setupBoard);
});

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
  const attacks = drive.player1.gameBoard.getAttacks();
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
  for (const child of board.children) {
    child.addEventListener(
      "click",
      (event) => {
        event.stopPropagation();
        if (child.dataset.id) {
          const n = child.dataset.id.split(",");
          const b = drive.attackPlayer(n.map((n) => Number(n)));
          const ap = aiPlay();
          const r = document.querySelector(`[data-id = "${ap}"]`);
          if (ap) {
            const c = drive.attackPlayer(ap);
            if (c == "Miss") {
              r.style.backgroundColor = "red";
            } else {
              r.style.backgroundColor = "green";
              if (drive.checkGameOver()) {
                displayText.textContent = "The Computer Wins";
                DCon.toggleFocus(retryWindow);
              }
            }
          } else {
            console.log("error??");
            drive.attackPlayer(aiPlay());
          }
          if (b == "Miss") {
            child.style.backgroundColor = "red";
          } else {
            child.style.backgroundColor = "green";
            if (drive.checkGameOver()) {
              displayText.textContent = drive.name + " Wins";
              DCon.toggleFocus(retryWindow);
            }
          }
        }
      },
      { once: true }
    );
  }
};

const dataTransfer = function (arr) {
  arr.forEach((ship) => {
    drive.player1.gameBoard.buildShip(ship.center, ship.axis, ship.length);
  });
};

document.querySelector("#done").addEventListener("click", (e) => {
  e.stopPropagation();
  DCon.populateBoard(playerGrid);
  DCon.populateBoard(AiBoard);
  addListeners(AiBoard);
  dataTransfer(DCon.shipData);
  DCon.toggleFocus(setupWindow);
});
document
  .querySelector("#reset")
  .addEventListener("click", () => DCon.resetSetup());
