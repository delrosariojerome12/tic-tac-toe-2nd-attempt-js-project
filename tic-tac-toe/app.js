const container = document.querySelector(".container");
const boxCon = document.querySelector(".box-con");
const box = document.querySelectorAll(".box");

// row user
let rowOneScoreUser = 0;
let rowTwoScoreUser = 0;
let rowThreeScoreUser = 0;
// row computer
let rowOneScoreAi = 0;
let rowTwoScoreAi = 0;
let rowThreeScoreAi = 0;
// string row
let strRowOne = "Row One";
let strRowTwo = "Row Two";
let strRowThree = "Row Three";

// column user
let columnOneScoreUser = 0;
let columnTwoScoreUser = 0;
let columnThreeScoreUser = 0;
// column computer
let columnOneScoreAi = 0;
let columnTwoScoreAi = 0;
let columnThreeScoreAi = 0;
// string column
let strColumnOne = "Column One";
let strColumnTwo = "Column Two";
let strColumnThree = "Column Three";

//diagonal
let diagonalRightStr = "Diagonal Right";
let diagonalLeftStr = "Diagonal Left";
// diagonal user
let diagonalRightUserScore = 0;
let diagonalLeftUserScore = 0;
// computer diagonal
let diagonalRightAiScore = 0;
let diagonalLeftAiScore = 0;

// computer choice
const boxRow = [
  [box[0], box[1], box[2]],
  [box[3], box[4], box[5]],
  [box[6], box[7], box[8]],
];
const boxColumn = [
  [box[0], box[3], box[6]],
  [box[1], box[4], box[7]],
  [box[2], box[5], box[8]],
];
// scoring container
const rowOne = [];
const rowTwo = [];
const rowThree = [];

const columnOne = [];
const columnTwo = [];
const columnThree = [];

const diagonalRight = [];
const diagonalLeft = [];

let userClick = 9;
let updateList = [];
let justANumber = 1;
let computerCtr = 0;
let userWin = false;
let computerWin = false;

// loop the node
for (let index = 0; index < box.length; index++) {
  box[index].addEventListener("click", boxClicked);
}
// computer side
function computerRandomizer(arrayGiven, className) {
  if (justANumber === 1) {
    for (let index = 0; index < arrayGiven.length; index++) {
      for (let j = 0; j < arrayGiven[index].length; j++) {
        updateList.push(arrayGiven[index][j]);
      }
    }
    justANumber++;
  } else if (justANumber === 2) {
    for (let index = 0; index < updateList.length; index++) {
      if (className === updateList[index]) {
        // console.log(className.className);
        updateList.splice(index, 1);
      }
    }
  }
  userClick -= 2;

  // console.log(updateList);
  // console.log(all);
  // console.log(updateList[all].className);
  // console.log(updateList);
  // console.log(userClick);

  if (computerCtr < 4 && userWin === false) {
    let all = Math.floor(Math.random() * userClick);
    let aiVar = updateList[all].className;
    let computer = "AI";
    // console.log(aiVar);
    computerCtr++;
    // console.log(computerCtr);
    checkClass(aiVar, computer);
    for (let index = 0; index < updateList.length; index++) {
      if (updateList[all] === updateList[index]) {
        // console.log(updateList[all]);
        // console.log(updateList);
        // console.log(all);
        updateList[all].style.background =
          "url(img/circle-brush.png) no-repeat";
        updateList[all].style.pointerEvents = "none";
        updateList[all].style.backgroundSize = "contain";
        updateList[all].style.backgroundPosition = "center";
        updateList.splice(all, 1);
        updateList.splice;
        // console.log(updateList);
      }
    }
  }
}

// box click event function
function boxClicked() {
  let clickedBox = this.className;
  let mark = this;
  let player = "User";
  mark.style.background = "url(img/x-brush.png) no-repeat";
  mark.style.backgroundSize = "contain";
  mark.style.backgroundPosition = "center";
  mark.style.pointerEvents = "none";
  checkClass(clickedBox, player);
  computerRandomizer(boxRow, mark);
  console.log(updateList.length);

  state();
}

