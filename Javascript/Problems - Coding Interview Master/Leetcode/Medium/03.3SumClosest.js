/**
 * @description https://leetcode.com/problems/3sum-closest/
 * SOLUTION: https://www.youtube.com/watch?v=qBr2hq4daWE
 */



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
    
    let result = nums[0] + nums[1] + nums[nums.length-1]; // sum of three arbitrary numbers
    
    nums.sort((a,b) => a-b);
    
    for(let i = 0; i < nums.length-2; i++){
        let p1 = i+1;
        let p2 = nums.length-1;
        
        while(p1 < p2){
               
            let currentSum = nums[i] + nums[p1] + nums[p2];
        
            if(Math.abs(currentSum - target) < Math.abs(result-target)){
                result = currentSum  
             }
            
            if(currentSum > target){
                p2 --;
            }else{
                p1++;
            }
        }
       
    }
    
    return result;
};