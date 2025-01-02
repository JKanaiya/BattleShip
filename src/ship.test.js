const ship = require("./ships");

const testShip = ship(1);

test("Ship Sunk", () => {
  expect(testShip.isSunk()).toBe(false);
  testShip.hit();
  expect(testShip.isSunk()).toBe(true);
});
