/**
 * LINK : https://leetcode.com/problems/valid-parentheses/
 */


const string = "{()[]}"

const parens = {
    '(': ')',
    '{' : '}',
    '[': ']'
}

var isValid = function(s) {
  if(s.length === 0) return true;
  
  const stack = [];
  
  for(let i = 0; i < s.length; i++)  {
    if(parens[s[i]]) {
      stack.push(s[i]);
    } else {
      // or you can also check if stack is empty and return false here;
      const leftBracket = stack.pop();
      const correctBracket = parens[leftBracket];
      if(s[i] !== correctBracket) return false
    }
  }
  
  return stack.length === 0;
};

console.log(isValid(string));
