# RabbitMQ

## Resources
    1. YouTube - https://www.youtube.com/watch?v=Cie5v59mrTg

## Tools / Libraries / SDK
    1. amqplib  [npm i amqplib] (official)

## Introduction
    > RabbitMQ is an asynchronus message broker
    > It is popular in distributed systems
    > Popular message brokers are:
        1. Active MQ
        2. AWS SQS
        3. Azure Service Bus

    > Advantages
        - Sender only needs to know location of message broker (need to about receiver and number of receivers)
        - If receivers URL or address changes, only needs to be updated in message broker
        - Mulitple receivers possible
        - Easy to add new receivers
        - Queueing - messages are queued and not lost
        - Decoupling
    
    > Disadvantages:
        - Communication is asynchronus - The sending service will not get the answer immediately
        - Increased network traffic


## Protocols:
    1. AMQP 0.9.1 - Advanced Message Queuing Protocol 
    2. STOMP - Simple Text Oriented Message Protocol
    3. MQTT - Message Queuing Telemetry Transport
    4. AMQP 1.0 - Advanced Message Queuing Protocol v1

    > AMQP is a binary protocol. Data received in binary form

## Anatomy of AMQP protocol (Binary form):
    > A single frame    

            ( type | channel | size | payload | frame end )


        type - Method or Header or Body or HeartBeat
        channel - It is a virtual connection
        size - Number indicating the size of the payload
        payload - Bytes of payload
        frame-end - Single byte indicates the end of the frame

                                                      _____________________ Queue
        ___________________                           |
        | client (producer)|  ____________> Exchange  |____________________ Queue    __________________  Consumer
        |__________________|                          |
                                                      |_____________________ Queue
                                                        
    > A publisher or producer connects to the message broker (RabbitMQ), which then publishes to exchange
    > Publisher sends a routing key along with the message



## Exchange Types
    > There are four type of exchange types:
        1. Direct
        2. Fanout
        3. Topic
        4. Headers

    > Direct exchange routes messages based on routing key
                                                                               _____________________ |      Queue - 1        |
                                (routing key)                                  |                     | customer.registration |   (will not receive message)  
            (Publisher) -----customer.purchase--------> [Direct Exchange] -----|
                                                                               |____________________ |      Queue - 2        |
                                                                                                     | customer.purchase     |                             
       
        -   Direct exchange will route the message to the Queue-2  with customer.purchase as the routing key, other queue does not receieve the message
        
    > Fanout exchange - Here the routing key is ignored and message is routed to all bound queues

                                                                                    _____________________________ { Queue - 1 }
                                                                                    |
            (Publisher) --------------------------> [ Fanout Exchange ] ------------|____________________________ { Queue - 2}
                                                                                    |
                                                                                    |____________________________ { Queue - 3 }

            - Here every queue will receive a copy of the message

    > Topic exchange : Here messages are routed based on patterns in  the routing key
                                                                                             ____________ |   Queue - 1  |   
                                                                                            |             | customer.#   |
                                                                                            |
                                                                                            |
            (Publisher) ------customer.purchase.cancelled-----> [ Topic Exchange ]----------|____________ |       Queue - 2      |
                                                                                            |             | *.purchase.cancelled |
                                                                                            |
                                                                                            |____________ |     Queue - 3     | 
                                                                                                          | premiumcustomer.# |  
            

            - For queue-1 the binding is with the hash (#), this binding will match zero or more words in the routing key
            - For queue -2 asterik is used, which will match a single word
            - For queue-3, it will not match any word and message will not be received


    > Headers Exchange: It will ignore the routing key and look at the headers sent with the message, A queue needs to decide if it needs to match all or any of these headers

                                                                                                       _____________ |                  Queue-1                      |
                                                                                                      |              |entity: order, action: cancelled, x-match: all |
                                |   entity: order   |                                                 |
                                | action: cancelled |                                                 |
            (Publisher) -------------------------------------> [ Headers Exchange ]-------------------|
                                                                                                      |___________  |               Queue-2                         |
                                                                                                      |             |entity: order, action: confirmed, x-match: all |
                                                                                                      |
                                                                                                      |
                                                                                                      |
                                                                                                      |_________   |               Queue-3                         |
                                                                                                                   |entity: order, action: confirmed, x-match: any |

            - Queue-1, x-match all indicates queue must match all the headers
            - Queue-2, x-match all will not receive the message
            - Queue-3, x-match any will receive the message, here not all of them, but atleast one of them matches

    > Exchange use cases:
        1. Fanout: It will broadcast message to all bound queues. A good example a service announcement need to send all connected mobile devices
        2. Direct: Image upload, based on the routing key, message can be forwarded to thumbnail worker or the facial recognition service
        3. Topic: When routing key is constructed dynamically

    > Note: RabbitMQ will perform loadbalancing on consumers and not on queues. If two consumers are connected to the same queue, they will receive message one after the other




## Installation
    > Use the CloudAMQP free service
    > Or use docker