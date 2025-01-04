const ship = function (len) {
  let hitCount = 0;
  let locations = [];
  const length = len;
  let name = "";
  const hit = function () {
    hitCount++;
  };
  const isSunk = function () {
    return hitCount == length;
  };
  const setLocations = function (arr) {
    locations = arr;
  };
  const getLength = function () {
    return length;
  };
  const getLocations = function () {
    return locations;
  };

  const shipRelations = {
    5: "Carrier",
    4: "BattleShip",
    3: "Submarine",
    2: "Patrol Boat",
  };

  const setName = function (len) {
    name = shipRelations[len];
  };

  const getName = function () {
    setName();
    return name;
  };
  return {
    // shipRelations,
    getName,
    getLength,
    hit,
    getLocations,
    isSunk,
    setLocations,
  };
};

export { ship };
