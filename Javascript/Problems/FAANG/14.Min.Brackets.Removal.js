/**
 * LINK: https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/ 
 */

const string1 = "(ab(cd)"

const minRemoveToMakeValid = function(str) {
    const res = str.split('');
    const stack = [];
    
    for (let i = 0; i < res.length; i++) {
        if (res[i] === '(') {
            stack.push(i);
        } else if (res[i] === ')' && stack.length) {
            stack.pop();
        } else if (res[i] === ')') {
            res[i] = ''
        }
    }
    
    while (stack.length) {
        const curIdx = stack.pop();
        res[curIdx] = '';
    }
    
    return res.join('');
};

console.log(minRemoveToMakeValid(string1))