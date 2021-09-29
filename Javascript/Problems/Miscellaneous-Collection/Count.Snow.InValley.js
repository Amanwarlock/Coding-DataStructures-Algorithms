/* Problem Name is &&& Snowpack &&& PLEASE DO NOT REMOVE THIS LINE. */

/*
** Instructions to candidate.
**  1) Given an array of non-negative integers representing the elevations
**     from the vertical cross section of a range of hills, determine how
**     many units of snow could be captured between the hills. 
**
**     See the example array and elevation map below.
**                                 ___
**             ___                |   |        ___
**            |   |        ___    |   |___    |   |
**         ___|   |    ___|   |   |   |   |   |   |
**     ___|___|___|___|___|___|___|___|___|___|___|___
**     {0,  1,  3,  0,  1,  2,  0,  4,  2,  0,  3,  0}
**                                 ___
**             ___                |   |        ___
**            |   | *   *  _*_  * |   |_*_  * |   |
**         ___|   | *  _*_|   | * |   |   | * |   |
**     ___|___|___|_*_|___|___|_*_|___|___|_*_|___|___
**     {0,  1,  3,  0,  1,  2,  0,  4,  2,  0,  3,  0}
**
**     Solution: In this example 13 units of snow (*) could be captured.
**  
**  2) Consider adding some additional tests.
**  3) Implement computeSnowpack() correctly.
*/

/**
* Find the amount that will be captured
* @returns {int}
**/
function computeSnowpack(heights = []) {
    console.log("Running : ");
  
    if(heights.length < 1) return -1;
  
    let totalSnow = 0;
    
    for(let p = 0; p < heights.length; p ++){
        let left = p;
        let right = p;
        let maxLeft = 0;
        let maxRight = 0;
      
        while(left >= 0){ // because non-negative numbers
            maxLeft = Math.max(maxLeft, heights[left]);
            left --;
        }
      
        while(right < heights.length){
              maxRight = Math.max(maxRight, heights[right]);
              right ++;
          }
      
       // console.log("Ma");
      
        let currSnow = Math.min(maxLeft, maxRight) - heights[p];
      
        if(currSnow >= 0){
          totalSnow += currSnow;
        }
      
    }
    
    return totalSnow;
};

function doTestsPass() {
  const  testSet = [
    [0, 1, 3, 0, 1, 2, 0, 4, 2, 0, 3, 0],
    [1,3,2,4,1,3,1,4,5,2,2,1,4,2,2],
  ];
  const expectedValues = [
    13,
    15,
  ];
  let success = true;
  for (let i=0; i < testSet.length; i++) {
    const testCase = testSet[i];
    const expected = expectedValues[i];
    const actual = computeSnowpack(testCase);
    if (expected !== actual) {
      console.error(`Expected ${expected}. Got ${actual}`);
      success = false;
    }
  }

  if (!success) {
    throw new Error("Tests failed");
  } else {
    console.log("Tests passed")
  }
}

doTestsPass();