const Board = require("./gameBoard");
const player = function (name) {
  const gameBoard = Board();
  return {
    name,
    gameBoard,
  };
};

module.exports = player;
