/**
 *  @description  https://leetcode.com/problems/combination-sum/
 * 
 *  Solution: https://www.youtube.com/watch?v=GBKI9VSKdGg
 * 
 * 
 *  [2, 3, 6, 7]  target = 7
 * 
 *                                                      fn
 *                                      
 *                              [2]                                                     []
 *          [2,2]                                   [2]                  [3]                            []
 * 
 *                                          [2,3]          [2]
 *  [2,2,2]         [2,2, 3]            [2,3, 3]       [2,6]   [2]
 *      8 --> overflow- 
 *      return
 * 
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
    
    let result = [];
    
    dfs(0, [], 0, result, candidates, target);
    
    return result;
};


function dfs(i, curr, total, result, candidates, target){
        
    if(total === target){
        result.push([...curr]);
        return;
    }
    
    if(i >= candidates.length || total > target){
       return;
     }
    
    curr.push(candidates[i]);
    dfs(i, curr, total + candidates[i], result, candidates, target);
    
    curr.pop();
    dfs(i+1, curr, total, result, candidates, target);
}