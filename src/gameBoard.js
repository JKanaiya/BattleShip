const ship = require("./ships");

const gameBoard = function () {
  let shipCoords = [];
  const ships = [];
  //   const switchPlayer = function () {
  //     if (player2) {
  //       player == player1 ? (player = player2) : (player = player1);
  //     }
  //     else
  //       player == player1 ? (player = player2) : (player = player1);
  //   };
  const buildShip = function (center, axis, length) {
    let sw = true;
    const temp = [];
    let ct = 1;
    const missedAttacks = [];
    const tempShip = ship(length);
    temp.push(center);
    if (axis === "y") {
      while (length > temp.length) {
        if (sw == true) {
          temp.push([center[0], center[1] + ct]);
          sw = false;
        } else {
          temp.push([center[0], center[1] - ct]);
          sw = true;
          ct++;
        }
      }
    } else {
      while (length > temp.length) {
        if (sw == true) {
          temp.push([center[0] + ct, center[1]]);
          sw = false;
        } else {
          temp.push([center[0] - ct, center[1]]);
          sw = true;
          ct++;
        }
      }
    }
    tempShip.setLocations(temp);
    ships.push(tempShip);
    shipCoords = [...ships, ...temp];
  };

  const initializeShipCoords = function () {
    buildShip([4, 9], "x", 5);
    buildShip([5, 6], "y", 3);
    buildShip([1, 0], "x", 3);
    buildShip([2, 3], "y", 2);
    buildShip([5, 1], "x", 2);
    buildShip([5, 1], "x", 4);
    buildShip([0, 6], "y", 4);
  };

  const getShipCoords = function () {
    return shipCoords;
  };

  const receiveAttack = function (arr) {
    let attempt = "Miss";
    ships.forEach((ship) => {
      ship.getLocations().forEach((coord) => {
        if (coord[0] == arr[0] && coord[1] == arr[1]) {
          attempt = "Hit";
          ship.hit();
          if (ship.isSunk()) {
            ships.splice(ships.indexOf(ship), 1);
            // if(ship.length == 0) endGame?
          }
        }
      });
    });
    if (attempt == "Miss") missedAttacks.push(arr);
    return attempt;
  };

  const allSunk = function () {
    if (ships.length == 0) return true;
    return false;
  };

  return {
    getShipCoords,
    buildShip,
    ships,
    allSunk,
    receiveAttack,
    initializeShipCoords,
  };
};

module.exports = gameBoard;
