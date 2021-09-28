/**
 * MATH
 */
    > Number.MAX_VALUE (ES5)
    > Number.MIN_VALUE (ES5)
    > Number.MAX_SAFE_INTEGER (ES6)
    > Number.MIN_SAFE_INTEGER
    > Infinity, -Infinity
    > Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY
    > Math.max(5,9)
    > Math.abs(-2)
    > Math.pow(2,2) // 2^2 = 4
    > const arrx = [5,9];
        console.log("Math.max from given array : ", Math.max(...arrx)); (spread operator - ES6)

/**
 * STRINGS
 */

    # STRINGS
        > String("some text") -> clone a string
        > str.split("") -> convert's string to an character array
        > str.toLowerCase(), str.toUpperCase()
        > str.concat(str2)
        > str.substring(1) // starting from 1 till end
        > str.charCodeAt(i) 
               + parse to ASCII; i - index in str ASCII - 128bit Extended ASCII - 256bit
               + A-Z = 65-90, a-z = 97-122, 48-57 = 0-9
               + String.charCodeAt() will not work;
        > String.fromCharCode(65) // -> ans: A
        > // parse to unicode
        > Ignore casing and non-letter characters
               let size = parseInt('z', 36) - parseInt('a', 36) + 1 // why add 1? because consider counting from 1-to-9, its 9 digits, but if we subtract 9-1=8 digits;
               let arr = new Array(size);
               let lowerRange = parseInt('a', 36)
               let upperRange = parseInt('z', 36)
               let char = parseInt('given letter', 36)
               if(lowerRange <= char && char <= upperRange) return char - a; else return -1;
                  // why subtract a? for arrays index starts at 0, 0.....a...char.....z;
                  // subtracting a from char shifts a closer to 0th index, avoiding wastage of array memory and sequencing 

        

        ### Validation Functions / Tricks

 /**
 * ARRAYS
 */
    > arr.shift()
    > arr.unshift()
    > arr.sort(), arr.sort((x,y) => /* custom implementation*/)
    > arr.reverse()
    > arr.concat(arr)
    > arr.slice()
    > arr.splice()
    > arr.join() , arr.join(#delimiter) -> joins array by given delimeter into an string


 /**
 * TYPECASTING
 */


/**
 * COLLECTIONS
 */

    ## Maps
        > const myMap = new Map();
        > map.set(key,vale)
        > map.get(key)
        > map.has(key)
        > map.delete(key)
        > map.clear()
        > map.size()
        > map.keys()
        > map.values()
        > map.entries() - [key, value]

 
 
 /**
 * MISCELLANEOUS
 */

 ## Functions:
      > arguments keyword
            // In function we can get pseudo array of its parameters as arguments
            // For ex: 
               function test(){ console.log("Args are " , ...arguments);}
               test(1,2,3)
      > xyzfunc.call(scope, args)
      > call, bind and apply:
            // bind: lets you attach a scope to a function and returns a new funtion with binded scope. To the returned func, all values are passed as is to the original fn
            // call: lets you pass scope as 1st argument, and then the list of parameters coma separated (parameters as a list, not array)
            // apply: lets you pass scope like call, but second argument can be array of parameters. No need to be coma separated

## Spread Operator:
      > ...array
      > ...object
