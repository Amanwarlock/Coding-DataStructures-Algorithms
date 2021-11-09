
# Redis Notes

## Intro
    > Redis is built for UNIX based systems like Mac, Linux etc
    > Its also available for windows, but using docker is the best option

## Data Types
    > Data types that are available in redis are as follows:
        1. Key: The name of the property
        2. String: A typical string value
        3. list: A list of ordered strings (example: 2, 3, 4, 6)
        4. Hashes: Similar to objects, with an object key then field-value pairs (use hmset)
        5. Set: A list of unordered and unique strings
        6. Sorted-set: A list of user defined ordered unique strings
    > Examples:
        - Creating hashes:
            $ hmset user firstName Aman lastName Kareem City Fresno State California
            $ hgetall user (prints all user props)
            $ hget user lastName (get specific user property)
            $ hmget user firstName lastName City (get users multiple fields from object)
            $ hexists user zip (check if in user hash object zip property exists)
            $ hincrby usr age 5
        
        - Creating list:
            $ rpush groceries apples cherries pears "cold coffee"    (push to the right side of the list)
            $ lpush groceries soap cake (pushes to the left side of the list)
            $ lpop groceries (pop from the left side or the beginning of the list)
            $ rpop groceries (pop from the right side or the end of the list)
            $ lrange 0 -1 (to iterate or access by indexes. 0 is the start index, and note that for arrays, index from the last starts from -1 instead of 0 )

        - Creating sets:
            $ sadd skills react angular java
            $ smembers skills (get all items)
            $ sismember skills node.js (check if node.js is present in the set skills)
            $ create sub set: sadd skills:react redux "react router" , get items of sub set by smembers skills:react
            $ spop (removes last item),  spop skills:react
            $ scard skills (count of the items present)

        - Creating Sorted sets
            $ zadd skills 5 java 1 javascript 3 react 2 angular
            $ zrange skills 0 -1 (list of items)
            $ zrange skills 0 -1 withscores (list along with priority)
            $ zrevrange skills 0 -1 withscores (reverse the items in the set)
            $ zrank skills java (get the priority or the order )

## Redis Persistance
    > Data is saved in memory for fast access
    
    > Two persistance options that are available are:
        1. Redis database file (RDB)
        2. Append only file (AOF)
    
    > AOF uses logs to rebuild the dataset
    > RDB is taking snapshots, creating point-in-time copies of the data. RDB is the default option


## Redis Configuration
    > You can make any configurations for redis in the redis-conf file
    > For UNIX based systems, redis-conf file is located inside the /etc folder
    > Persistance options - RDB, AOF can be configured in this file


## Redis Security
    > Securing redis is very important and there are two ways:
        1. Set up username and password
        2. ACL - Access control list

## Pub Sub Pattern
    > Publish Subscribe pattern in Redis
    > Let's consider following channels: news, tech
    > In one instance of redis-cli client terminal, subscribe to one or more channels Eg: subscribe news, or subscribe news tech
    > In another terminal window, publish messages. Eg: publish news "Top headlines for today"

## Scaling
    > Auto failover mechanims, use redis sentinel. This requires one master and atleast two slaves for replication
    > For distrubuted system, can create many nodes. For this use Redis cluster 

## Commands
    > Keys *   (wildcard)
    > set <key <space> value> (any composed strings like with spaces, or long sentences has to be in double comas)
    > get <key>
    > incr key (increments by 1)
    > incrby key value (increments given key by value)
    > decr key
    > decrby key value
    > getset (shorthand, get the prop by key and set the value, but it returns the old value as it first perfoms get) example: getset name Kareem, then get name (new value)
    > mset - multiple key value pairs (ex: mset street alamos city fresno state california)
    > mget - (provide mulitple keys space separated)
    > exists <key> (returns 1 or 0)
    > del <key>
    > expire <key> <seconds> (TTL - time to live)
    > set <key> <value> ex <seconds to expire>  (setting key value and setting TTL with ex keyword whihc stands for expire) (in node.js ex should be uppercase)
    > hmset - (for creating hashes (objects))
    > hgetall user (prints all user props)
    > hget user lastName (get specific user property)
    > hmget user firstName lastName City (get users multiple fields from object)
    > hexists user zip (check if in user hash object zip property exists)
    > hincrby usr age 5
    > rpush groceries apples cherries pears "cold coffee"    (push to the right side of the list)
    > lpush groceries soap cake (pushes to the left side of the list)
    > lpop groceries (pop from the left side or the beginning of the list)
    > rpop groceries (pop from the right side or the end of the list)
    > lrange 0 -1 (to iterate or access by indexes. 0 is the start index, and note that for arrays, index from the last starts from -1 instead of 0 )

    