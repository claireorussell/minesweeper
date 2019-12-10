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
    document.addEventListener('click', checkForWin())
    document.addEventListener('contextmenu', checkForWin())
  }  
  lib.initBoard() 
}
/*
function startGame () {
  for (var i = 0; i < board.cells.length; i++) { 
    var cell = board.cells[i]
    var countOf = countSurroundingMines(cell)  
    cell.surroundingMines = countOf   
    document.addEventListener('click', checkForWin( {
      isMarked = true
    }))
    document.addEventListener('contextmenu', checkForWin( {
      isMarked = true
    }))
  }  
  lib.initBoard() 
}
*/

// document.addEventListener('click', checkForWin(); 
// document.addEventListener('contextmenu', checkForWin(); 




// add event for .isMarked?? when a document cell is clicked
// var marked = board.cells.isMarked.addEventListener('click', () => {
  //board.cells.isMarked = true

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  for (var i = 0; i < board.cells.length; i++) {
    cell = board.cells[i]
    if (cell.isMine === true && cell.isMarked === true || cell.isMine === false && cell.hidden === false) {
        lib.displayMessage('You win!')
    }
    else {
      return
    }
  }
};





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

console.log(board.cells)