// check what class
function checkClass(varBox, user) {
  // row one
  if (
    varBox === "box row-one-1" ||
    varBox === "box row-one-2" ||
    varBox === "box row-one-3"
  ) {
    rowOne.push(user);
    console.log("row one");
    console.log(rowOne);
    searchAndDestroy(boxRow, varBox);
    checking(rowOne, strRowOne);
  }
  // row two
  else if (
    varBox === "box row-two-1" ||
    varBox === "box row-two-2" ||
    varBox === "box row-two-3"
  ) {
    rowTwo.push(user);
    console.log("row two");
    console.log(rowTwo);
    searchAndDestroy(boxRow, varBox);
    checking(rowTwo, strRowTwo);
  }
  // row three
  else if (
    varBox === "box row-three-1" ||
    varBox === "box row-three-2" ||
    varBox === "box row-three-3"
  ) {
    rowThree.push(user);
    console.log("row three");
    searchAndDestroy(boxRow, varBox);
    checking(rowThree, strRowThree);
  }
  // column one
  if (
    varBox === "box row-one-1" ||
    varBox === "box row-two-1" ||
    varBox === "box row-three-1"
  ) {
    columnOne.push(user);
    console.log("column one");
    console.log(columnOne);
    searchAndDestroy(boxRow, varBox);
    checking(columnOne, strColumnOne);
  }
  // column two
  else if (
    varBox === "box row-one-2" ||
    varBox === "box row-two-2" ||
    varBox === "box row-three-2"
  ) {
    columnTwo.push(user);
    console.log("column two");
    console.log(columnTwo);
    searchAndDestroy(boxRow, varBox);
    checking(columnTwo, strColumnTwo);
  }
  // column three
  else if (
    varBox === "box row-one-3" ||
    varBox === "box row-two-3" ||
    varBox === "box row-three-3"
  ) {
    columnThree.push(user);
    console.log("column three");
    console.log(columnThree);
    searchAndDestroy(boxRow, varBox);
    checking(columnThree, strColumnThree);
  }
  // diagonal right
  if (
    varBox === "box row-one-1" ||
    varBox === "box row-two-2" ||
    varBox === "box row-three-3"
  ) {
    diagonalRight.push(user);
    console.log("diagonal right");
    console.log(diagonalRight);
    searchAndDestroy(boxRow, varBox);
    checking(diagonalRight, diagonalRightStr);
  }
  // diagonal left
  if (
    varBox === "box row-one-3" ||
    varBox === "box row-two-2" ||
    varBox === "box row-three-1"
  ) {
    diagonalLeft.push(user);
    console.log("diagonal left");
    console.log(diagonalLeft);
    searchAndDestroy(boxRow, varBox);
    checking(diagonalLeft, diagonalLeftStr);
  }
}

// remove item
function searchAndDestroy(array, className) {
  for (let index = 0; index < array.length; index++) {
    for (let j = 0; j < array[index].length; j++) {
      if (className === array[index][j].className) {
        // console.log("match found");
        // console.log(array[index][j].className);
        array[index].splice(j, 1);
      }
    }
  }
}

