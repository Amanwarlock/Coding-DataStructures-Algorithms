/**
 *@description https://leetcode.com/problems/3sum/ 
 *  SOLUTION: https://www.youtube.com/watch?v=qJSPYnS35SE
 */


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    
    let result = [];
    
    nums.sort((x,y) => x-y); // javascript supports lexicographical sort, for numbers you must do this way
    
    for(i = 0; i< nums.length - 2; i++){
        if(i == 0 || (i > 0 && nums[i] !== nums[i-1]) ){
            
            let left = i+1;
            let right = nums.length-1;
            
            let sum = 0 - nums[i];
            
            while(left < right){
                
                if(nums[left] + nums[right] === sum){
                    result.push([nums[i], nums[left], nums[right]]);
                    
                    while(left < right && nums[left] === nums[left+1]){
                          left++;
                    }
                    
                    while(left < right && nums[right] === nums[right-1]){
                          right --;
                    }
                    
                    left ++;
                    right--;
                    
                 }else if(nums[left] + nums[right] > sum){
                     right --;
                 }else{
                     left ++;
                 }
            }
        }
    }
    
    return result;
};