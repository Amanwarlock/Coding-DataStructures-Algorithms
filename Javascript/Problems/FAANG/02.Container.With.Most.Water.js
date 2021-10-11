/**
 * @description
 *  https://leetcode.com/problems/container-with-most-water/
 * 
 *  Q:  Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn 
 *      such that the two endpoints of the line i is at (i, ai) and (i, 0). 
 *      Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.
 * 
 *      [1, 8, 6, 2, 9, 4]
 * 
 *                                    (9)
 *      9           (8)               |
 *      8           |                 |
 *      7           |     (6)         |
 *      6           |     |           |
 *      5           |     |           |     (4)
 *      4           |     |           |     |
 *      3           |     |    (2)    |     |
 *      2     (1)   |     |     |     |     |
 *      1     |     |     |     |     |     |
 *      0---------------------------------------------> x-axis
 * 
 *      Area = L x W   L - y-axis, w - x-axis
 * 
 *    Constraints:
 *      > Lines inside the container does not effect the area, only the outer lines effect
 *      > Container capacity is decided by the minimum height of the left or the right boundary
 *      > maximum water, we need to maximise the area, which is dependent of L and W
 *      > Area can be maximized by maximising width and length
 */

const heightsArray = [4,8,1,2,3,9];

const getMaxWaterContainer = function(heights) {
  let p1 = 0, p2 = heights.length - 1, maxArea = 0;

  while(p1 < p2) {
    const height = Math.min(heights[p1], heights[p2]);
    const width = p2 - p1;
    const area = height * width;
    maxArea = Math.max(maxArea, area);
    
    if(heights[p1] <= heights[p2]) {
      p1++;
    } else {
      p2--;
    }
  }

  return maxArea;
}

console.log(getMaxWaterContainer(heightsArray));