// check who wins
function checking(array, part) {
  for (let index = 0; index < array.length; index++) {
    if (array.length === 3) {
      // row one user
      if (part === "Row One" && array[index] === "User") {
        rowOneScoreUser++;
        if (rowOneScoreUser === 3) {
          // console.log("You Win!");
          userWin = true;
        }
      }
      // row one computer
      else if (part === "Row One" && array[index] === "AI") {
        rowOneScoreAi++;
        if (rowOneScoreAi === 3) {
          // console.log("Computer Win!");
          computerWin = true;
        }
      }
      // row two user
      else if (part === "Row Two" && array[index] === "User") {
        rowTwoScoreUser++;
        if (rowTwoScoreUser === 3) {
          // console.log("You Win!");
          userWin = true;
        }
      }
      // row two ai
      else if (part === "Row Two" && array[index] === "AI") {
        rowTwoScoreAi++;
        if (rowTwoScoreAi === 3) {
          // console.log("Computer Win!");
          computerWin = true;
        }
      }
      // row three user
      else if (part === "Row Three" && array[index] === "User") {
        rowThreeScoreUser++;
        if (rowThreeScoreUser === 3) {
          // console.log("You Win!");
          userWin = true;
        }
      }
      // row three ai
      else if (part === "Row Three" && array[index] === "AI") {
        rowThreeScoreAi++;
        if (rowThreeScoreAi === 3) {
          // console.log("Computer Win!");
          computerWin = true;
        }
      }
      // column one user
      else if (part === "Column One" && array[index] === "User") {
        columnOneScoreUser++;
        if (columnOneScoreUser === 3) {
          // console.log("You Win!");
          userWin = true;
        }
      }
      // column one computer
      else if (part === "Column One" && array[index] === "AI") {
        columnOneScoreAi++;
        if (columnOneScoreAi === 3) {
          // console.log("Computer Win!");
          computerWin = true;
        }
      }
      // column two user
      else if (part === "Column Two" && array[index] === "User") {
        columnTwoScoreUser++;
        if (columnTwoScoreUser === 3) {
          // console.log("You Win!");
          userWin = true;
        }
      }
      // column two ai
      else if (part === "Column Two" && array[index] === "AI") {
        columnTwoScoreAi++;
        if (columnTwoScoreAi === 3) {
          // console.log("Computer Win!");
          computerWin = true;
        }
      }
      // column three user
      else if (part === "Column Three" && array[index] === "User") {
        columnThreeScoreUser++;
        if (columnThreeScoreUser === 3) {
          // console.log("You Win!");
          userWin = true;
        }
      }
      // column three ai
      else if (part === "Column Three" && array[index] === "AI") {
        columnThreeScoreAi++;
        if (columnThreeScoreAi === 3) {
          // console.log("Computer Win!");
          computerWin = true;
        }
      }
      // diagonal right user
      else if (part === "Diagonal Right" && array[index] === "User") {
        diagonalRightUserScore++;
        if (diagonalRightUserScore === 3) {
          // console.log("You Win!");
          userWin = true;
        }
      }
      // diagonal right ai
      else if (part === "Diagonal Right" && array[index] === "AI") {
        diagonalRightAiScore++;
        if (diagonalRightAiScore === 3) {
          // console.log("Computer Win!");
          computerWin = true;
        }
      }
      // diagonal left user
      else if (part === "Diagonal Left" && array[index] === "User") {
        diagonalLeftUserScore++;
        if (diagonalLeftUserScore === 3) {
          // console.log("You Win!");
          userWin = true;
        }
      }
      // diagonal left ai
      else if (part === "Diagonal Left" && array[index] === "AI") {
        diagonalLeftAiScore++;
        if (diagonalLeftAiScore === 3) {
          // console.log("Computer Win!");
          computerWin = true;
        }
      }
    }
  }
}

function refresh() {
  location.reload();
}

function state() {
  if (userWin === true && computerWin === false) {
    console.log("i win");
    boxCon.innerHTML += `<div class='message-box'> You Win!<button onclick='refresh()'>Reset</button> </div>`;
  } else if (computerWin === true && userWin === false) {
    console.log("i lose");
    boxCon.innerHTML += `<div class='message-box'> Computer Win!<button onclick='refresh()'>Reset</button> </div>`;
  } else if (
    userWin === false &&
    computerWin == false &&
    updateList.length === 0
  ) {
    console.log("draw");
    boxCon.innerHTML += `<div class='message-box'> DRAW!<button onclick='refresh()'>Reset</button> </div>`;
  }
}
