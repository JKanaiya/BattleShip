import { GameBoard } from "./gameBoard";

test("Build Ship 1 of Set Size", () => {
  const testGB1 = GameBoard();
  testGB1.buildShip([4, 9], "x", 5);
  expect(testGB1.getShipCoords()).toEqual(
    expect.arrayContaining([
      [2, 9],
      [3, 9],
      [4, 9],
      [5, 9],
      [6, 9],
    ])
  );
});

test("Build Ship 2 of Set Size", () => {
  const testGB2 = GameBoard();
  testGB2.buildShip([5, 6], "y", 2);
  expect(testGB2.getShipCoords()).toEqual(
    expect.arrayContaining([
      [5, 6],
      [5, 5],
    ])
  );
});

test("Attack Test: Miss and Hit", () => {
  const testGB3 = GameBoard();
  testGB3.initializeShipCoords();
  expect(testGB3.receiveAttack([8, 8])).toBe("Miss");
  expect(testGB3.receiveAttack([2, 3])).toBe("Hit");
});

test("Attack Test: Sink Ship && All Sunk", () => {
  const testGB4 = GameBoard();
  testGB4.buildShip([5, 5], "y", 3);
  expect(testGB4.allSunk()).toBe(false);
  testGB4.receiveAttack([5, 5]);
  testGB4.receiveAttack([5, 6]);
  expect(testGB4.ships.length).toBe(1);
  testGB4.receiveAttack([5, 4]);
  expect(testGB4.ships.length).toBe(0);
  expect(testGB4.allSunk()).toBe(true);
});
