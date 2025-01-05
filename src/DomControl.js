const DOMControl = function () {
  const setupBoard = document.querySelector("#setupBoard");
  const gameArea = document.querySelector("#gameArea");
  const computerBoard = document.querySelector("#computerboard");
  const shipContainer = document.querySelector("#shipContainer");

  const ships = document.querySelectorAll(".ship");
  const shipData = [];

  const dataFormat = function (center, axis, length) {
    return {
      center,
      axis,
      length,
    };
  };

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
      if (arr[0] - ct < 0 || arr[0] + ct >= 10) {
        available = false;
      }
      if (available == true) {
        if (sw == true) {
          if (
            document
              .querySelector(`[data-id = "${arr[0] + ct},${arr[1]}"]`)
              .classList.contains("span")
          ) {
            available = false;
          }
          sw = false;
        } else {
          if (
            document
              .querySelector(`[data-id = "${arr[0] - ct},${arr[1]}"]`)
              .classList.contains("span")
          ) {
            available = false;
          }
          sw = true;
        }
      }
    }
    return available;
  };

  const toggleSquash = function (center, len) {
    let ct = 1;
    let n = 1;
    let sw = true;
    while (n + 1 <= len) {
      if (sw == true) {
        document
          .querySelector(`[data-id = "${center[0] - ct},${center[1]}"]`)
          .classList.toggle("squash");
        n++;
        sw = false;
      } else {
        document
          .querySelector(`[data-id = "${center[0] + ct},${center[1]}"]`)
          .classList.toggle("squash");
        n++;
        sw = true;
        ct++;
      }
    }
  };

  const dockShip = function (e, a) {
    const n = e.target.dataset.id.split(",");
    const center = n.map((n) => Number(n));
    if (checkFits(center, a.dataset.length)) {
      toggleSquash(center, a.dataset.length);
      e.target.classList.add("span" + a.dataset.length);
      e.target.appendChild(a);
      shipData.push(dataFormat(center, "x", Number(a.dataset.length)));
      a.setAttribute("draggable", "false");
    }
  };

  const hideDetails = function (target) {
    target.style.display = "none";
  };

  const displayDetails = function (target) {
    target.style.display = "flex";
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

  const handleDragLeave = function (e) {
    e.preventDefault();
    this.classList.remove("over");
  };

  const handleDrop = function (e) {
    e.preventDefault();
    const a = document.querySelector(".dragging");
    this.classList.remove("over");
    if (!e.target.classList.contains("span" + a.dataset.length)) {
      dockShip(e, a);
    }
  };

  const handleDragOver = function (e) {
    e.stopPropagation();
    e.preventDefault();
  };

  const populateBoard = function (board) {
    let unit;
    for (let i = 9; i >= 0; i--) {
      for (let j = 0; j <= 9; j++) {
        unit = document.createElement("div");
        unit.classList.add("unit");
        unit.dataset.id = j + "," + i;
        if (board == setupBoard) {
          unit.addEventListener("dragenter", handleDragEnter);
          unit.addEventListener("dragleave", handleDragLeave);
          unit.addEventListener("dragend", handleDragEnd);
          unit.addEventListener("drop", handleDrop);
          unit.addEventListener("dragover", handleDragOver);
        }
        board.appendChild(unit);
      }
    }
  };

  const toggleBlur = function (target) {
    target.classList.toggle("blur");
  };

  const toggleFocus = function (a) {
    if (window.getComputedStyle(a).display == "flex") {
      hideDetails(a);
      toggleBlur(gameArea);
    } else {
      displayDetails(a);
      toggleBlur(gameArea);
    }
  };

  const resetSetup = function () {
    ships.forEach((ship) => {
      ship.setAttribute("draggable", "true");
      shipContainer.appendChild(ship);
    });
    setupBoard.innerHTML = "";
    populateBoard(setupBoard);
  };
  return {
    populateBoard,
    setupBoard,
    shipData,
    toggleBlur,
    handleDragStart,
    handleDragEnd,
    resetSetup,
    toggleFocus,
    computerBoard,
  };
};

export { DOMControl };
