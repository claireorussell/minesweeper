document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!

// automatically generate board 
  // size of board 3 by 3
  // define function with the gameBoard as the parameters
  // use local variables to create object, the 'cells' 
  // loop through gameboard and set mines at math.random to 25% 
  // board.cells[arr] = 


function generateBoard(table) {
  var board = new Object();     // define new board object 
  board.cells = [];     //cells is the property of board and is an empty array
  var cell = 0;     // cell is the var which will be replaced with properties
  // loop through table length to give value to row and column properties
    for (var i = 0; i < table; i++) {     // assign row index
      for (var j = 0; j < table; j++) {   // assign to col index 
        board.cells[cell] = {row: i, col: j, isMine: true, hidden: true}; // create object with properties and values
        cell++;    // each loop will create a new cell board.cells.cell[0], board.cells.cell[1]
      }
    }
  return board     //return board object to table value
};
// define table/ board size using generator function
board = generateBoard(4);




  // create a for loop to loop through each cell object 
  // each loop should call on function countSurroundingMines() 
    // assign result to new propety in cells[i] called surroundingMines

function startGame () {
  for (var i = 0; i < board.cells.length; i++) { 
    var cell = board.cells[i]
    var countOf = countSurroundingMines(cell)  
    cell.surroundingMines = countOf   
  }  
  document.addEventListener('click', checkForWin)
  document.addEventListener('contextmenu', checkForWin)
  lib.initBoard() 
};



// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?

function checkForWin () {
  for (var i = 0; i < board.cells.length; i++) {
    cell = board.cells[i]
    if (cell.isMine && !cell.isMarked || cell.hidden && !cell.isMine) {
      return
    }
  }
      lib.displayMessage('You win!')
};

// if any win condition isn't meet, return out of function 
// else diplay you win!


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

// reset board to restart game 


// reset game 
