import { Driver } from "./index";

const testDriver = Driver();

test("Attack Player", () => {
  expect(testDriver.attackPlayer([5, 6])).toBe("Hit");
  expect(testDriver.attackPlayer([3, 1])).toBe("Miss");
});

// test("Game Over Check", () => {
//   expect(testDriver2.checkGameOver()).toBe(false);

//   testDriver2.attackPlayer([5, 5]);
//   testDriver2.attackPlayer([8, 5]);
//   testDriver2.attackPlayer([5, 6]);
//   testDriver2.attackPlayer([3, 5]);
//   testDriver2.attackPlayer([5, 4]);

//   expect(testDriver2.checkGameOver()).toBe(true);
// });
