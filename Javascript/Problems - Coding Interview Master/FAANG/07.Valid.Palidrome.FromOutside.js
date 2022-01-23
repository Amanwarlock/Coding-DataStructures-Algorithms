/**
 * LINK: https://leetcode.com/problems/valid-palindrome/
 */


const string = "A man, a plan, a canal: Panama"

const isValidPalindrome = function(s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    // initialize left/right pointers at start and end of string respectively
    let left = 0; right = s.length - 1;

    /**
     *          a  b  b  a -- even    4/2 = 2
     *          0  1  2  3
     * 
     *          a  b  c  b  a --- odd  5/2 = 2
     *          0  1  2  3  4
     */
    
    // loop through string characters while comparing them, then move the pointers closer to the center
    while(left < right) { // left and right should not point to same as we dont want to compare char with itself as it will be same
        if(s[left] !== s[right]) {
            return false
        }
        
        left++;
        right--;
    }
    
    return true;
};

console.log(isValidPalindrome(string));
