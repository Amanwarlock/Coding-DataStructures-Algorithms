/**
 * @description  https://leetcode.com/problems/rotate-image/
 * Solution: https://www.youtube.com/watch?v=IdZlsG6P17w
 */


const matrix = [
                    [5,1,9,11],
                    [2,4,8,10],
                    [13,3,6,7],
                    [15,14,12,16]
                ];

 const row_col_interchange = [
            [5, 2, 13, 15],
            [ 1, 4, 3, 14 ],
            [ 9, 8, 6, 12 ],
            [ 11, 10, 7, 16 ]
 ]
                
const output = [
                    [15,13,2,5],
                    [14,3,4,1],
                    [12,6,8,9],
                    [16,7,10,11]
                ];


                /**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    
    let N = matrix.length;
    
    for(let row = 0; row < N; row++){
        for(let col = row; col < N; col++){ // col should follow row
            let temp = matrix[row][col];
            matrix[row][col] = matrix[col][row];
            matrix[col][row] = temp;
        }
    }
    
    console.log("Matrix ; ", matrix);
    
    for(let row = 0 ; row < N; row++){
        for(let col = 0; col < Math.floor(N/2); col++){
            let temp = matrix[row][col];
            matrix[row][col] = matrix[row][N-1-col];
            matrix[row][N-1-col] = temp;
        }
    }
    
};



rotate(matrix);