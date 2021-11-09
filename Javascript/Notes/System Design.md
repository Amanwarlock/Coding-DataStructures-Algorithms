
## Resources


## How to Start design interviews

    > https://www.youtube.com/watch?v=LghAWi4H974


## Choosing Database

    > Is the data structured or non-structured
    > What is the structure of Query parameters
    > Decide based on scale of usage    

    > For file / Image / Video storage --> Blob storage such as s3 + CDN which distributes resources in different servers across geograpgy

    > For Text search for example in Amazon or Netflix  use Search engines --> Elastic Search or Solar built on Apache Luceen

    > Use Time Series database for metric monitoring use cases --> InfluxDB, Graphana, 

    > Data for analytics and reporting / Datawarehousing --> Hadoop

    > Ever Increasing data but finite queries like Uber ---> Cassandra, HBase (Columnar DB)

    > Resouces:
        - https://www.youtube.com/watch?v=cODCpXtPHbQ&list=PLhgw50vUymycJPN6ZbGTpVKAJ0cL4OEH3&index=2


## Notes

    #### How to start?

        1. Requirements and Goals (Functional and non-functional requirements)
                > Functional Requirements: (THings user can do)
                    - Post tweets, Follow Users, Favourite Tweets, Timeline
                > Non-Functional Requirements: (THings user cannot do)
                    - Highly Available, Low latency, Consistency, 

        2. Storage and Network Capacity
            > 1 Billion users
            > 200m DAU (Daily active users)
            > 100m Tweets/day
            > avg 200 Followers

        3. System APS's
            > Post Tweet --> key , tweet data, location -- returns url of new tweet

            > Get tweet --> key, tweet-Id,  returns tweet info in json


        4. High Level Design
                                                   ______________  Database 
                                                  |
        | Client | -------> | Server|-------------|
                                                  |______________  Filestorage

        5. Database Schema 

            > Tweet Collection - ID, usreID, lat, long, CreatedDate, NumFav
            > User -> Id, Name, Email, Dob, lastLogin
            > UserFollow --> user1, user2