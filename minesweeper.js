document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
      cells: [
        { 
          row: 0, 
          col: 0, 
          isMine: false,
          hidden: true
        }, 
        { 
          row: 0,
          col: 1, 
          isMine: false,
          hidden: true
        }, 
        {
          row: 0,
          col: 2, 
          isMine: true, 
          hidden: true
        },
        { 
          row: 1,
          col: 0,
          isMine: true, 
          hidden: true
        },
        { 
          row: 1,
          col: 1,
          isMine: false, 
          hidden: true
        },
        {
          row: 1,
          col: 2,
          isMine: false, 
          hidden: true
        },
        {
          row: 2,
          col: 0,
          isMine: false, 
          hidden: true
        },
        { 
          row: 2,
          col: 1,
          isMine: true, 
          hidden: true
        },
        {
          row: 2,
          col: 2,
          isMine: false, 
          hidden: true
        },
      ]
  };



  // create a for loop to loop through each cell object 
  // each loop should call on function countSurroundingMines() 
    // assign result to new propety in cells[i] called surroundingMines

function startGame () {
  for (var i = 0; i < board.cells.length; i++) { 
    var cell = board.cells[i]
    var countOf = countSurroundingMines(cell)  
    cell.surroundingMines = countOf   
    document.addEventListener('click', checkForWin()); 
    document.addEventListener('contextmenu', checkForWin());
  }  
  lib.initBoard() 
}

// document.addEventListener('click', checkForWin(); 
// document.addEventListener('contextmenu', checkForWin(); - Do these go in for loop?






// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
var marked = board.cells.isMarked
var mine = board.cells.isMine

  for (var i = 0; i < board.cells.length; i++) {
    if (mine[i] === true && marked[i] === false || mine[i] === false && marked[i] === false) {
      return false;
    } else {
      return lib.displayMessage('You win!')
    }
  }
};

  // You can use this function call to declare a winner
  //   return lib.displayMessage('You win!')


// both .isMine and .isMarked are true . 
// If any mine isn't marked, you can return to exit out of the function.
// If every mine is marked, but there are still cells with the hidden property set to true, the player hasn't won yet and you can return out of the function.

// If both these criteria pass, the player has won!
//.isMarked === true && .isMine === true



function countSurroundingMines (cell) {
  var bombCounting = 0
  var surrounding = lib.getSurroundingCells(cell.row, cell.col) 
   for (var i = 0; i < surrounding.length; i++) {
     var surroundingCell = surrounding[i]
     if (surroundingCell.isMine === true) {
       bombCounting += 1 
     } 
   } 
   return bombCounting
};

// trying to return num of surrounding bombs to cell object 
// just writing function of how to count the surrounding cells for ay given cell

// loop through surrounding array to see if isMine === true 
// return the num of bombs surrounding to funtion 
