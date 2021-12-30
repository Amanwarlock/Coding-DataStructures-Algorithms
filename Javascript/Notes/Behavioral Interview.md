# Behavioral Interview Preparation Guide


## Resources

    > 30 Questions: https://www.educative.io/blog/behavioral-interviews-how-to-prepare-and-ace-interview-questions

    > 41 Questions: https://www.themartec.com/insidelook/behavioral-interview-questions

    > Top 8 Q and A: https://careerkarma.com/blog/behavioral-interview-questions/

    > 10 Ques & Ans: https://www.indeed.com/career-advice/interviewing/software-engineer-behavioral-interview-questions

    > Online Paid Course: https://www.educative.io/courses/grokking-the-behavioral-interview

    > https://www.indeed.com/career-advice/interviewing/managerial-round-interview-questions

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## NOTE

    > Your answers should focus primarily on your actions, accomplishments, and thought processes. 
    
    > Avoid describing decisions made as a team or answers that did not directly require your effort. 
    
    > This means you should use the “I” pronoun as much as you can

    > Research on company values and the position comes in handy

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## METHOD: STAR

    - S: Situation

    - T: Task

    - A: Action

    - R: Result

    P- philosophy | P - process  | O - outcome

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Frequent Questions

    > Give me a specific example of a time when you failed at something?


    > Tell me about a time when you experienced blockers at work

    > Tell me about a difficult problem you had to solve at work ?

    > Tell me about a time when you asked for help?


    > Tell me about a time you had conflict and how did you handle it?

    > Tell me about a time you made a mistake?

    > Describe a time when you did more work than was expected of you to accomplish a project. Were your efforts acknowledged? How did that make you feel?

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    > _Tell me about a time when you overcame a conflict at work_.

        Resources:
            > https://www.youtube.com/watch?v=3ANp00pYl5Q

        _My Answer_:
            
            > We all experience conflict at some point in our career

                [Summary] : S: The ERP application was experiencing load issues, slow response time of API's even with acceptable traffic. The ERP was live for only three states. Within three weeks, we
                                planned to roll out to 5 additional states. Solving this issue was high priority

                            T: My manager called a quick meeting involving me and four other developers. Agenda of the meeting was to come with a solution and resolve this issue on high priority

                            A: I was excited and it was a great opportunity for me to learn from my peers how had much more experience than me working on the ERP platform
                                One of my colleague, very talented and skilled, I gained lot of knowledge from him while working. He suggested going over codebase and collect frequently queried attributes
                                . He believed that the database was not indexed properly and few major db attributes are missed during indexing

                                - The team agreed to his view including my PM. He has been managing the ERP and dealing with scalability issues from before

                                - I suggested that we should cache the endpoints that are frequently used and where that the data is not changing very frequently. 
                                  While working I made this observation that they are many overlapping cross service calls to services, fetching the same data

                                - Two members and my PM strong disagreed with the idea. He insisted that the platform had similar problem earlier and indexing resolved it
                                
                                - I din't wanted to create a conflict as it was a very critical time. The ERP was live in three states and the customers, warehouse teaming were facing difficulties.
                                - It was a very stressful stituation for the tech team
                                - So I agreed with the teams suggestion and stayed back the whole night with other developers scanning code and listing DB attributes to be indexed

                                - I was very confident that my idea will be effective, in past during multiple occassions I had observed such repeatitive overlapping API calls in the system
                                - So after completing the high priority task and deployment that night, the next evening I politely checked with my colleague if I can provide more insights about
                                - my idea, I mentioned I made some observations and I'm confident that it will work. Indexing had improved the performance little bit, but the system was still not doing good 
                                - under load / during spikes. I could not find any common availabiltity for both of us to discuss as he had his hands full, 
                                - Multiple times my proposed meeting was turned down due to high priority tasks.

                                - So I decided to make a video presentation of my findings and the idea. I recorded the timing and profiled those overlapping api calls to brand, category
                                - Product, franchise, logistics, warehouse info etc. I used browser and went to each page to capture such API calls. I demonstrated the correlation
                                - I proposed an architecture, an middle ware that can be used to cache data such that we don't have to change codebase in multiple places

                                - I felt sending the video presentation to him and the manager will be rude. So I first checked with him if he has time to view my video recording and I sent him
                                - He liked my idea and strongly agreed that it will solve the issue. He added my PM in the loop and scheduled a meeting next morning to discuss more

                                - After deployment, the system performed relatively well and the issue was resolved. We observed it for a week and din't face the problem again.




            **Situation-2**: Using promises over callbacks, how make asyn code leaner 

                    - S: Due to nested async code, promises and callbacks at some places, it was difficult to debug code. Not readable. Causing frequent bugs

                    - T: To simply nested calls, refactor and standardize a better practise for the team for better readability and access / maintainability

                    - A: I recommended that, we should standardize a common way of handling async code throughout - for example just use promises , no mix and match of promises and 
                    - callbacks. We were using node 6v. Not ready to switch to higher versions for code compatibility reasons

                        - I suggested the use to a library called async.js which has feature called async waterfall and async queue that will help write cleaner and leaner code.

                        - My team mate and manager thought using third party tool is not good idea. It was not popular that time. They had not heard about that. Also they had concern 
                        - that now code has to be written a different way. It makes the code tightly dependednt on that library, can we depend on such as library. Also they felt that 
                        - it will run code slower, as its running blocks of code sequentially

                        My response:
                            - showed how companies are using async.js day to day. ON their website showed success stories, blog how to use it 
                            - Number of downloads
                            - Example code using the library. Used samples how code looks with using this lib and compared with prev version
                            - Mentioned to implement an abstract layer - a wrapper. so that in future if we decide not to use it, we can chnage the implementation at one place and 
                            - does not effect the rest of the code
                            - I made them understand, how async not only makes code leaner, by also enforces developers to split huge code now in multiple smaller functions.  
                            - Whcih makes easier to unit test the code, improves readability and maintainability

                    - R: Async lib was adopted and standardized throughout. Code quality improved. Bugs reduced due to noodle code. Many developers, and my manager finally liked it and 
                    - appreciated my suggestion personally. They spoke how async.js is helping them to write better and neat code 

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    > Tell me about a time you disagreed with someone 

        (Be open minded, listen, think about the ultimate goal not personal satisfaction)

        - One of my team members suggested we used a method of coding that I found inefficient. 
        - In this situation, I met with my team member one-on-one as we each laid out our plans for the 
        - project and the coding method we found most useful. 
        - After our discussion, we both understood each other's suggestions and presented our ideas to the rest of the team, which allowed 
        - everyone to voice their opinions. We were able to come to a mutual decision as a group

        - For this, talk about, your team memeber, recommended few HTTP request libraries that he found interesting with team and can be used in the project
        - For every feature we have been using mulitple http libraries like http thta comes with node.js, request etc
        - I suggested that we should have a standardise the library we use through out the project instead of using multiple different ones
        - Some common library throughout the code base
        - To avoid code duplication we created a wrapper or abstract function (syntatical suggar) that takes request params and passes to the http libr underneath 
        - and make it a private npm module. Abstract layer hides the implementation and the wrapper was very easy to use. Developers don't have to memorize different
        - lib syntaxes (have consistency) 

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    > Tell me about a time you failed / Tell me about a time you failed to meet a deadline 

        (Use star tech, give specific example (don't balme other ppl), WHy you failed, what you did to make it right, what you learnt from experience )

        - At storeking, I was assigned to work on an existing feature, a feature that I was not familiar with and some body else had worked on
        - There were bugs that needed to be fixed, and also new enhancements had to be implemented to the existing flow
        - I had the design document and I jumped into coding straight way
        - I was not aware of the use cases, business scenarios
        - The code was difficult to understand, had no comments or unit testcases
        - The task became very difficult for me and I ended up missing the deadline

        Overcame: It was a terrible thing and I was pretty disappointed. I did a complete retrospective of what went wrong 
            - I did not plan and organize this task well
            - In future, I made sure that before I accepted any task, I have everything I need for example: 
            - business document (approach business team), design document, test cases from QA, bug replication steps, understand the task well
            - I dedicate some time for planning, organization and estimation before starting the task

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    > Tell me about a time you made a mistake

        S: When I was working at storking, I was assigned a task. It was an adhoc task, it was not preplanned and I had a packed schedule that day.
          - The task was very simple, at backend, there was an API endpoint and the associated function executes some business logic writes the request payload to the database
          - Based on some attributes and condition from the payload, I had to derive the status and map it to the data that is getting persisted to the database
          - I finished the task on time, checked in my changes and raised the merge request (PR - Pull request) for the developer who was managing the feature
          - Then I got pulled into a meeting, and my branch was not merged, the team was not aware of the status of my task
          - Testing of the feature got delayed impacting the deadline. The task was very simple
        
        A - I felt terrible about my mistake, I did not communicate well with the team. Next time I made sure I don't take things for granted and take complete ownership of the task
          - In future, I made sure my branch is merged after raising PR, monitored my branch till it gets merged. Communicate with the Owner to merge branch via slack or email
          - Then later, update the status of my task to completed and assign to QA
          - How did you make sure you never repeat it again? In JIRA (ticket) task board, I dont update the task status unless its merged, check my unmerged branches and follow-up
          - Once branhc is merged, update status and move to QA 


        ANSWER-2: Git branch

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    > How do you motivate your team

        - Gamified tasks
        - During retrospective, we identified the most active member, person who communicated well, person who finished task fast with minimum bugs
        - We coined different names, and once we choose the game winner, we put up his name icon on a board where every one can see
        - Kept a jar we called happiness box, people who liked the achievements can put goodies into the jar like chocolates, memorable items, letters, notes etc
        - And the jar will be given to that person

        Version-2:
            - First of all, I'll build a good connection with the team. Get to know them better. This will help be feel confident about them and help me
              in motivating them better.
            - I will set clear individual and collective goals. This will help them know what is expected of them and gives them confidence.
               Enables them to communicate better, deliever better
            -  I will appreciate and acknowledge their efforts whenever they succeed. Appreciate their ideas
            -  Be a patient listener
            -  Set up training etc if somebody is not familiar or lagging with a particular skill set
            -  I believe by doing all this I can motivate the team
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    > How do you prioritize your work / how do you handle unscheduled tasks

        - When I'm asked to work on a task, I make sure I have a clear understanding of the deadline, delieverables and scope
        - I divide the tasks into smaller tasks that can be estimated (planning and organization)
        - I put my own deadline to be atleast a day earlier and longer if I can
        - I do this planning and organization for all the tasks and activities I have on my plate, I always have a time buffer
        - Time buffer helps me deal with anything unexpected comes up that needs to be done right now or any unplanned meetings
        - I prioritize my day so I handle the 'must-get-done-today' tasks as early in the day as possible for ex: if i have a delievery deadline that day, I make
          sure this task is done first
        - I have done so for years 

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    > Tell me about a time you went above and beyond

        (Going above and beyond helps get more done, it proves you are dependable and reliable in times of needs or stay back late nights)

        - At storeking, there was a occassion where some we were rolling out the ERP to 9 additional states (earlier that week we had went live with 3 states)
        - The team had been working on some new features, and for the new ERP, testing, fixing bugs etc 
        - Before roll out the data from old ERP on LAMP/ JAVA stack had to be migrated when there is less traffic. Ideally at late night
        - My manager had planned for data migration with the help of my colleague
        - Before she could get started with migration scripts, something urgent came up, there were some critical bugs in her feature
        - While she was managing that, the migration scripts had some issues
        - At the last moment, the business and sourcing team had some data that needs to be migrated from CSV
        - It was a tensed situtation for my manager and my colleague
        - I had the busy schedule for the past two weeks already, and my features had gone live starting that week
        - My manager din't ask my help understanding the workload I had been under from past days
        - Looking at the sitution I was keen to help, I wanted to see the ERP live
        - I volunteered to stay the night and work on new scripts from scratch (there were some major changes) and it was already late in the evening
        - I was completely overwhelmed, as it was a very sensitive and highly dependable task. Anything wrong with the script will impact the entire goin live process
        - Any gaps in the scripts could create sever bugs in production
        - I had to account for all the validations, test scenarios in my script as the data is parsed from CSV files
        - With huge pressure and responsibilty i finished the task and we went live at 4:00 am
        - The roll out was successful, my efforts were appreciated and I felt really great helping the team, organization in complex situation
        - It gave me more confidence
        - 
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    > Tell me about a time you handled a difficult situation

        - answer the conflict question
        - answer the situation you went above and beyond
        - Tell about a time you took some ones code, it was not readable, and you had difficulty finishing it. 
            You took the business doc from business team, understood the requirement, refactored entire code, added comments 

        - Another example: SK Data Migration for new ERP

        - Tell about the time of walmart integration
          - The businss requirement was clear
          - But the third-party was not sharing the API's for integration on time . I was missing deadlines
          - Tasks was not going as planned without these API;s
          - The API's share were not working. There was some problem in signature and how we need to pass parameters. There documentation was not correct
          - I escalated to my managers and business team. While they were working with them
          - I created mock up of those endpoints and completed all the task. I asked vendor to share sample API responses
          - Finally, wen the API;s issue was resolved. The feature was working and I could meet the deadlines 
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    > How will you deal with conflict between two co-workers

        - I believe the conflicts should be dealt straight away before they escalate
        - I first make the team aware of the conflict (that the conflict exists)
        - Encourage the members to resolve the conflict among themself
        - If it is not resolved, I will step in, facilitate the communication
        - Listen to them patientently, outline the team goal, collective goals rather than individual goals
        - Try to take a blend of both of their opinions and see if we can mutually comeup with something better
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    > Tell me about a time when you had to manage multiple projects simultaneously. How did you handle this?

        - Once at Storeking, I was assigned to lead third party intergration with walmart Fulfillment center india with the ERP system
        - Along with performing these integrations, I had to revamp / make necessary modifications to other features such as GRN, Batching, OMS, Logistics, Inventory and allocation
        - Walmart when they ship stock, there is different intake process at warehouse - need to scan boxes. Also for oms, we have to skip batching
        - These implementations were necessary to support walmart integration
        - I also had to built a reporting module, add different reporting queries that can provide business teams with insights and create dashboards
        - For performing these integrations, I had major tasks at backend and also had to take care of few front end aspects
        - Apart from this, I also had to take of fixing bugs from the modules I owned


        - While at first I was overwhelmed with having two big projects at once, I dedicated a day to break requirement into smaller and measurable task for estimation
        - organizing and prioritizing which tasks needed attention  (from pool of tasks, i had to pick and prioritize tasks into groups such that they form one complete flow
          - that can be released for testing weekly)
        - first so that I could meet the deadlines for both assignments. Because of this, I was able to turn in both assignments on time.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    > Tell me about the time you had to work with someone difficult

       S - When I first started working at Storeking, the senior member of the team was cold and dismissive towards me. 
         - Every time i asked them for guidance, clarification, they gave short answers and they weren't very receptive to my questions
       A - So i decided to try and build good relationship
         - During breaks I sat down with them and started asking how long they had been working at the company and what they enjoyed the most about it
         - I then asked about what their interests were outside work, food they liked to try build a common connection with them
       R - Following that conversation whenever I asked them for guidance moving forward they were far more receptive
         - I would see working with someone who is difficult as a challenge to try and build a better working relationship for the sake of the team  
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    > Can you describe your five-year plan? What is your career aspiration?

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    > Describe your ideal working environment. What is important to you in that environment?

        - Choose Fearlessly: Own your decisions. Make mistakes. Move on. Begin again.
        - Force Simplicity: Drive clarity and create momentum. Focus on impactful work
        - Include Consciously: Drive success for everyone around you.Seek out diverse ideas and experiences to unlock better outcomes
        - Trust Each Other: We are accountable to each other to deliver on our commitments and we trust each other to get it done

      - Allowed to make own decision, Commit mistakes, fail and Improvise
      - Be competitive and respectful
      - Drive success for everyone around you
      - Share ideas openly, its ok to have conflicts, but learn to deal with it maturely before it escalates further
      - Allowed to experiment with

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    > Describe your ideal teammate. What is important to you in this person

    > Pretend I am your supervisor, and I ask you to do something that you disagreed with. What would you do

    > What would you do if your teammates were not meeting standard expectations?

    > Within a 5-minute time span, the following people come to you asking for help: a V.P. whom you do not regularly interact with, your manager, 
        and a dev team member. How do you prioritize them?

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Interview Etiquette

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Interview Related Phrases (Communication)

    > Good morning, thank you for having me today. My name is ____.



----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
