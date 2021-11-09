/**
 * @description https://www.youtube.com/watch?v=bNvIQI2wAjk
 * SOLUTION: https://www.youtube.com/watch?v=bNvIQI2wAjk
 */


/**
 * @summary {Method-1}
 *  >   T: O(n)
 *  >   S: O(n)
 */

function arrayProd1(nums){
    let result = [];
    let prefix = []; // for every el, at el position store product of its previous ele,
    let postfix = []; // for every el, store prod of nums after it;

    // Pass-1 for prefix
    for(let i = 0; i < nums.length; i++){

        if(i > 0){
            prefix[i] = nums[i] * prefix[i-1];
        }else{
            prefix[i] = nums[i] * 1; // Initial prefix with i = 0 is 1 as there is no  prefix for index 0;
        }
    }

    for(let i = nums.length - 1; i >= 0 ; i--){
            if(i < nums.length-1){
                postfix[i] = nums[i] * postfix[i+1];
            }else{
                postfix[i] = nums[i] * 1;
            }
    }

    for(let i = 0; i< nums.length; i++){
        let p1;
        let p2;

        if(i === 0){
            p1 = 1;
        }else{
            p1 = prefix[i-1];
        }

        if(i === nums.length-1){
            p2 = 1;
        }else{
            p2 = postfix[i+1];
        }

        result[i] = p1 * p2;

    }

    return result;
}


let arr = [1,2,3,4];  // o/p = [24, 12, 8, 6]
console.log("Method-1: ", arrayProd1(arr));



/**
 * @summary {METHOD-2}
 *  > T: O(n)
 *  > S: O(1)
 */
function arrayProd2(nums){
    let result = [];

    let prefix = 1;
    let postfix = 1;

    // compute prefixes:
    for(let i = 0; i < nums.length; i++){
        result[i] = prefix;
        prefix *= nums[i];
    }

    // Compute sufixes;
    for(let i = nums.length-1; i >=0; i--){
        result[i] *= postfix;
        postfix *= nums[i]; 
    }

    return result;
}

console.log("Method-2: ", arrayProd2(arr));