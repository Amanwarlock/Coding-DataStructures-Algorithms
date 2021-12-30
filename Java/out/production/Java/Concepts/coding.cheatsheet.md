
# JAVA CODING CHEATSHEET

## Big O Cheatsheet

    > https://www.bigocheatsheet.com/
//---------------------------------------------------------------------------------------------------------------------

## LOGGING

## CODE COMMENTS

//---------------------------------------------------------------------------------------------------------------------

## DATA TYPES
  1. int
  2. float
  3. double
  4. byte
  5. short
  6. long
  7. boolean
  8. char

  #### Data types with size
    1. boolean - 1bit
    2. byte - 8 bits  (1 byte = 8 bits)
    3. char - 16 bits
    4. short - 16 bits
    5. int - 32 bits
    6. long - 64 bits
    7. float - 32 bits
    8. double - 64 bits

//---------------------------------------------------------------------------------------------------------------------

## TYPE CASTING

//---------------------------------------------------------------------------------------------------------------------

## MATH
```sh
  - Math.abs(num)
  
  - Math.max(num1, num1)
  
  - Math.min(num1, num2)
  
  - Integer.MIN_VALUE
  
  - Integer.MAX_VALUE
```

//---------------------------------------------------------------------------------------------------------------------

## LOOPS / ITERATORS

//---------------------------------------------------------------------------------------------------------------------

## STRINGS
  - Create string - new String()
    
  - length - str.length()
    
  - char c = str.charAt(index)
    
  - String.copyValueOf(str)
    
  - int i = str.indexOf('e')
    
  - boolean res = str.contains('test')
    
  - boolean res = str.startsWith('java')
    
  - boolean res = str.endsWith('dev')
    
  - string res = str.substring(4,11)
    
  - str.toUpperCase()

  - string to array - str.toCharArray()

  _ str.trim() (remove white spaces)
    - check if string is empty
            $ str.trim().length() === 0

  - Clone - new String(str)

  - Compare two strings right way - str1.compareTo(str2) (returns 1, -1, or 0)

  - String Equality: str1.equals(str2)

  - Character.isDigit(str) ---> to check if string is a valid number

  - Character.isLetter(str) ---> To check if a char is a letter or alphabet

//---------------------------------------------------------------------------------------------------------------------

## ARRAYS

  #### Creating Arrays
  ```sh
     - Fixed size: int[] arr = new int[5]
    
     - string[] arr = new string[size]
     
     - Two-dimensional : int[][] arr = new int[4][4];
     
     - int[] arr = {1,2,3} // used when we want to declare and initialize at the same time
  ```
  - Arrays.fill(arr, -1)


  - Arrays.sort(arr)
    
        - Arrays.sort(arr, new CustomComparator())
    
        - Import Arrays from java.utils package

  - arr.length

  - arr[0] --> to retrieve

  - For insertion and retrieval from arrays, indices are used. There is no other way

//---------------------------------------------------------------------------------------------------------------------

## COLLECTIONS

## Hash Map
    
    $ HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();    

    > map.getorDefault(key, defaultValue if not found);

### Queue (Min / Max Heap / Priority Queue)

//---------------------------------------------------------------------------------------------------------------------

## LAMBDA EXPRESSIONS (AKA - Lambda's)

    > Lambda's are used with interfaces having only one function also known as funtional interfaces
    
    > Instead of using anonymous inner classes to provide implementation and call this one function, lambda expression 
        can be used

//---------------------------------------------------------------------------------------------------------------------

## MISCELLANEOUS


//---------------------------------------------------------------------------------------------------------------------


