# Apache Kafka

## Resources:
    1. YouTube: https://www.youtube.com/watch?v=R873BlNVUB4&list=WL&index=45

## Overview:
    > Kafka flink
    > Kafka streams 
    > Apache spark etc

## Introduction (Kafka Streams)
    > Kafka is used for stream processing. It is a client library for building streaming applications
    > There are many stream processing patterns
    > Stream processing deals with unbounded data sets (we do no know when it will end) and one record at a time
    > It has low latency
    > For stream processing pipelines are used. For ex Input pipeline, processing pipeline and output pipeline
   
    > Usage: (of stream processing)
        1. Data marshalling - Analysising the data and routing it accordingly
        2. Analytics
       
    > Challenges:
        1. Horizontal scaling (because of unbounded data)


## Streams DSL
    > Built on top of Kafka stream processor API as a High level abstraction layer
    > Map / reduce functionality


## Kafka

    > Kafka has a produces, kafka broker (server), consumer

    > Inside kafka broker there are topics (Topic A, Topic B)

    > Topics are logical partitions

    > A producer produces to a topic and a consumer consumes from a particular topic