/**
 * @description https://leetcode.com/problems/sudoku-solver/
 * 
 * Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

Each of the digits 1-9 must occur exactly once in each row.
Each of the digits 1-9 must occur exactly once in each column.
Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
The '.' character indicates empty cells.
 * 
 */


const getBoxId = function (row, col) {
    const rowVal = Math.floor(row / 3) * 3; // row ofset -- 
    const colVal = Math.floor(col / 3); // col = 0->0/3=0, col=1-> 1/3 ~ 1, col = 2 -> 2/3 ~ 1 ..... 
  
    return rowVal + colVal;
  };
  
  const isValid = function (box, row, col, num) {
    if (box[num] || row[num] || col[num]) {
      return false;
    } else {
      return true;
    }
  };
  

  /**
   * T: O(81) -- 9x9  -- O(9!)^9
   * S: O(1)
   */
   const solveBacktrack = function (board, boxes, rows, cols, r, c) {
    if (r === board.length || c === board[0].length) {
      return true;
    } else {
      if (board[r][c] === '.') {
        for (let num = 1; num <= 9; num++) {
          const numVal = num.toString();
          board[r][c] = numVal;
  
          const boxId = getBoxId(r, c);
          const box = boxes[boxId];
          const row = rows[r];
          const col = cols[c];
  
          if (isValid(box, row, col, numVal)) {
            box[numVal] = true;
            row[numVal] = true;
            col[numVal] = true;
  
            if (c === board[0].length - 1) {
              if (solveBacktrack(board, boxes, rows, cols, r + 1, 0)) {
                return true;
              }
            } else {
              if (solveBacktrack(board, boxes, rows, cols, r, c + 1)) {
                return true;
              }
            }
  
            delete box[numVal]; //  backtracking logic
            delete row[numVal];
            delete col[numVal];
          }
  
          board[r][c] = '.';
        }
      } else {
        if (c === board[0].length - 1) {
          if (solveBacktrack(board, boxes, rows, cols, r + 1, 0)) {
            return true;
          }
        } else {
          if (solveBacktrack(board, boxes, rows, cols, r, c + 1)) {
            return true;
          }
        }
      }
    }
  
    return false;
  };
  
  var solveSudoku = function(board) {
    const n = board.length;
    const boxes = new Array(n), 
          rows = new Array(n), 
          cols = new Array(n);
    
    for(let i = 0; i < n; i++) {
      boxes[i] = {};
      rows[i] = {};
      cols[i] = {};
    }
    // add values already on board to respective seen hash maps
    for(let r = 0; r < n; r++) {
      for(let c = 0; c < n; c++) {
        if(board[r][c] !== '.') {
          const boxId = getBoxId(r, c);
          const val = board[r][c];
          boxes[boxId][val] = true;
          rows[r][val] = true;
          cols[c][val] = true;
        }
      }
    }
    
    solveBacktrack(board, boxes, rows, cols, 0, 0);
  };
  
  const board = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ];
  
  solveSudoku(board)
  console.log(board);