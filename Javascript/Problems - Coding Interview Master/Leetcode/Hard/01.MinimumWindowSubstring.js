/**
 * @description https://leetcode.com/problems/minimum-window-substring/
 * SOLUTION: https://www.youtube.com/watch?v=jSto0O4AJbM
 */

/**
 * @example
 * 
 *      1.  Input: s = "ADOBECODEBANC", t = "ABC"
            Output: "BANC"
            Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
 * 
 */


/**
 * @summary
 *      T : O(n)
 *      S : O(m), where m is the length of the t -- no of characters in t
 */
function minWindow(s, t){
    
    if(t === " "){
        return t;
    }

    const countT = {}; // Holds the occurence of characters in t;
    const window = {};

    for(let i = 0; i < t.length; i++){
        if(!countT[t[i]]){
            countT[t[i]] = 0;
        }

        countT[t[i]] += 1;
    }

    let have = 0;
    let need = Object.keys(countT).length; // number of unique characters in countT map i.e size of the map;
    let res = [-1, -1];
    let resLen = Number.MAX_VALUE;

    let left = 0;
    // Loop the characters in s;
    for(let right = 0; right < s.length; right ++){
        let char = s[right];
        if(countT[char]){ // add to maps only those characters which are of interest; otherwise do not increase the memory;
            if(!window[char]) window[char] = 0;
            window[char] += 1;

            if(window[char] === countT[char]) have += 1;
        }

        while (have === need) {
            let currLen = right - left + 1; // This has to be in the while loop; As we are continuously shrinking str by moving left pointer, we are aslo reducing window
            if(currLen < resLen){
                res = [left, right];
                resLen = currLen;
            }

            let leftChar = s[left]; // Once the current window has statisfied, change window by moving left pointer, 

            if(countT[leftChar]){
                window[leftChar] -= 1;
                if(window[leftChar] < countT[leftChar]){
                    have -= 1;
                }
            }

            left += 1; // try and compare new window now;
        }
    }

    return s.substring(res[0], res[1]+1);
}


const str = "ADOBECODEBANC";
const t = "ABC";

console.log("Result 1: ", minWindow(str, t));