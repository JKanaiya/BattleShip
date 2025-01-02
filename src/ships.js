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
  const setName = function (len) {
    switch (len) {
      case 5:
        name = "Carrier";
        break;
      case 4:
        name = "BattleShip";
        break;
      case 3:
        name = "Submarine";
        break;
      case 2:
        name = "Patrol Boat";
        break;
      default:
        name = "ship";
        break;
    }
  };
  const getName = function () {
    setName();
    return name;
  };
  return {
    getName,
    getLength,
    hit,
    getLocations,
    isSunk,
    setLocations,
  };
};

module.exports = ship;
