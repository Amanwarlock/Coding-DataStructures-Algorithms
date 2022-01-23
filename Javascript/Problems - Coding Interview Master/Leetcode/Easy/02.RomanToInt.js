/**
 * @description https://leetcode.com/problems/roman-to-integer/
 * SOLUTION: https://www.youtube.com/watch?v=hEhf_oz3wsM
 * 
 *  1. MCMXCIV --> 1994
 *  2. LVIII --> 58
 *  3. IV --> 4
 *  4. IX --> 9
 *  5. III --> 3
 * 
 */


 var romanToInt = function(s) {
    
    const map = new Map();
    map.set('I', 1);
    map.set('V', 5);
    map.set('X', 10);
    map.set('L', 50);
    map.set('C', 100);
    map.set('D', 500);
    map.set('M', 1000);
    
    let result = 0;
    
    for(let i=0; i< s.length; i++){
        if(i > 0 && map.get(s[i]) > map.get(s[i-1])){
           result += map.get(s[i]) - 2 * map.get(s[i-1]);
         }else{
            result += map.get(s[i]);
        }
    }
    
    return result;
    
};