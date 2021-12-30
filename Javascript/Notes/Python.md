# Python

## Resources:
    > https://zerotomastery.io/cheatsheets/python-cheat-sheet/?utm_source=udemy&utm_medium=coursecontent
    > https://github.com/gto76/python-cheatsheet

## Interview Questions
    > https://www.mygreatlearning.com/blog/python-interview-questions/
    > https://www.interviewbit.com/python-interview-questions/
    > https://hackr.io/blog/python-interview-questions

## Concepts:
    > Abstract classes --> https://www.youtube.com/watch?v=UDmJGvM-OUw

## Git
    > https://github.com/Pierian-Data/Complete-Python-3-Bootcamp

## What is Python?
    > Object oriented and interpreted language
    > Python is strongly typed (i.e, adding number and string gives an error)
    > Python is also dynamically typed (i.e, no need to declare variables)
    > With Python 3, backward compatibility is broken (Python 2 won't work properly and will be deprecated)


## Naming Convention
    > Names cannot start with numbers
    > No spaces allowed - use _ to separate names
    > No special characters allowed
    > names are lower case

    PEP8: Style and Naming Conventions
        > Variables and Function names
            - Variables and function names should be lower case
            - If multiword names, then separate them with _ ex: my_var, my_calc

        > Constants
            - use uppercase for constants and separate them with _ in case of multiword

        > Classes
            - For classes use ex: MyClass, StudentModel etc
        
        >  Modules
            - name modules using lowercase and separated by underscore. e.g: my_module.py

        > Packages
            - name packages with lowercase and no separations. e.g mypackage

## Comments
    > Single line comments - #
    > Multi-line comments - """ <comment goes here> """
## Data Types
    1. Numeric - Int, Float, Complex
    2. Iterator
    3. Sequence (also an iterator) - Strings, list, tuple, range, bytes & bytes array
    4. Mapping
    5. File
    6. Class
    7. Exception

    > Integers - 3, 300
    > Float - 2.4, 4.6
    > Strings - "Name"
    > Lists - [10, "Aman", 200.3]
    > Dictionaries - {"name": "Aman", "city": "Fresno"} (Unordered Key value pairs)
    > Tuples - (10, "Aman", 200.3) (Immutable sequence of objects)
    > Sets - {"a", "b"} (Unordered collection of unique objects)
    > Boolean - True or False
    > Null / undefined - None

    NOte: In short remember - Int, Float, Bool, Str, list, tuple, set, dict


## Immutable Datatypes

    > Tuples

    > Strings

    > Boolean

    > Float

## Operators
    > Add - +
    > Subtraction - -
    > Multiplication - *
    > Division - / (for float)  // (given integer result)
    > Modulo - %
    > Exponent or power - **
    > PEMDAS - order of operations

## Strings:
    > Slicing - [start:stop:step]
    > Reverse a string: [::-1]
    > split
    > upper(), lower()

## Logging / Printing / Formatting
    > Print("string")

    > Two methods for parameter logging:
        1. .format()
        2. f-strings (formatted string literals)

    > [Method - 1] .format() example:
        - print('My name is {} {} '.format('Aman', 'Kareem'))

        - Can also use indexes of items mentioned in .format
            ex: print("Week days are: {1} {0} {3} {2} {4}".format("Tue", "Mon", "Thur", "Wed", "Fri"))

        - Using keys
            ex: print("The {q} {b} {f}".format(f='fox', b='brown', q='quick'))
    
    > Formatting by specifying width - {value:width.precision f} (by defualt after decimal its 15 digit precision)
            ex: print("My answer is {r:2.5f}".format(r=result))

    > [Method - 2] F-string  (from Python 3.6 and above)
        - name = "Aman"
        print(f"My name is {name}")


## List
    > declare using [] . Ex: arr = []
    > len(arr) - gives length of the list
    > ex: [1, "Aman", 0.2] - allowed

    > list concatenation:
        - my_list = [1,2,3] , my_another_list = [4,5,6]
        - merged_list = my_list + my_anothe_list

    > Built-in methods for list:
        - .append(val) : Adds value at the end of the list. Similar to push in js
        - .insert(index, val) : Add at given index
        - .pop() : Retrieves items from the end of the list and returns that item
        - .pop(index): remove item by index
        - .sort() : sorts list / array in place. It does not return anything
        - .reverse() : operates in place and does not return anything

    > Check if item is in list
        $ my_list = [1, 2, 3]
        $ 1 in my_list --> returns boolean True

    > in operator can be used in lists, dictionary, tuples, sets, strings etc

    > List comprehension:
         $ name = 'Kareem'
         $ my_list = [char for char in name]  // Note both char has to be same variable name. Its like a pointer for the referece variable in for loop, which can be accesssed outside using the same variable name

         $ nums = [1,2,3,4,5,6,7,8,9,10] // add only even numbers to list using list comprehension

         $ my_evens = [x for x in range(0,11) if x % 2 == 0]


## Dictionaries:
    > They are key value pairs. Similar to javascript objects
    > Syntax: my_dict = { 'name': 'Aman'},  print(my_dict['key'])
    > my_dict['name'] = 'new name' - reassiging or adding new key
    
    > Built-in methods:
        - my_dict.keys() : returns all keys 
        - my.dict.values()
        - my_dict.items() : similar to javascript map.entries()
    
    > Iteration:
        - consider: my_dict = {'a': 'Apple' , 'b': 'ball', 'c': 'car'}

        - Print all the keys in dictionary
            $ for item in d:
                 print(d) // This will print only the keys in dictionary

        - Print all key-values tuples in dictionary
            $ for el in d.items():
                print(item)


## Tuples
    > Tuples are immutable. Once element is assigned and cannot be reassigned
    
    > Syntax:
        - Declaration: t = (1,2,3)  --> Mixed  object types are allowed
        - supports: type(t), len(t)
        - Retrieval: Uses indexes eg: t[0], t[-1]

    > Built-in:
        - t.count('a') --> Returns the occurence of 'a' in the tuple
        - t.index('a') --> Returns the index of 'a' inside the tuple

    > Tuple unpacking
        - consider :  my_listy = [(1,2), (3,4), (5,6)]

        - [Method - 1] - iterate all tuples
            $ for t in my_listy:
                print(t)
        - This prints all tuples

        - [Method-2]: Unpack all tuples
            $ for (a,b) in my_listy:
                print(a)
                print(b)

    > zip - merges multiple lists and returns tuples
        - consider: my_list1 = [1,2,3] , my_list2 = ['a', 'b', 'c']
        $ for el in zip(my_list1, my_list2):
            print(el)

        - Convert tuples to list
            $ list(zip(my_list1, my_list2))   // casting to list
## Sets
    > Unordered collection of unique items

    > Syntax:
        --> Declaration: my_set = set()
        --> myset.add(1)

    > Usage / trick:
        $ my_list = [1,1,1,2,2,3,3,3,3]
        $ print(set(my_list)) // output: {1,2,3}

## Files
    > Open or access the file ex: myNotes.txt
        --> myFile = open("myNotes.txt")
        --> myFile.read() - Prints the contents of the file

    > .read() uses a cursor to read your file. Once you read cursor will be at the end. If .read() is called again, you will get empty response.
        . So we have to reset the cursor to the start of the file. For this we can use .seek(0). O -> starting index for file

    > .seek(index) --> reset the cursor after reading the file

    > .readlines() --> returns each line as a list element. A list of lines is returned as the output

    > .close() --> close the file once done working with

    > Safe way of reading files --> Note when using with syntax you don't have to manually close the file. It closes self
        $ with open("myNotes.txt") as my_file:
            contents = my_file.read()

        $ print(contents)

    > Writing files:
        - modes:
            1. mode='r' --> read only
            2. mode='w' --> write only (will overwrite or create new)
            3. mode='a' --> append to existing file
            4. mode='r+' --> is reading and writing
            5. mode='w+' --> is writting and reading (overwrites existing file  or creates new one)

        - Syntax / examples:
            - consider file with content:
                    One on first
                    Two on Second
                    Three on Third

            - With read mode example:
                $ with open('myNotes.txt', mode='r') as f:
                    print(f.read())

            - With mode - a, append a new line
                $ with open('myNotes.txt', mode='a') as f:
                    f.write("\nFour on Fourth")


## Comparison Operators
    > == Equals
    > != Not Equals
    > > , <, >=, <=

## Logical Operators
    > and, or, not - keywords 
    > 2 ==2 and 3 < 4
    > not 2 == 2  --> similar to ! 2==2 in javascript

## Bitwise Operators
    > &
    > >>, >>>

## Control Flow
    > if <condition> : , elif <condition> : , else : 

    > loops:
        - for i in range(10)
        - my_list = [1,2,3,4,5]  ---> for i in my_list:

    > enumerate: Loop using indexes
        $  my_list = [1,2,3,4,5]
        $ for i,item in enumerate(my_list):  // This is tuple unpacking, if i,item is not there, it will print tuples
            print(my_list[i])

    > while - else loops:
        $ while <condition>:
            // runs until the condition is true
          else:
            // runs once the condition is false

    > break, continue, pass - keywords. Pass does nothing at all



## Type Casting
    > int()
    > list()
    > Methods:
        - isdigit() : checks if a given string can be parsed to a valid number type. Returns boolean for valid strings


## Functions
    > *args and **kwargs
        - *args : This allows the function to accept arbitrary number of arguments. It treats passed arguments like tuple
        - **kwargs : This allows arbitrary number of Keyword arguments and in function it appears as a dictionary

## Lambda Expressions
    > Lambda expressions in python is a quicker way of creating annonymos functions for one time use only
    > Example: Map and filter functions
    
    > Map usage:
        $ my_list = [1,2,3]
        $ def square(num):
            return num**2
        $ for i in map(square, my_list):
            print(i)

            OR
        $ list(map(square, my_list)) // the returned iterable from map is casted to a list

    > Filter usage: Print even numbrs
        $ my_list = [1,2,3,4,5,6]
        $ def check_even(num):
            return num % 2 == 0
        $ list(filter(check_even, my_list))

    > lambda function:
        - Syntax: lambda parameter : operation that returns a value  (lambda is a keyword)

        $ square = lambda num : num**2

        $ list(map(lambda num: num**2, my_list))

        $ list(filter(lambda num: num % 2 == 0, my_list))   


## Scoping 
    > Scope = what variables do I have access to?
    > Python follows LEGB rule: (local, Enclosing, Global, Built-in)
    > Local : Names assigned with in a function or a block of code
    > Enclosing function locals: Names in local scope of all enclosing functions from inner to outer (it propogates from inner to outer to find variable of all enclosing functions)
    > Global:  Names assigned at top level of modules or declared global with global keyword
    > Built-In: Names assigned in built-in modules eg: range etc

## Class and Instances
    > In python, for class name convention, camel-casing is used (for variable and function snake casing is used i.e. my_list etc)
    > 
    Syntax for class declaration:
        class Animal():
            pass

    > A class with constructor:
        $ class Animal():

            city = 'Fresno' # Here variable city is called class object attribute. THis is accessible by object creation as well

            def __init__(self, name):
                # here name is called attribute
                self.name = name

        # create instance of class
        $ my_dog = Animal(name="Lab")        

## Error Handling
    > try: , except: , else: , finally:


## Anaconda


    ### Creating Virtual Environments

        STEP-1:  conda create --name myenv python flask

        STEP-2: Activate environment: 
                    - activate myenv  (windows) 
                    - source activate myenv (mac or bash or linux OS)

        STEP-3: Install additional dependencies in your environment
                    - conda install numpy  (make sure activate is activated)

        STEP-4: Deactivate the environment
                    - deactivate (windows)
                    - source deactivate (mac or linux)

    ### Commands for Virtual Environments
        
        > conda create --name mytestenv   or conda create -n mytestenv

        > Create with specific version or specific package:
            - conda create --name mytestenv python=3.5
            - conda create -n myenv numpy

        > List of environments: conda env list


## Miscellaneous
    > Lower case - name = "Aman"  |  name.casefold()
    > Upper case - name.capitalize()
    > Boolean - True, False, None (case sensitive)
    > check if number - str.isnumeric()
    > append - add items to list
    > min([2,3])
    > max(list)
    > len(list) - length of list/array
    > str.count("s") - counts the occurence of given letter
    > arr1.extend(arr2)
    > sort arr - arr.sort(), arr.sort(reverse=True) -- can be used for both strings and list
