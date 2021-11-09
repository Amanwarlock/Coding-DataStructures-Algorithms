// Given a 2D grid with dimensions mxn, the goal is to find the sum of sums of each unique path.
// For an input of: 
// [[1, 2, 3], 
// [4, 5, 6],
// [7, 8, 9]] 
// 1 + 2 + 3 + 6 + 9 = 21
// 1 + 2 + 5 + 6 + 9 = 23
// 1 + 2 + 5 + 8 + 9 = 25
// 1 + 4 + 7 + 8 + 9 = 29
// 1 + 4 + 5 + 6 + 9 = 25
// 1 + 4 + 5 + 8 + 9 = 27
//  -----------------> 150
// The output would be 150.
// findSumOfSums([[1, 2, 3], 
// [4, 5, 6],
// [7, 8, 9]]);

const matrix = [[1, 2, 3], 
                [4, 5, 6],
                [7, 8, 9]] 


const directions = [
    [0,1], // right
    [1, 0], // down
];


function findSumOfSums(grid){
    return dfs(grid, 0, 0, 0);
}


function dfs(grid, row, col, sum){
    if(row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) return sum;

    let num = grid[row][col];
    sum += grid[row][col];

    console.log("Sum and element : ", sum, grid[row][col]);
    
    for(let i = 0; i< directions.length; i++){
        let currentDir = directions[i];
        let nextRow = row + currentDir[0];
        let nextCol = col + currentDir[1];
        sum = dfs(grid, nextRow, nextCol, sum);
    }

    return sum;
}


console.log("Result : ", findSumOfSums(matrix));
