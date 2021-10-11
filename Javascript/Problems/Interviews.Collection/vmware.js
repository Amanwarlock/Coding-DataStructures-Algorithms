// Given a 2D grid with dimensions mxn, the goal is to find the sum of sums of each unique path.
// For an input of: 
// [[1, 2, 3], 
// [4, 5, 6],
// [7, 8, 9]] 
// 1 + 2 + 3 + 6 + 9
// 1 + 2 + 5 + 6 + 9
// 1 + 2 + 5 + 8 + 9
// 1 + 4 + 7 + 8 + 9
// 1 + 4 + 5 + 6 + 9
// 1 + 4 + 5 + 8 + 9
// The output would be 150.
// findSumOfSums([[1, 2, 3], 
// [4, 5, 6],
// [7, 8, 9]]);

const matrix = [[1, 2, 3], 
 [4, 5, 6],
 [7, 8, 9]] 


const directions = [
    [-1,0], // up
    [0,1], // right
    [1, 0], // down
    [0,-1] // left
];


function findSumOfSums(grid){
    let sum = 0;
    // for(let row = 0; row< grid.length; row++){
    //     for(let col = 0; col < grid[0].length; col++){
    //          dfs(grid, row, col, sum);
    //     }
    // }
    dfs(grid, 0, 0, sum);
    return sum;
}


function dfs(grid, row, col, sum){
    if(row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) return;
    
    if(grid[row][col] !== Number.POSITIVE_INFINITY){
        sum += grid[row][col];
        console.log("Current dir : ", `row=${row} col=${col} sum - ${sum} val - ${grid[row][col]}`);
        //console.log("Current dir : ", row, col, grid[row][col]);
        grid[row][col] = Number.POSITIVE_INFINITY;
        

        for(let i = 0; i< directions.length; i++){
            let currentDir = directions[i];
            let nextRow = row + currentDir[0];
            let nextCol = col + currentDir[1];
            //console.log("Next dir : ", `row=${nextRow} col=${nextCol}`);
            dfs(grid, nextRow, nextCol, sum);
        }
    }
   
   
}

function bfs(grid, sum = 0){
    
    let queue = [[0,0]]; // linkedlist 
    let seen = new Array(grid.length).fill(0).map(() => new Array(grid[0].length)).fill(false);
    
    while(queue.length){
        let current = queue.shift();
        let [row, col] = current;
        seen[row][col] = true;
        sum += grid[current[0]][current[1]];
        console.log("Cuurent queue ", current, sum);
       // seen = 
        //grid[current[0]][current[1]] = Number.POSITIVE_INFINITY;
        
        for(let i = 0; i< directions.length; i++){
            let currentDir = directions[i];
            let nextRow = current[0] + currentDir[0];
            let nextCol = current[1] + currentDir[1];
            
            if(nextRow < 0 || nextCol < 0 || nextRow >= grid.length || nextCol >= grid[0].length || seen[nextRow][nextCol]) continue;
            
            if(grid[nextRow][nextCol] !== Number.POSITIVE_INFINITY){
                queue.push([nextRow, nextCol]);
            }
        }
    }
    
    return sum;
}

console.log("Result : ", findSumOfSums(matrix));

//console.log("BFS : ", bfs(matrix, 0));