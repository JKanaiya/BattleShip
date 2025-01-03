/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const ship = __webpack_require__(/*! ./ships */ \"./src/ships.js\");\n\nconst gameBoard = function () {\n  let shipCoords = [];\n  const ships = [];\n  const sunkShips = [];\n  const missedAttacks = [];\n  const buildShip = function (center, axis, length) {\n    let sw = true;\n    const temp = [];\n    let ct = 1;\n    const tempShip = ship(length);\n    temp.push(center);\n    if (axis === \"y\") {\n      while (length > temp.length) {\n        if (sw == true) {\n          temp.push([center[0], center[1] + ct]);\n          sw = false;\n        } else {\n          temp.push([center[0], center[1] - ct]);\n          sw = true;\n          ct++;\n        }\n      }\n    } else {\n      while (length > temp.length) {\n        if (sw == true) {\n          temp.push([center[0] + ct, center[1]]);\n          sw = false;\n        } else {\n          temp.push([center[0] - ct, center[1]]);\n          sw = true;\n          ct++;\n        }\n      }\n    }\n    tempShip.setLocations(temp);\n    ships.push(tempShip);\n    shipCoords = [...ships, ...temp];\n  };\n\n  const initializeShipCoords = function () {\n    buildShip([4, 9], \"x\", 5);\n    buildShip([5, 6], \"y\", 3);\n    buildShip([1, 0], \"x\", 3);\n    buildShip([2, 3], \"y\", 2);\n    buildShip([5, 1], \"x\", 2);\n    buildShip([5, 1], \"x\", 4);\n    buildShip([0, 6], \"y\", 4);\n  };\n\n  const getShipCoords = function () {\n    return shipCoords;\n  };\n\n  const receiveAttack = function (arr) {\n    let attempt = \"Miss\";\n    ships.forEach((ship) => {\n      ship.getLocations().forEach((coord) => {\n        if (coord[0] == arr[0] && coord[1] == arr[1]) {\n          attempt = \"Hit\";\n          ship.hit();\n          if (ship.isSunk()) {\n            ships.splice(ships.indexOf(ship), 1);\n            ship.getName();\n            sunkShips.push(ship);\n          }\n        }\n      });\n    });\n    if (attempt == \"Miss\") missedAttacks.push(arr);\n    return attempt;\n  };\n\n  const allSunk = function () {\n    if (ships.length == 0) return true;\n    return false;\n  };\n\n  const getMissedAttacks = function () {\n    return missedAttacks;\n  };\n\n  return {\n    getShipCoords,\n    buildShip,\n    ships,\n    sunkShips,\n    getMissedAttacks,\n    allSunk,\n    receiveAttack,\n    initializeShipCoords,\n  };\n};\n\nmodule.exports = gameBoard;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZUJvYXJkLmpzIiwibWFwcGluZ3MiOiJBQUFBLGFBQWEsbUJBQU8sQ0FBQywrQkFBUzs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVCb2FyZC5qcz8yOGIzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNoaXAgPSByZXF1aXJlKFwiLi9zaGlwc1wiKTtcblxuY29uc3QgZ2FtZUJvYXJkID0gZnVuY3Rpb24gKCkge1xuICBsZXQgc2hpcENvb3JkcyA9IFtdO1xuICBjb25zdCBzaGlwcyA9IFtdO1xuICBjb25zdCBzdW5rU2hpcHMgPSBbXTtcbiAgY29uc3QgbWlzc2VkQXR0YWNrcyA9IFtdO1xuICBjb25zdCBidWlsZFNoaXAgPSBmdW5jdGlvbiAoY2VudGVyLCBheGlzLCBsZW5ndGgpIHtcbiAgICBsZXQgc3cgPSB0cnVlO1xuICAgIGNvbnN0IHRlbXAgPSBbXTtcbiAgICBsZXQgY3QgPSAxO1xuICAgIGNvbnN0IHRlbXBTaGlwID0gc2hpcChsZW5ndGgpO1xuICAgIHRlbXAucHVzaChjZW50ZXIpO1xuICAgIGlmIChheGlzID09PSBcInlcIikge1xuICAgICAgd2hpbGUgKGxlbmd0aCA+IHRlbXAubGVuZ3RoKSB7XG4gICAgICAgIGlmIChzdyA9PSB0cnVlKSB7XG4gICAgICAgICAgdGVtcC5wdXNoKFtjZW50ZXJbMF0sIGNlbnRlclsxXSArIGN0XSk7XG4gICAgICAgICAgc3cgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZW1wLnB1c2goW2NlbnRlclswXSwgY2VudGVyWzFdIC0gY3RdKTtcbiAgICAgICAgICBzdyA9IHRydWU7XG4gICAgICAgICAgY3QrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAobGVuZ3RoID4gdGVtcC5sZW5ndGgpIHtcbiAgICAgICAgaWYgKHN3ID09IHRydWUpIHtcbiAgICAgICAgICB0ZW1wLnB1c2goW2NlbnRlclswXSArIGN0LCBjZW50ZXJbMV1dKTtcbiAgICAgICAgICBzdyA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRlbXAucHVzaChbY2VudGVyWzBdIC0gY3QsIGNlbnRlclsxXV0pO1xuICAgICAgICAgIHN3ID0gdHJ1ZTtcbiAgICAgICAgICBjdCsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRlbXBTaGlwLnNldExvY2F0aW9ucyh0ZW1wKTtcbiAgICBzaGlwcy5wdXNoKHRlbXBTaGlwKTtcbiAgICBzaGlwQ29vcmRzID0gWy4uLnNoaXBzLCAuLi50ZW1wXTtcbiAgfTtcblxuICBjb25zdCBpbml0aWFsaXplU2hpcENvb3JkcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBidWlsZFNoaXAoWzQsIDldLCBcInhcIiwgNSk7XG4gICAgYnVpbGRTaGlwKFs1LCA2XSwgXCJ5XCIsIDMpO1xuICAgIGJ1aWxkU2hpcChbMSwgMF0sIFwieFwiLCAzKTtcbiAgICBidWlsZFNoaXAoWzIsIDNdLCBcInlcIiwgMik7XG4gICAgYnVpbGRTaGlwKFs1LCAxXSwgXCJ4XCIsIDIpO1xuICAgIGJ1aWxkU2hpcChbNSwgMV0sIFwieFwiLCA0KTtcbiAgICBidWlsZFNoaXAoWzAsIDZdLCBcInlcIiwgNCk7XG4gIH07XG5cbiAgY29uc3QgZ2V0U2hpcENvb3JkcyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gc2hpcENvb3JkcztcbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gZnVuY3Rpb24gKGFycikge1xuICAgIGxldCBhdHRlbXB0ID0gXCJNaXNzXCI7XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgc2hpcC5nZXRMb2NhdGlvbnMoKS5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgICBpZiAoY29vcmRbMF0gPT0gYXJyWzBdICYmIGNvb3JkWzFdID09IGFyclsxXSkge1xuICAgICAgICAgIGF0dGVtcHQgPSBcIkhpdFwiO1xuICAgICAgICAgIHNoaXAuaGl0KCk7XG4gICAgICAgICAgaWYgKHNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgIHNoaXBzLnNwbGljZShzaGlwcy5pbmRleE9mKHNoaXApLCAxKTtcbiAgICAgICAgICAgIHNoaXAuZ2V0TmFtZSgpO1xuICAgICAgICAgICAgc3Vua1NoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAoYXR0ZW1wdCA9PSBcIk1pc3NcIikgbWlzc2VkQXR0YWNrcy5wdXNoKGFycik7XG4gICAgcmV0dXJuIGF0dGVtcHQ7XG4gIH07XG5cbiAgY29uc3QgYWxsU3VuayA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc2hpcHMubGVuZ3RoID09IDApIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBnZXRNaXNzZWRBdHRhY2tzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBtaXNzZWRBdHRhY2tzO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0U2hpcENvb3JkcyxcbiAgICBidWlsZFNoaXAsXG4gICAgc2hpcHMsXG4gICAgc3Vua1NoaXBzLFxuICAgIGdldE1pc3NlZEF0dGFja3MsXG4gICAgYWxsU3VuayxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGluaXRpYWxpemVTaGlwQ29vcmRzLFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnYW1lQm9hcmQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/gameBoard.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const initPlayer = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\nconst Driver = function (name) {\n  let player;\n\n  if (!name) name = \"Player\";\n\n  const player1 = initPlayer(name);\n  const AiPlayer = initPlayer(\"Ai\");\n\n  AiPlayer.gameBoard.initializeShipCoords();\n  player1.gameBoard.initializeShipCoords();\n  // player1.gameBoard.buildShip([5, 5], \"y\", 3);\n  // AiPlayer.gameBoard.buildShip([5, 5], \"y\", 3);\n\n  const switchPlayer = function () {\n    player == player1 ? (player = AiPlayer) : (player = player1);\n  };\n\n  const attackPlayer = function (coord) {\n    switchPlayer();\n    return player.gameBoard.receiveAttack(coord);\n  };\n\n  const checkGameOver = function () {\n    return player1.gameBoard.allSunk() || AiPlayer.gameBoard.allSunk();\n  };\n\n  return {\n    attackPlayer,\n    checkGameOver,\n  };\n};\n\nmodule.exports = Driver;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUEsbUJBQW1CLG1CQUFPLENBQUMsaUNBQVU7O0FBRXJDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5pdFBsYXllciA9IHJlcXVpcmUoXCIuL3BsYXllclwiKTtcblxuY29uc3QgRHJpdmVyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgbGV0IHBsYXllcjtcblxuICBpZiAoIW5hbWUpIG5hbWUgPSBcIlBsYXllclwiO1xuXG4gIGNvbnN0IHBsYXllcjEgPSBpbml0UGxheWVyKG5hbWUpO1xuICBjb25zdCBBaVBsYXllciA9IGluaXRQbGF5ZXIoXCJBaVwiKTtcblxuICBBaVBsYXllci5nYW1lQm9hcmQuaW5pdGlhbGl6ZVNoaXBDb29yZHMoKTtcbiAgcGxheWVyMS5nYW1lQm9hcmQuaW5pdGlhbGl6ZVNoaXBDb29yZHMoKTtcbiAgLy8gcGxheWVyMS5nYW1lQm9hcmQuYnVpbGRTaGlwKFs1LCA1XSwgXCJ5XCIsIDMpO1xuICAvLyBBaVBsYXllci5nYW1lQm9hcmQuYnVpbGRTaGlwKFs1LCA1XSwgXCJ5XCIsIDMpO1xuXG4gIGNvbnN0IHN3aXRjaFBsYXllciA9IGZ1bmN0aW9uICgpIHtcbiAgICBwbGF5ZXIgPT0gcGxheWVyMSA/IChwbGF5ZXIgPSBBaVBsYXllcikgOiAocGxheWVyID0gcGxheWVyMSk7XG4gIH07XG5cbiAgY29uc3QgYXR0YWNrUGxheWVyID0gZnVuY3Rpb24gKGNvb3JkKSB7XG4gICAgc3dpdGNoUGxheWVyKCk7XG4gICAgcmV0dXJuIHBsYXllci5nYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZCk7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tHYW1lT3ZlciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcGxheWVyMS5nYW1lQm9hcmQuYWxsU3VuaygpIHx8IEFpUGxheWVyLmdhbWVCb2FyZC5hbGxTdW5rKCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBhdHRhY2tQbGF5ZXIsXG4gICAgY2hlY2tHYW1lT3ZlcixcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRHJpdmVyO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Board = __webpack_require__(/*! ./gameBoard */ \"./src/gameBoard.js\");\nconst player = function (name) {\n  const gameBoard = Board();\n  return {\n    name,\n    gameBoard,\n  };\n};\n\nmodule.exports = player;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGxheWVyLmpzIiwibWFwcGluZ3MiOiJBQUFBLGNBQWMsbUJBQU8sQ0FBQyx1Q0FBYTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzP2E4YTIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQm9hcmQgPSByZXF1aXJlKFwiLi9nYW1lQm9hcmRcIik7XG5jb25zdCBwbGF5ZXIgPSBmdW5jdGlvbiAobmFtZSkge1xuICBjb25zdCBnYW1lQm9hcmQgPSBCb2FyZCgpO1xuICByZXR1cm4ge1xuICAgIG5hbWUsXG4gICAgZ2FtZUJvYXJkLFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBwbGF5ZXI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/player.js\n");

