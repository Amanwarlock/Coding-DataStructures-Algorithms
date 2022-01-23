# CODING CHEATSHEET - JAVASCRIPT


## Big O Cheatsheet

     > https://www.bigocheatsheet.com/

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## DATA TYPES


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## TYPECASTING


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## MATH
    > Number.MAX_VALUE (ES5)
    > Number.MIN_VALUE (ES5)
    > Number.MAX_SAFE_INTEGER (ES6)
    > Number.MIN_SAFE_INTEGER
    > Infinity, -Infinity
    > Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY
    > Math.max(5,9)
    > Math.min(2, 4)
    > Math.abs(-2)
    > Math.pow(2,2) // 2^2 = 4
    > const arrx = [5,9];
        console.log("Math.max from given array : ", Math.max(...arrx)); (spread operator - ES6)

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## STRINGS
        > String("some text") -> clone a string
        > str.length
        > str.split("") -> convert's string to an character array
        > str.trim() (removes white spaces)
               - Check  if string is empty
                    $ str.trim().length === 0

        > str.toLowerCase(), str.toUpperCase()
        > str.concat(str2)
        > str.substring(1) // starting from 1 till end

        > str.charCodeAt(i) 
               + parse to ASCII; i - index in str ASCII - 128bit Extended ASCII - 256bit
               + A-Z = 65-90, a-z = 97-122, 48-57 = 0-9
               + String.charCodeAt() will not work;
               + 
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

        

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## ARRAYS

    > Create array::
         - Fixed size: new Array(5).fill(0)
         - arr.length
         - arr.push()
         - arr.pop()
         - arr.shift() --> pop from head / first 
         - arr.unshift() --> push to head

    > Sorting::
         - arr.sort(), arr.sort((x,y) => /* custom implementation*/)

    > [NOTE] :: In arrays for sorting:
         - Default sort supports lexographical sort (works on strings)
         - For numerical sort always provide a compare function for ex: [-1,0,1,2,-1,-4].sort((x,y)=> x-y)

    > arr.reverse()
    > arr.concat(arr)
    > arr.slice()
    > arr.splice()
    > arr.join() , arr.join(#delimiter) -> joins array by given delimeter into an string
    > Array.isArray()

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## COLLECTIONS / DATA STRUCTURES (Built-In)

    ## Maps
        > const myMap = new Map();
        > map.set(key,vale)
        > map.get(key)
        > map.has(key)
        > map.delete(key)
        > map.clear()
        > map.size --> not a function
        > map.keys()
        > map.values()
        > map.entries() - [key, value]


     ## Sets
          let set = new Set()

          > set.add(val)
          > set.has(val)
          > set.size --> not a function
          > set.clear()
          > for (let val of set){}
          > set.keys()
          > set.values()
          > set.entries()

 
   ## Object
      > Object.keys()
      > Object.clone()
      > Object.assign({}, obj1, obj2)
      > Object.hasOwnProperty()
 
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## LOGICAL OPERATORS

     > OR - ||

     > AND - &&

     > NOT - !


## BITWISE OPERATORS

     > OR - a | b  (Bitwise OR)

     > AND - a & b

     > XOR - a ^ b

     > NOT - ~a

     > LEFT SHIFT - a << b 

     > RIGHT SHIFT - a >> b

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## COMPARISON OPERATORS


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## RANDOM NUMBER GENERATOR

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## MISCELLANEOUS
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


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## CONCEPTS



----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
