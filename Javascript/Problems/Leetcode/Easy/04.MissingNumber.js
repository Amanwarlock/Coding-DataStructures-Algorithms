/**
 * @description https://leetcode.com/problems/missing-number/
 * 
 * Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
 * 
 * SOLUTION https://www.youtube.com/watch?v=WnPLSRLSANE
 * 
 *  @summary
 *       If n = 3
 *      > sum([0,1,2,3]) - sum([3, 0, 1])   ans == 2
 */





/**
 * @param {number[]} nums
 * @return {number}
 * @summary T: O(n) S: O(1)
 */
 var missingNumber = function(nums) {
    
    let res = nums.length; // This is because, we want to add 0 - N values including N
    // For ex N = 3, but for loop goes from 0,1,2 only. So assign res 3 i,e len of array which was misssing;
    // Remember array size is also N
    
    for(let i = 0; i < nums.length; i++){
        res += i - nums[i];
    }
    
    return res;
};


