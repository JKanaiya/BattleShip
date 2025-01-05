import { ship } from "./ships";

const GameBoard = function () {
  let shipCoords = [];
  const ships = [];
  const sunkShips = [];
  const attacks = [];
  const buildShip = function (center, axis, length) {
    let sw = true;
    const temp = [];
    let ct = 1;
    const tempShip = ship(length);
    temp.push(center);
    if (axis === "y") {
      while (length > temp.length) {
        if (sw == true) {
          temp.push([center[0], center[1] - ct]);
          sw = false;
        } else {
          temp.push([center[0], center[1] + ct]);
          sw = true;
          ct++;
        }
      }
    } else {
      while (length > temp.length) {
        if (sw == true) {
          temp.push([center[0] - ct, center[1]]);
          sw = false;
        } else {
          temp.push([center[0] + ct, center[1]]);
          sw = true;
          ct++;
        }
      }
    }
    tempShip.setLocations(temp);
    ships.push(tempShip);
    shipCoords = [...shipCoords, ...temp];
  };

  const resetBoard = function () {
    shipCoords = [];
  };

  const initializeShipCoords = function () {
    buildShip([4, 9], "x", 5);
    buildShip([5, 6], "y", 3);
    buildShip([1, 0], "x", 3);
    buildShip([2, 3], "y", 2);
    buildShip([5, 1], "x", 2);
    buildShip([8, 1], "x", 3);
    buildShip([0, 6], "y", 4);
  };

  const getShipCoords = function () {
    return shipCoords;
  };

  const receiveAttack = function (arr) {
    if (arr) {
      attacks.push(arr);
      let attempt = "Miss";
      ships.forEach((ship) => {
        ship.getLocations().forEach((coord) => {
          if (coord[0] == arr[0] && coord[1] == arr[1]) {
            attempt = "Hit";
            ship.hit();
            if (ship.isSunk()) {
              ships.splice(ships.indexOf(ship), 1);
              ship.getName();
              sunkShips.push(ship);
            }
          }
        });
      });
      return attempt;
    }
  };

  const allSunk = function () {
    return ships.length == 0;
  };

  const getAttacks = function () {
    return attacks;
  };

  return {
    getShipCoords,
    buildShip,
    sunkShips,
    getAttacks,
    allSunk,
    resetBoard,
    receiveAttack,
    initializeShipCoords,
  };
};

export { GameBoard };
