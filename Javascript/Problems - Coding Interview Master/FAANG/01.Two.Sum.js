const numsArray = [1,3,7,9,2];
const targetToFind = 11;

const findTwoSum = function(nums, target) {
  const numsMap = {};
  
  for(let p = 0; p < nums.length; p++) {
    const currentMapVal = numsMap[nums[p]];

    if(currentMapVal >= 0) {
      return [currentMapVal, p];
    } else {
      const numberToFind = target - nums[p];
      numsMap[numberToFind] = p;
    }
  }

  return null;
}

console.log(findTwoSum(numsArray, targetToFind));

/**
 *  NOTE:
 *    > The problem asks to return the indexes as the solution
 * 
 *    > If the problem asked the two numbers that add up to a sum, we can use another alternative. i.,e sort the array and use the two pointer technique
 *        - sort array, then p1 = 0, p2 = nums.length-1; if p1+p2 == target return, if p1+p2 < target p1++ likewise
 * 
 *    > But this approach will return the numbers that add up to a target. We cannot use to return indices, as sorting will change the indices
 * 
 */


/**
 * EDGE CASES:
 * 
 *  > nums = [1, 3, 7, 9, 2]  target = 11    ans-> [3, 4] (indexes)
 * 
 *  > nums = [1, 3, 7, 9, 2]  target = 25     ans -> null (no solution exists)
 * 
 *  > nums = []     target = 1          ans -> null
 * 
 *  > nums = [5]     target = 5         ans -> null (because we need atleast two numbers --> sum of two numbers)
 * 
 *  > nums = [1, 6]   target = 7        ans -> [0, 1]
 */