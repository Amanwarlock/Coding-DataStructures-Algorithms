'use strict';

/**
 * Go through characters in string and set flag to indicate if there is an
 * odd number of that character. If there is more than one character with an
 * odd number of occurences then it cannot be a palindrome.
 *
 * N = |str|
 * Time: O(N)
 * Additional space: O(N)
 *
 * @param  {string[]} str String to check as a character array
 * @return {boolean}      True if input string is a permutation of a palindrome (ignoring spaces), otherwise false
 */
export function isPalindromePermutationsSet(str) {
  if (!str) {
    return false;
  }

  let chars = new Set();
  for (let char of str) {
    if (char !== ' ') { // ignore spaces
      if (chars.has(char)) {
        chars.delete(char);
      }
      else {
        chars.add(char);
      }
    }
  }

  return chars.size <= 1;
}

/**
 * {"Rats live on no evil star",
							"A man, a plan, a canal, panama",
							"Lleve",
							"Tacotac",
							"asda"};
 */


//-----------------------MY SOLUTION-------------------

function isPalidromePermutation(str) {
  let occurances = getOccurances(str);
  let found = false;
  console.log(" Length : ", occurances.length);
  for (let i = 0; i < occurances.length; i++) {
    if (occurances[i] % 2 === 1) {
      if (found) {
        return false;
      }
      found = true;
    }
  }

  return true;
}

// case insensitive check which ignores non-letter characters;
function getNumericValue(char){
    let a = parseInt('a', 36);
    let z = parseInt('z', 36);
    let val = parseInt(char, 36);

    if(a <= val && val <= z){
        return val - a;
    }

    return -1;
}

function getOccurances(str) {
  let occurances = new Array(getNumericValue('z') - getNumericValue('a') + 1).fill(0);
  for (let i = 0; i < str.length; i++) {
    let x = getNumericValue(str[i]);
    if(x!= -1){
        occurances[x] +=1;
        console.log("Occurance : ",  str[i], occurances[x]); 
    }
  }
  return occurances;
}