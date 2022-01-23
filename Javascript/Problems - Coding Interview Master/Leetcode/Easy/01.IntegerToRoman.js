/**
 * @description https://leetcode.com/explore/interview/card/amazon/76/array-and-strings/2964/
 * Solution: https://www.youtube.com/watch?v=yzB4M-UXqgI
 * 
 * Test cases:
 *  num = 3 --> III
 *  num = 4 --> IV
 *  num = 1994 --> MCMXCIV  M = 1000, CM = 900, XC = 90 and IV = 4
 *  num = 58 --> LVIII  L = 50, V = 5, III = 3
 */


/**
 *  T: O(N) where N is the number of characters or the number times we are repeating a roman number
 *  S: O(1)
 */
function toRoman(num){
    // This numerals map or array does not contribute to time or space complexity because it does not grow with input
    const numeralsMap = new Map(); // This is not dependent on the input value. It always remains constant
    numeralsMap.set(1000, 'M');
    numeralsMap.set(900, 'CM');
    numeralsMap.set(500, 'D');
    numeralsMap.set(400, 'CD');
    numeralsMap.set(100, 'C');
    numeralsMap.set(90, 'XC');
    numeralsMap.set(50, 'L');
    numeralsMap.set(40, 'XL');
    numeralsMap.set(10, 'X');
    numeralsMap.set(9, 'IX');
    numeralsMap.set(5, 'V');
    numeralsMap.set(4, 'IV');
    numeralsMap.set(1, 'I');

    let result = "";

    for(let key of numeralsMap.keys()){ // THis does not contribute to time complexity, as it is not growing or shrinking with input. Always constant in time
        let numOfSym = Math.floor(num / key);
        
        if(numOfSym !== 0){
            while(numOfSym > 0){
                result += numeralsMap.get(key);
                numOfSym --;
            }

            num %= key;
        }
    }

    return result;
}


console.log(toRoman(1994));