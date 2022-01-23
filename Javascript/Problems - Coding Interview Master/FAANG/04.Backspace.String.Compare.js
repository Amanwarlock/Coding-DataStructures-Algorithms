/**
 * @description
 * LINK - https://leetcode.com/problems/backspace-string-compare/
 * Given two strings S and T , return if they equal when both are tyed out. 
 * Any # that appears in the string counts as backspace.
 * 
 * s = "ab#c", t = "ad#c"
 * s = "ab##", t = "c#d#"
 * s = "a##c", t = "#a#c"
 * "a#c", t = "b"
 */

const string1 = "ab#z"
const string2 = "az#z"

var backspaceCompare = function(S, T) {
    let p1 = S.length - 1, p2 = T.length - 1;
    
    while(p1 >= 0 || p2 >= 0) {
        if(S[p1] === "#" || T[p2] === "#") {
            if(S[p1] === "#") {
                let backCount = 2;
                
                while(backCount > 0) {
                    p1--;
                    backCount--;
                    
                    if(S[p1] === "#") {
                        backCount += 2;
                    }
                }
            }
            
            if(T[p2] === "#") {
                let backCount = 2;
                
                while(backCount > 0) {
                    p2--;
                    backCount--;
                    
                    if(T[p2] === "#") {
                        backCount += 2;
                    }
                }
            }
        } else {
            if(S[p1] !== T[p2]) {
                return false;
            } else {
                p1--;
                p2--;
            }
        }
    }
    
    return true;
};

console.log(backspaceCompare(string1, string2));


//-----------------------------------BRUTE FORCE---------------------------------------------------------------------------------------------

/**
 * @description
 * BRUTE FORCE
 */

const buildString = function(string) {
    const builtString = [];//stack
    for(let p = 0; p < string.length; p++) {
        if(string[p] !== '#') {
            builtString.push(string[p]);
        } else {
            builtString.pop();
        }
    }
    
    return builtString;
}

var backspaceCompare = function(S, T) {
    const finalS = buildString(S);
    const finalT = buildString(T);
    
    if(finalS.length !== finalT.length) {
        return false
    } else {
        for(let p = 0; p < finalS.length; p++) {
            if(finalS[p] !== finalT[p]) {
                return false
            }
        }
    }
    
    return true;
};

console.log(backspaceCompare(string1, string2));