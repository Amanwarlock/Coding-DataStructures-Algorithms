/**
 * @description https://leetcode.com/problems/rotting-oranges/
 * 
 * You are given an m x n grid where each cell can have one of three values:

    0 representing an empty cell,
    1 representing a fresh orange, or
    2 representing a rotten orange.

    Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

    Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.
 */


const testMatrix = [
    [2, 1, 1, 0, 0],
    [1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1],
    [0, 1, 0, 0, 1]
  ];
  
  const directions = [
    [-1, 0], //up
    [0, 1], //right
    [1, 0], //down
    [0, -1] //left
  ]
  
  const ROTTEN = 2;
  const FRESH = 1;
  const EMPTY = 0;
  
  
  /**
   * @description BFS APPROACH
   */
  const orangesRotting = function(matrix) {
    if(matrix.length === 0) return 0;
  
    const queue = [];  
    let freshOranges = 0;
    
    for(let row = 0; row < matrix.length; row++) {
      for(let col = 0; col < matrix[0].length; col++) {
        if(matrix[row][col] === ROTTEN) {
          queue.push([row, col])
        }
        
        if(matrix[row][col] === FRESH) {
          freshOranges++;
        }
      }
    }
      
    let minutes = 0;
    let currentQueueSize = queue.length;
    
    while(queue.length > 0) {
      /**
       * This condition (currentQueueSize === 0) has to be on top for this problem
       * First iteration: 
       *        > queue wont be empty and rest of the code pops from queue and also pushes neighbors which are fresh; (firstly added oranges to queue are already rotten)
       *        > If nothing is added to queue if there are no fresh oranges to rot . Means no time consumed to rot. So queue is empty as nothing is added.
       *        > in short - all oranges rooten, no fresh oranges left to rot.
       *        > In that case the outer while loop fails and minute is not incremented. As nothing is there to rot.
       *        > In case if queue in first itr is added, indicating there are oranges to rot. Increment minture count
       *              
       */
      if(currentQueueSize === 0) {
        currentQueueSize = queue.length;
        minutes++;
      }
  
      const currentOrange = queue.shift();
      currentQueueSize--;
      const row = currentOrange[0];
      const col = currentOrange[1];
      
      for(let i = 0; i < directions.length; i++) {
        const currentDir = directions[i];
        const nextRow = row + currentDir[0];
        const nextCol = col + currentDir[1];
        
        if(nextRow < 0 || nextRow >= matrix.length || nextCol < 0 || nextCol >= matrix[0].length) {
          continue;
        }
  
        if (matrix[nextRow][nextCol] === FRESH) {
          matrix[nextRow][nextCol] = 2;
          freshOranges--;
          queue.push([nextRow, nextCol]);
        }
      }
      
    }
    
    if(freshOranges !== 0) {
      return -1;
    }
    
    return minutes;
  };
  
  console.log(orangesRotting(testMatrix))


