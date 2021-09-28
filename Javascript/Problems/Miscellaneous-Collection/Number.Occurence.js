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

const input = [1, 0, 2, 1, 3]; // array of integers with each value between 0 - (n-1)

//const output = [1, 2, 1, 1, 0]; // array of the same length and at each index, the value is how many times that index occured in the input.


/**
 *  T : O(N)
 *  S : O(N)
 */
function occurence1(arr){
    let occurence = new Array(arr.length).fill(0); // S = O(N)
     
    for(let i = 0; i< arr.length; i++){ // T = O(N)
        occurence[arr[i]] ++;
    };
    return occurence;
}




/**
 * S : O(1)
 * T : O(2N)
 * @description: When you see a number, at index equal to the encountered number add the length of the array, if you encounter it once add length of arr once, if
 * encountered twice add arr length twice and so on.
 * - At last dividing each elem of arry should give the occurence. 
 * - Dividing tells us how many times we added arr length to the element which is nothing but the occurrence
 * - Taking modulo gives us back the original. Basically the original state of the elem 
 */

function occurence2(arr){

    for(let i = 0; i< arr.length; i++){
        let actual = arr[i] % arr.length;
        arr[actual] += arr.length;
    };

    for(let i = 0; i< arr.length; i++){
        arr[i] = Math.floor(arr[i] / arr.length);
    };


    return arr;
}


console.log("Result 1 : ", occurence1(input));
console.log("Result 2 : ", occurence2(input));