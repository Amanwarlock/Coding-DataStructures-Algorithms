/**
 * @description
 *      https://www.youtube.com/watch?v=REOH22Xwdkk
 *                                                                        [1,2,3]
 *                                          fn(1)                                                           fn([])       
 *                               fn([1,2])          fn([1])                                     fn([2])             fn([])
 *              
 *                    fn([1,2,3])      fn([1,2])        fn([1,3]) fn([1])               fn([2,3])  fn([2])      fn([3])     fn([])
 * 
 */

/**
 * T: O(n * 2^n)
 */
function powerSets(nums){
    let res = [];
    let subset = [];

    dfs(nums, 0, res, subset);

    return res;
}


function dfs(nums, i, res, subset){
    if(i >= nums.length){
        res.push([...subset]);
        return;
    }

    subset.push(nums[i]);
    dfs(nums, i+1, res, subset);

    subset.pop();
    dfs(nums, i+1, res, subset);
}



console.log(powerSets([1,2,3]));

