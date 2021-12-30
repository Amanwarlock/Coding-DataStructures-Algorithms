

function possibleCombinations(arrIn, target) {
    let result = [];
    helperRecurse(arrIn, 0, [], 0, target, result);

  return result;
}


function helperRecurse(nums, i, subSet, total, target, result){
// base case
        if(i >= nums.length || total > target){
            return;
        }

        if(total === target){
            
            result.push([...subSet]);
        }

        
        // left branch -- current element is part of the solution
        subSet.push(nums[i]); 
        helperRecurse(nums, i+1, subSet, total + nums[i], target, result );

        // right branch
        subSet.pop();
        helperRecurse(nums, i+1, subSet, total, target, result );

}


// let nums = [2, 3,  9,  8,  7,  10, 0];
// let target = 10;
console.log("Result : ", possibleCombinations([2, 3, 9, 8, 7, 10, 0], 10));