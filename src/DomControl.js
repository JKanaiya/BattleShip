import { ship } from "./ships";

const DOMControl = function () {
  const playerBoard = document.querySelector("#playerBoard");
  const computerBoard = document.querySelector("#computerboard");

  const ships = document.querySelectorAll(".ship");

  const random = ship();

  ships.forEach((ship) => {
    ship.addEventListener("dragstart", () => {
      ship.classList.add("dragging");
    });
    ship.addEventListener("dragend", () => {
      ship.classList.remove("dragging");
    });
  });

  const checkFits = function (arr, length) {
    let sw = true;
    let available = true;
    for (let ct = 1; length > ct * 2; ct++) {
      console.log(ct);
      if (arr[0] - ct < 0 || arr[0] + ct >= 10) {
        available = false;
      }
      if (available == true) {
        // console.log(
        //   document.querySelector(`[data-id = "${arr[0] + ct},${arr[1]}"]`)
        // );
        if (sw == true) {
          if (
            document.querySelector(`[data-id = "${arr[0] + ct},${arr[1]}"]`)
              .style.backgroundColor != "white" &&
            document.querySelector(`[data-id = "${arr[0] + ct},${arr[1]}"]`)
              .style.backgroundColor != null
          ) {
            available = false;
          }
          sw = false;
        } else {
          if (
            document.querySelector(`[data-id = "${arr[0] - ct},${arr[1]}"]`)
              .style.backgroundColor != "white" &&
            document.querySelector(`[data-id = "${arr[0] - ct},${arr[1]}"]`)
              .style.backgroundColor != null
          ) {
            available = false;
          }
          sw = true;
        }
      }
    }
    return available;
  };

  const colLength = function (center, len) {
    let sw = true;
    for (let ct = 1; len > ct * 2; ct++) {
      if (sw == true) {
        document.querySelector(
          `.${center[0] - ct}, ${center[1]}`
        ).style.backgroundColor = "black";
        sw = false;
      } else {
        document.querySelector(
          `.${center[0] + ct}, ${center[1]}`
        ).style.backgroundColor = "black";
        sw = true;
      }
    }
  };

  const displayLength = function (e, a) {
    const n = e.target.dataset.id.split(",");
    const center = n.map((n) => Number(n));
    const len = Object.keys(random.shipRelations)[
      Object.values(random.shipRelations).indexOf(a.id)
    ];
    console.log(checkFits(center, len));
    if (checkFits(center, len)) {
      colLength(center, len);
    }
  };

  const handleDragStart = function () {
    this.style.opacity = "0.4";
  };

  const handleDragEnd = function () {
    this.style.opacity = "1";
  };

  const handleDragEnter = function (e) {
    e.preventDefault();
    this.classList.add("over");
  };

  const handleDragLeave = function () {
    this.classList.remove("over");
  };

  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    const a = document.querySelector(".dragging");
    if (a && e.target.classList.contains("unit")) {
      e.target.appendChild(a);
      displayLength(e, a);
    }

    this.classList.remove("over");
    // return false;
  };

  const populateBoard = function (board) {
    let unit;
    for (let i = 9; i >= 0; i--) {
      for (let j = 0; j <= 9; j++) {
        unit = document.createElement("div");
        unit.classList.add("unit");
        unit.dataset.id = j + "," + i;
        unit.addEventListener("dragenter", handleDragEnter);
        unit.addEventListener("dragleave", handleDragLeave);
        unit.addEventListener("dragover", handleDrop);
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
