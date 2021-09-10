/**
 * @description https://leetcode.com/problems/knight-probability-in-chessboard/
 * 
 * On an n x n chessboard, a knight starts at the cell (row, column) and attempts to make exactly k moves. The rows and columns are 0-indexed, 
 * so the top-left cell is (0, 0), and the bottom-right cell is (n - 1, n - 1).

A chess knight has eight possible moves it can make, as illustrated below. Each move is two cells in a cardinal direction, then one cell in an orthogonal direction.
 * 
 */


/*
reccurence relation:
Directions = [
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2]
];

0 >= r < N, 0 >= c < N, k === 0
probability(r, c, k) = 1

0 >= r < N, 0 >= c < N, k > 1
probability(r, c, k) = Σ(x, y)∈Directions probability(r + x, c + y, k - 1) / 8

r < 0 || r > N, c < 0 || c > N
probability(r, c, k) = 0

 */

const DIRECTIONS = [
    [-2, -1], // L shape directions
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2]
  ];
  
  /**
   * @description TOP DOWN APPROACH
   */
  const recurse = (N, K, r, c, dp) => {
    if (r < 0 || c < 0 || r >= N || c >= N) {
      return 0;
    }
  
    if (K === 0) { // if no steps are to be taken the probability of it present on the board is 100% i,e. 1;
      return 1;
    }
  
    if (dp[K][r][c] !== undefined) return dp[K][r][c];
  
    let res = 0;
    for (let dir of DIRECTIONS) {
      res += recurse(N, K - 1, r + dir[0], c + dir[1], dp) / 8;
    }
  
    dp[K][r][c] = res;
  
    return dp[K][r][c];
  };
  
  /**
   * @description TOP DOWN APPROACH
   *    T: O(k*N^2)  k - no of steps
   *    S: O(k*N^2)
   */
  var knightProbability = function(N, K, r, c) {
    const dp = new Array(K + 1).fill(0).map(() => new Array(N).fill(0).map(() => new Array(N).fill(undefined))); // making NxN matrix for k = 0,1,2..k
  
    return recurse(N, K, r, c, dp);
  };
  
  console.log(knightProbability(6, 2, 2, 2)) // N - matrix dim, k - no of steps, r - row start, c - col  start


  //-------------------------------------------------------------------------------

  /**
   * @description BOTTOM UP APPROACH
   *    T: O(k*N^2)  k - no of steps
   *    S: O(N^2)
   */
  var knightProbability2 = function(N, K, r, c) {
    let prevDp = new Array(N).fill(0).map(() => new Array(N).fill(0));
    let nextDp = new Array(N).fill(0).map(() => new Array(N).fill(0));
  
    prevDp[r][c] = 1;
    for (let step = 1; step <= K; step++) {
      for (let row = 0; row < N; row++) {
        for (let col = 0; col < N; col++) {
          for (let i = 0; i < DIRECTIONS.length; i++) {
            const currentDirection = DIRECTIONS[i];
            const prevRow = row + currentDirection[0];
            const prevCol = col + currentDirection[1];
            if (prevRow >= 0 && prevRow < N && prevCol >= 0 && prevCol < N) {
              nextDp[row][col] =
                nextDp[row][col] + prevDp[prevRow][prevCol] / 8;
            }
          }
        }
      }
      prevDp = nextDp;
      nextDp = new Array(N).fill(0).map(() => new Array(N).fill(0));
    }
  
    let res = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        res += prevDp[i][j];
      }
    }
  
    return res;
  };
  
  console.log(knightProbability2(6, 2, 2, 2))