/**
 * @description https://leetcode.com/problems/unique-paths/
 * Solution:  https://www.youtube.com/watch?v=rBAxUTqvlQA
 *  
 *  for a 3x3 grid there are 6 unique paths
 * 
 */


/**
 *  @summary T: O(mn) because of DP --.> otherwuse 2^mn
 *  Robot can move right or down
 *  If we are goiing from destination to robot; then top and left;
 */
function uniquePaths(m,n){  

    const dp = new Array(m).fill(0).map(()=> new Array(n).fill(0));

    for(let r = 0; r < m; r++){
        for(let c = 0; c < n; c++){
            if(r === 0 || c === 0){
                dp[r][c] = 1;
            }else{
                dp[r][c] = dp[r-1][c] + dp[r][c-1]; // top + left
            }
        }
    }

    return dp[m-1][n-1];
}


console.log(uniquePaths(3,3));