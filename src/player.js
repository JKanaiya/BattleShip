import { GameBoard } from "./gameBoard";

const Player = function (name) {
  const gameBoard = GameBoard();
  return {
    name,
    gameBoard,
  };
};

export { Player };
