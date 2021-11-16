# Behavioral Interview Preparation


## Resources

    > 30 Questions: https://www.educative.io/blog/behavioral-interviews-how-to-prepare-and-ace-interview-questions

    > 41 Questions: https://www.themartec.com/insidelook/behavioral-interview-questions

    > Top 8 Q and A: https://careerkarma.com/blog/behavioral-interview-questions/

    > 10 Ques & Ans: https://www.indeed.com/career-advice/interviewing/software-engineer-behavioral-interview-questions

    > Online Paid Course: https://www.educative.io/courses/grokking-the-behavioral-interview



## NOTE

    > Your answers should focus primarily on your actions, accomplishments, and thought processes. 
    
    > Avoid describing decisions made as a team or answers that did not directly require your effort. 
    
    > This means you should use the “I” pronoun as much as you can

    > Research on company values and the position comes in handy

    
## METHOD: STAR

    - S: Situation

    - T: Task

    - A: Action

    - R: Result


## Frequent Questions

    > Give me a specific example of a time when you failed at something?


    > Tell me about a time when you experienced blockers at work

    > Tell me about a difficult problem you had to solve at work ?

    > Tell me about a time when you asked for help?


    > Tell me about a time you had conflict and how did you handle it?

    > Tell me about a time you made a mistake?

    > Describe a time when you did more work than was expected of you to accomplish a project. Were your efforts acknowledged? How did that make you feel?


    > Tell me about a time when you overcame a conflict at work.

        My Answer:
            
            Situation-1: Conflict whether to cache data in redis or just refactor and optimize code and database queries

                    - S: slow response time, high server load with less traffic, very frequent access to same data that is not updated frequently
                         
                    - T: We were tasked to solve this problem
                         My team mate had opinion that we should focus on refactoring code, optimizing queries and he had following concerns over caching:
                            - Cache data can grow and consume more space on server
                            - Adds complexity: Managing cache data is not easy - clean copy, dirty copy
                            - Need to change code several places to accomodate cache logic
                            - Writing to database and then to cache will be more expensive now

                    - A: We kept some time aside to discuss concerns, compare and weight ideas
                         We used metric to weight ideas : Simplicity: How simple, Priority: Scalibility:

                         - I sat down and patiently listened to his concerns and shared my ideas. We both evaluated each others ideas based on Simplicity, Priority, Effectiveness, Scalability

                         - Cache can grow: I suggested, we can overcome this concern by isolating the caching database to a different server

                         - Adds complexity: I expressed that, redis TTL can be used and redis will take care of flusing stale copies by expiring them. No complex logic at the code level

                         - Need to modify serveral places: I advised to implement a middle ware so that we can centralize the caching logic and don't have to modify the code
                         several places

                         - Writing to db and then to cachce: I understand that writes are expensive. I advised that on every update, just flush the cached record instead of writing to cache. On reads a cleaner and updated copy will be cached.

                    R: I was asked to lead the implementation. The server performance improved a lot, response time was improved by huge margin. Dint experience any load issues with caching. It was scalable solution and we ended by adapting it to other services and API's. My efforts were recognized and we adapted Redis to our stack as the caching mechanism

            Situation-2: Using promises over callbacks, how make asyn code leaner 

                    - S: Due to nested async code, promises and callbacks at some places, it was difficult to debug code. Not readable. Causing frequent bugs

                    - T: To simply nested calls, refactor and standardize a better practise for the team for better readability and access / maintainability

                    - A: I recommended that, we should standardize a common way of handling async code throughout - for example just use promises , no mix and match of promises and callbacks. We were using node 6v. Not ready to switch to higher versions for code compatibility reasons

                        - I suggested the use to a library called async.js which has feature called async waterfall and async queue that will help write cleaner and leaner code.

                        - My team mate and manager thought using third party tool is not good idea. It was not popular that time. They had not heard about that. Also they had concern that now code has to be written a different way. It makes the code tightly dependednt on that library, can we depend on such as library. Also they felt that it will run code slower, as its running blocks of code sequentially

                        My response:
                            - showed how companies are using async.js day to day. ON their website showed success stories, blog how to use it 
                            - Number of downloads
                            - Example code using the library. Used samples how code looks with using this lib and compared with prev version
                            - Mentioned to implement an abstract layer - a wrapper. so that in future if we decide not to use it, we can chnage the implementation at one place and does not effect the rest of the code
                            - I made them understand, how async not only makes code leaner, by also enforces developers to split huge code now in multiple smaller functions.  Whcih makes easier to unit test the code, improves readability and maintainability

                    - R: Async lib was adopted and standardized throughout. Code quality improved. Bugs reduced due to noodle code. Many developers, and my manager finally liked it and appreciated my suggestion personally. They spoke how async.js is helping them to write better and neat code 






## Interview Etiquette


## Interview Related Phrases (Communication)

    > Good morning, thank you for having me today. My name is ____.