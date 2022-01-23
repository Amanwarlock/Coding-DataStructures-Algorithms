/**
 * @description https://leetcode.com/problems/string-to-integer-atoi/
 *  Level: Medium
 *  Solution: https://www.youtube.com/watch?v=FyTpsuWAoc8
 *  
 *  
 *  Num: 4 1 2 3
 *       0 1 2 3
 * 
 *  1. 0 x 10 + 4 = 4
 *  2. 4 x 10 + 1 = 41
 *  3. 41 x 10 + 2 = 412
 *  4. 412 x 10 + 3 = 4123
 * 
 *  Valid number range: 32bit = - 2^31 to  +2^31 -1
 * 
 * 
 */


function myAtoi(str){
    let i = 0;

    // Ignore white spaces
    while(i < str.length && str[i] === ' '){
        i++;
    }

    if(i >= str.length) return 0;

    // Extract sign if present
    let sign = 1;

    if(str[i] === '+' || str[i] === '-'){
        sign = str[i] === '+' ? +1: -1;
        i++;
    }

    if(i >= str.length) return 0;

    let num = 0;

    // Ignnore and break / stop on encountering non-number strings
    for(let j = i; j < str.length && str[j] >= '0' && str[j] <= '9'; j++){
        
        //Opposite of mul is divde, after mul if want prev value divide. Vice-versa
        // Before mulltiplying check, if after muultiply the value becomes greated than max int value allowed. So divide max-int by 10 and compare with current val
        // lets assume max_int_valu = 32767
        // if curr val is 3276X , in place of X the allowed values are 0-7 and not greater than 7

        if(num > Math.floor(getMaxValue()/10) || (num === Math.floor(getMaxValue()/10) && +str[j] > getMaxValue() % 10)){
            return sign === 1 ? getMaxValue() : getMinValue();
        }
        
        num = num * 10 + +str[j]; // parse string to Int before adding; prefixing + is shortcut to cast string to number
    }


    return num * sign;
}

function getMaxValue(){
    return Math.pow(2, 31) - 1;
}

function getMinValue(){
    return - Math.pow(2, 31);
}

console.log(myAtoi("2147483648"));