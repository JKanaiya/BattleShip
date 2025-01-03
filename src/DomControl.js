const DOMControl = function () {
  const playerBoard = document.querySelector("#playerBoard");
  const computerBoard = document.querySelector("#computerboard");

  const ships = document.querySelectorAll(".ship");

  ships.forEach((ship) => {
    ship.addEventListener("dragstart", () => {
      ship.classList.add("dragging");
    });
    ship.addEventListener("dragend", () => {
      ship.classList.remove("dragging");
    });
  });

  const handleDragStart = function () {
    this.style.opacity = "0.4";
  };

  const handleDragEnd = function () {
    this.style.opacity = "1";
  };

  const handleDragEnter = function (e) {
    e.preventDefault();
    e.target.append(document.querySelector(".dragging"));
    this.classList.add("over");
  };

  const handleDragLeave = function () {
    this.classList.remove("over");
  };

  const handleDrop = function (e) {
    e.stopPropagation();
    return false;
  };

  const populateBoard = function (board) {
    let unit;
    for (let i = 0; i <= 9; i++) {
      for (let j = 0; j <= 9; j++) {
        unit = document.createElement("div");
        unit.setAttribute("id", i + "," + j);
        unit.classList.add("unit");
        unit.addEventListener("dragenter", handleDragEnter);
        unit.addEventListener("dragleave", handleDragLeave);
        unit.addEventListener("drop", handleDrop);
        board.appendChild(unit);
      }
    }
  };

  return {
    populateBoard,
    playerBoard,
    handleDragStart,
    handleDragEnd,
    computerBoard,
  };
};

export { DOMControl };
