/**
 * @description Discusses important math functions and values available in javascript which can come handy for solving coding challenges;
 *
 * ## Important Math untils:
 *  1. Max and Min number value
 *  2. Infinity
 *
 */

/**
 * @description EC5 - Largest and smallest possible number value
 *
 */
console.log("EC5 - Largest possible number : ", Number.MAX_VALUE);
console.log("EC5 - Smalles possible number : ", Number.MIN_VALUE);

/**
 * @description EC6 - Largest and smallest possible number value
 */
console.log("EC6 - Largest possible number : ", Number.MAX_SAFE_INTEGER);
console.log("EC6 - Smalles possible number : ", Number.MIN_SAFE_INTEGER);

/**
 * @description Infinity, positive infinity and negative infinity;
 *  In js Infinity is a key word;
 */
console.log("Inifinity : ", Infinity, -Infinity);
console.log("Positive Inifinity : ", Number.POSITIVE_INFINITY);
console.log("Negative Inifinity : ", Number.NEGATIVE_INFINITY);


/**
 * @description  Math.max()  -- values can be multiple and should be coma separated;
 * 
 */
console.log("Math.max of two numbers : ", Math.max(5,9));
const arrx = [5,9];
console.log("Math.max from given array : ", Math.max(...arrx));

/**
 * @description Math.abs in javascript ?
 */
console.log("Math abs :", Math.abs(-2));

/**
 * @description Math.pow ??
 */