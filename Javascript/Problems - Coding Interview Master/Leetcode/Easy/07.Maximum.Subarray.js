/**
 * @description https://leetcode.com/problems/maximum-subarray/
 * SOLUTION: https://www.youtube.com/watch?v=2MmGzdiKR9Y
 * 
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

    A subarray is a contiguous part of an array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 * T: O(n)
 */
 var maxSubArray = function(nums) {
    
    var maxSoFar = nums[0]; // global max
    var maxEndingHere = nums[0]; // local max
   
    for (var i = 1; i < nums.length; i++) {
      
      maxEndingHere = Math.max(maxEndingHere + nums[i], nums[i]); // checks max between prev total + current el and itself
     
      maxSoFar = Math.max(maxSoFar, maxEndingHere);  // checks max with prev total without considering impact of curr elemetn and with considereing impact from above compare
    }
  
    return maxSoFar;
  };
  

console.log("Result  : ", maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))