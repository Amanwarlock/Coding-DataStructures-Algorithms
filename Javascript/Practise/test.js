const input = [1, 0, 2, 1, 3]; // array of integers with each value between 0 - (n-1)

//const output = [1, 2, 1, 1, 0]; // array of the same length and at each index, the value is how many times that index occured in the input.

/**
 *  Input = [1, 0, 2, 1, 3]
 *  Output = [1, 2, 1, 1, 0]
 *  length = 5
 * 
 *  [1, 5, 2, 1, 3]  i=0
 *  [6, 5, 2, 1, 3]  i=1
 *  [6, 5, 7, 1, 3]  i=2
 *  [6, 10, 7, 1, 3] i=3
 *  [6, 10, 7, 6, 3] i=4
 * 
 *  Now divide by 5 to arrive at occurence. Also take modulo of num[i] % with length of array to arrive at origina; number back
 * 
 *  ans: [1, 2, 1, 1, 0] after dividing each element with 5
 */


function occurence(arr){
    let occurence = new Array(arr.length).fill(0); //
    
    for(let i = 0; i< arr.length; i++){
        occurence[arr[i]] ++;
    };
    return occurence;
}

// 0 % 5  = 0

//  

//console.log("Result: ", occurence(input));


/**
 * S : O()
 */

function occurence2(arr){
    for(let i = 0; i< arr.length; i++){
        arr[i]++;
    };

    return arr;
}


console.log("Result: ", occurence2(input));