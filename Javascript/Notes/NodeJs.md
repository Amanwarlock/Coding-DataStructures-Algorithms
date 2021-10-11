
## Intro
    > Node.js is a javascript runtime
    > It uses V8 javascript engine which is used by the goolge chrome browser
    > Node.JS runs v8 engine out of the browser on any server of choice (cross platform)
    > Node.js app runs in a single process and it does not create a new thread for every request
    > But node.js provides async I/O options in its standard library that allows js to run in non-blocking mode
    > Node.js uses commonJS module system for importing other files - require()
    > Where as in browser ES6 modules is standardized - Ex: import from ..
    > V8 is the runtime in which the javascript executes. V8 is written in C++
    > Terminate node.js programatically:
        - process.exit()
        - process.exit(with status code) // codes - 0, 1, 2, 3..
    > Read ennvironment variables using process core module, ex: process.env (for env variables set while starting the process)
    > Use node dotenv npm package. Two ways of using dotenv:
        - Create .env in root, add variables, and require('dotenv').config() in your js file
        - (Alternative) To avoid importing dotenv, we can start node app using cmd: node -r dotenv/config index.js
    > Difference between devDependencies and dependencies?
        - devDependencies contains development tools like testing library
        - dependenceies is bundled with the app in production

## Node REPL - How to use node.js REPL?
    > for running node.js scripts we use command: node app.js
    > For accessing REPL, omit the filename. For example: node
    > REPL - Read, Evaluate Print Loop - a programming language environment (basically a console window) - Takes single exp as user input and returns o/p after execution

## Modules in Node.js - CommonJS
    > module.exports - exposes the object it points to. Ex module.exports = { fn1: fn1}
    > exports - exposes the properties of the object it points to. Ex exports.car = {name, model}. let car = require("items")


## Request and Response
    > set response header - res.setHeader('Content-Type', 'application/json');


## HTTP Status codes
    > 200 - Successful response
    > 201 - created
    > 202 - Accepted
    > 304 - Not modified
    > 400 - Bad request
    > 401 - Unauthorized
    > 402 - Payment required
    > 403 - Forbidden
    > 404 - Not found
    > 500 - Internal server error
    > 501 - Not implemented
    > 502 - Bad gateway
    > 503 - Service unavailable
    > 504 - Gateway Timeout


