/**
 * @description 
 * Minimum time taken by each empty cell to reach the nearest gate;
 *  - Fill each empty cell with the minimum time it takes to reach the nearest gate;
 *  - If from an empty cell the gate is not reacheable then leave as infinity; 
 */

 const INF = 2147483647;

 const testMatrix = [
   [INF, -1, 0, INF],
   [INF, INF, INF, 0],
   [INF, -1, INF, -1],
   [0, -1, INF, INF]
 ];
 
 const WALL = -1;
 const GATE = 0;
 const EMPTY = 2147483647;
 const directions = [
   [-1, 0], //up
   [0, 1], //right
   [1, 0], //down
   [0, -1] //left
 ]
 

 /**
  * INF - count will always be smaller
  * -1 (wall) - count will be always greater
  * 0 (gate) - count will always be greater; except first time count = 0  which is equal to gate
  */
 const dfs = (grid, row, col, count) => {
   if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || count > grid[row][col]) return
   grid[row][col] = count // initially count = 0; so replacing gate = 0 does not change anything
   for(let i = 0; i < directions.length; i++) {
     const currentDir = directions[i];
     dfs(grid, row + currentDir[0], col + currentDir[1], count + 1);
   }
 }
 
 
 /**
  * 
  * @description DFS APproach
  */
 const wallsAndGates = (rooms) => {
   for (let row = 0; row < rooms.length; row++) {
     for (let col = 0; col < rooms[0].length; col++) {
       if (rooms[row][col] === GATE) dfs(rooms, row, col, 0)
     }
   }
 };
 
 wallsAndGates(testMatrix)
 
 console.log(testMatrix);