/***/ }),

/***/ "./src/ships.js":
/*!**********************!*\
  !*** ./src/ships.js ***!
  \**********************/
/***/ ((module) => {

eval("const ship = function (len) {\n  let hitCount = 0;\n  let locations = [];\n  const length = len;\n  let name = \"\";\n  const hit = function () {\n    hitCount++;\n  };\n  const isSunk = function () {\n    return hitCount == length;\n  };\n  const setLocations = function (arr) {\n    locations = arr;\n  };\n  const getLength = function () {\n    return length;\n  };\n  const getLocations = function () {\n    return locations;\n  };\n  const setName = function (len) {\n    switch (len) {\n      case 5:\n        name = \"Carrier\";\n        break;\n      case 4:\n        name = \"BattleShip\";\n        break;\n      case 3:\n        name = \"Submarine\";\n        break;\n      case 2:\n        name = \"Patrol Boat\";\n        break;\n      default:\n        name = \"ship\";\n        break;\n    }\n  };\n  const getName = function () {\n    setName();\n    return name;\n  };\n  return {\n    getName,\n    getLength,\n    hit,\n    getLocations,\n    isSunk,\n    setLocations,\n  };\n};\n\nmodule.exports = ship;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2hpcHMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXBzLmpzPzVkNWUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2hpcCA9IGZ1bmN0aW9uIChsZW4pIHtcbiAgbGV0IGhpdENvdW50ID0gMDtcbiAgbGV0IGxvY2F0aW9ucyA9IFtdO1xuICBjb25zdCBsZW5ndGggPSBsZW47XG4gIGxldCBuYW1lID0gXCJcIjtcbiAgY29uc3QgaGl0ID0gZnVuY3Rpb24gKCkge1xuICAgIGhpdENvdW50Kys7XG4gIH07XG4gIGNvbnN0IGlzU3VuayA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gaGl0Q291bnQgPT0gbGVuZ3RoO1xuICB9O1xuICBjb25zdCBzZXRMb2NhdGlvbnMgPSBmdW5jdGlvbiAoYXJyKSB7XG4gICAgbG9jYXRpb25zID0gYXJyO1xuICB9O1xuICBjb25zdCBnZXRMZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGxlbmd0aDtcbiAgfTtcbiAgY29uc3QgZ2V0TG9jYXRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBsb2NhdGlvbnM7XG4gIH07XG4gIGNvbnN0IHNldE5hbWUgPSBmdW5jdGlvbiAobGVuKSB7XG4gICAgc3dpdGNoIChsZW4pIHtcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgbmFtZSA9IFwiQ2FycmllclwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgbmFtZSA9IFwiQmF0dGxlU2hpcFwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgbmFtZSA9IFwiU3VibWFyaW5lXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBuYW1lID0gXCJQYXRyb2wgQm9hdFwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIG5hbWUgPSBcInNoaXBcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9O1xuICBjb25zdCBnZXROYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHNldE5hbWUoKTtcbiAgICByZXR1cm4gbmFtZTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBnZXROYW1lLFxuICAgIGdldExlbmd0aCxcbiAgICBoaXQsXG4gICAgZ2V0TG9jYXRpb25zLFxuICAgIGlzU3VuayxcbiAgICBzZXRMb2NhdGlvbnMsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNoaXA7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ships.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;