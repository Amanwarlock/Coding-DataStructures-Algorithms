
# Python Coding Cheatsheet

## Resources
    > https://zerotomastery.io/cheatsheets/python-cheat-sheet/?utm_source=udemy&utm_medium=coursecontent

## Math
    > Positive Infinity
            - float('inf') --> o/p inf

    > Negative Infinity
            - float('-inf') --> o/p -inf

    > Max of two numbers
        > max(a, b)
    
    > Abs --> abs(-a)

    > Power --> pow(base, exponent)

    > Round
        - round(5.46) --> o/p 5
        - round(5.468) --> o/p 5.47


## Iterations / Looping

## Typecasting
    > String To Int --> int('100')
    
    > Int to String --> str(100)

    > float()

    


## Strings

    > upper-case
        - str.upper()
        - 'aman'.upper()
    
    > Lower-case
        - str.lower()
        - 'AMAN'.lower()

    > Clone a string
        - new_copy = str[:]

    > Reverse a string
        - rev_str = str[::-1]

    > .strip() - Remove whitespaces 
        - remove from front and back
            - ' I am alone '.strip() --> o/p 'I am alone'

    > .split()
        - 'hello world'.split() --> o/p ['hello', 'world']

    > str.isnumeric()

## Arrays / List
    > len(arr)
    > .sort() --> sorts in place
    > .sort(reverse=true) --> mutates in place
    > .reverse() --> reverses list
    > sorted([1,5,3,6]) --> new list is created
    > 5 in [1,5,6] --> True
    > min(arr)
    > max(arr)
    > sum(arr)
    > arr1.extent(arr2) 

    > Add:
        - arr.append(item)

    > Pop:
        - arr.pop() --> from last
        - arr.pop(index) --> by position
    
    > Create a m x n matrix: let m = 3, n = 3
            $ matrix = [[False] * n] * m

    > Fill arrays of fixed size
            $ [False] * 5
            $ [i for i in range(5)]

    > Clone list: arr.copy()

## Dictionaries

## Sets

## Tuples

## Miscellaneous



