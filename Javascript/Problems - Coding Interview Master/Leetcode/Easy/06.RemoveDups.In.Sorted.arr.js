/**
 * @description https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * 
 *  SOLUTION: https://www.youtube.com/watch?v=DEJAZBq0FDA
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    
    if(nums.length <= 1) return nums;
    
    let left = 1;
  
    for (let right = 1; right< nums.length; right++){
        if( nums[right] !== nums[right-1]){
            nums[left] = nums[right];
            left++;
        }
    }
    
    return left;
};


let nums = [1, 1, 2]; // [1, 2, 3]

console.log(removeDuplicates(nums), nums);