## NPM
    > Install : npm install <pacakge-name> --save or --save-dev
    > update all packages - npm update 
        - npm will check all packages for newer version
    > update specific package:
        - npm update <package-name>
    > Versioning - specify a specific version of a package
    > Determing global package directory on your machine - npm root -g
    > npx is included in recent version of npm 
    
    > package.json - it is a central repository for all over project related dependencies / libraries / packages
        - if you write ~0.13.0, you want to only update patch releases: 0.13.1 is ok, but 0.14.0 is not.
        - if you write ^0.13.0, you want to get updates that do not change the leftmost non-zero number: 0.13.1, 0.13.2 and so on. If you write ^1.13.0, you will get     patch and minor releases: 1.13.1, 1.14.0 and so on up to 2.0.0 but not 2.0.0.
        - if you write 0.13.0, that is the exact version that will be used, always
    > There is a problem with package.json. If another person trying to initialize the project by running npm install on a different machine, and dependencies specified    with ~ or ^, syntax will be installed if a patch release of the package is available. This might induce bugs
    > package-lock.json - It keeps track of exact version of every package that is installed
    > The package-lock.json solves this problem. It sets the currently installed packages versions in stone and npm will use those exact versions when running
        npm install
    > npm update will update the versions in the package-lock.json file
    
    > list installed npm packages:
        - npm list (for your project)
        - npm list -g (global packages)
        - npm list --depth=0 (To get only your top-level packages (basically, the ones you told npm to install and you listed in the package.json)
        - npm list <package-name> (get specific version of installed package by name)
        - npm view <package-name> version (determine latest available version of a package)
        - npm outdated (get list of outdated packages)
        - npm uninstall <package-name> --save (removes from root  i,e node_modules and package.json)
    > npm install older versions using @. Ex: npm install package@version

## NPX
    > Stands for Node Package Executor 
    > npx is a node.js package runner that is available in npm from version 5.2
    > unlike npm, npx finds the correct reference of the npx command-name inside the node_modules folder without needing the exact path and without requiring the package
        to be installed globally and in the users path
    > npx allows you to run that npm command without installing it first. If the command isn't found, npx will install it into a central cache


## Semantic Versioning
    > In semantic versioning concept, all version have three digits - x.y.z (ex: 3.1.12)
    > First digit (x) is the major version
    > Second digit (y) is the minor version
    > Third digit (z) is the patch version 

## Event Loop:
    > Node.js asynchronous and non-blocking concept can be explained using event loop
    > Node.js javascript code runs on a single thread

    > 1. Call stack is LIFO - Last in First out
        > The event loop continously checks and adds function calls to the call stack and executes each one in order.
        > The event loop on every iteration checks the call stack and if there is something ,executes it
    > 2. Message queue:
        > Node.js when it encounters async code, it executes it else where
        > Once the response is ready in future, it is pushed to the message queue.
        > Event loop gives priority to the call stack and first processes everything it finds in the call stack
        > Once the call stack is empty, it extracts things from message queue to the call stack for execution   

    > process.nextTick(() => { // do something})
        > Every time the event loop completes a full trip it is called a tick
        > The engine invokes the functions passed to process.nextTick at the end of the current operation and before the start of the next event loop ticks
    > setImmediate(() => { // do something})
        > Any function passed as the setImmediate() argument is executed in the next iteration of the event loop
        > When you want to execute some piece of code asynchronously, but as soon as possible use setImmediate
    > How is setImmediate, setTimeout and process.nextTick() different?
        > A function passed to process.nextTick() is going to be executed on the current iteration of the event loop, after the current operation ends. This means it will always execute before setTimeout and setImmediate
        > A setTimeout() callback with a 0ms delay is very similar to setImmediate(). The execution order will depend on various factors, but they will be both run in the next iteration of the event loop

    > Event loop anatomy:
        - Call stack (LIFO for task execution)
        - Heap (memory allocation)
        - Message queue / Task queue / Call back queue / event queue
        - Web APIs (for browser), but for backend like node.js it will C++ API's or thread pool which performs async tasks 

## Buffer
    > Fixed size chunk of memory (can't be resized) (similar to array of intergers but each represents byte of data)
    > allocated outside the v8 engine
    > They are used to deal with binary data

## Streams
    > Traditionally program reads a file into memory from start to finish and then process it
    > Streams let us read data piece by piece processing its content without  keeping it all in memory
    > They are memory efficient and time efficient
    > Pipe - it takes the source chunks and pipe to the destination
   
    > Types of streams:
        1. Readable - A stream you can pipe from but cannot pipe into (you can retrieve data but cannot send to it)
        2. Writable - A stream you can pipe into (Can send data to it but cannot read or receive from it )
        3. Duplex - A stream you can both pipe into and pipe from. A combination of both Readable and Writable streams
        4. Transform - It is similar to Duplex, but output is the transform of its input
    
    > Stream event listeners:
        1. on error
        2. on end
        3. on drain
        4. on data
    
    > Stream object methods:
        - readstream.pipe(destination)
        - readstream.pause()
        - readstream.resume()
    
    > what happens when there is error while streaming? How to retry?
    > Error handling with streams?
    > How to safely handle interruptions with streams?

## Exception Handling
    > Use try catch, throw key word
    > Catching uncaught exceptions:
        - If an uncaught exception gets thrown during the execution of your program, your program will crash
        - process.on('uncaughtException', err => {
                console.error('There was an uncaught error', err)
                process.exit(1) //mandatory (as per the Node.js docs)
            })





## Topics
    1. Debugging and fixing node.js memory leaks
    2. Performance benchmarking and optimizing node.js
    3. Node.js security
    4. Monitoring node.js applications
    5. PM2, PM2 monitoring, keymetrics, analytics and node.js cluster mode
    6. Unit testing
    7. Pub sub pattern
    8. Distrubuted architecture, Microservice, Event driven architecture