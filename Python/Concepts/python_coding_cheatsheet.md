
# Python Coding Cheatsheet

## Resources
    > https://zerotomastery.io/cheatsheets/python-cheat-sheet/?utm_source=udemy&utm_medium=coursecontent

## Big O Cheatsheet

     > https://www.bigocheatsheet.com/

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
        - round(5.468, 2) --> o/p 5.47


## Iterations / Looping

## Typecasting
    > String To Int --> int('100')
    
    > Int to String --> str(100)

    > float()

    >  list()


## Strings

    > upper-case
        - str.upper()
        - 'aman'.upper()
    
    > Lower-case
        - str.lower()
        - 'AMAN'.lower()

    > Capital first letter
        - str.capitalize()

    > Clone a string
        - new_copy = str[:]

    > Reverse a string
        - rev_str = str[::-1]

    > .strip() - Remove whitespaces at begining and end
        - remove from front and back
            - ' I am alone '.strip() --> o/p 'I am alone'

    > .split()
        - 'hello world'.split() --> o/p ['hello', 'world']

    > str.isnumeric()

    > str.isdigit() --> given string can be parsed to a valid number type. Returns boolean for valid strings

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

    > Custom sort:
            - sorted(arr, key=fn())
            - example: sorted([{name: 'am', age: 12}], key=lambda item: item['age'])
    > merge / concat arrays: arr1.extent(arr2) 

    > concat two lists: list1 + list2

    > Add:
        - arr.append(item)
        - arr.insert(index, val)

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

    > Lenght of dictionary
            - len(my_dict)

    > Keys
        - list(my_dict.keys())

    > Values
        - list(my_dict.values())

    > Items - tuple of key-value pair
        - list(my_dict.items())

    > Get
        - my_dict[key]
        - my_dict['name']
        - my_dict.get('age')  # --> Returns None if key does not exist.
        - my_dict.get('age', 0) # 0 --> Returns default (2nd param) if key is not found

    > Remove
        - del my_dict['name']
        - my_dict.pop('name', None)

## Sets

    > my_set = set()
    
    > my_set.add(1)  # {1}
    
    > my_set.add(100)# {1, 100}

    > my_set.add(100)# {1, 100} --> no duplicates!

    > my_set.remove(100)      # {1} --> Raises KeyError if element not found

    > my_set.discard(100)     # {1} --> Doesn't raise an error if element not found

## Tuples

    NOTE: Tuples are immutable

    Example: my_tuple = ('apple','grapes','mango', 'grapes')

    > len(my_tuple)                          # 4

    > my_tuple[2]                            # mango

    > my_tuple[-1]                           # 'grapes'

    > my_tuple[1] = 'donuts'  # TypeError --> because tuples are immutable  

    > my_tuple.append('candy')# AttributeError

## Functions
    
    *args   = (1, 2)
    **kwargs = {'x': 3, 'y': 4, 'z': 5}
    some_func(*args, **kwargs) # same as some_func(1, 2, x=3, y=4, z=5)

## Miscellaneous



