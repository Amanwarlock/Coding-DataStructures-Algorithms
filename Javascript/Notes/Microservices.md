# Microservices Architecture

## Basic Principles
    > One microservice should be responsible for addressing only one concern (should do only one task)
    > It should be possible to develop and deploy a microservice completely independent from all other parts of an application
    > Microservices should communicate using standard HTTP methods

## Applications:
    > New developers don't have to understand the whole application
    > Services can be developed and deployed by completely different teams
    > Services can be developed with the language that does a given task best
    > If a service fails, the whole app does not have to fail

## Drawbacks:
    > Posside code redundancy
    > Harder to roll out new versions (if microservices are dependent on each other)
    > Hard to test
    > Complexity is moved to the network layer (distributed over the network)
    > Hard to monitor end-to-end

## History of Service Oriented Architectures:
    > Until 20-30 years ago, architectures were strictly monolithic. Which means they consisted of one sigle application
    > If we want to modify code, we had to checkout the entire application from the version control system
    > And when change was ready for production, it was deployed with the whole application as well
    > These applications also run on the single server.
    > The program logic was also tightly coupled

## Service Registry:
    > As in microservices the tasks / entities are split across different services, there should be a way to discover them
    > All microservices are registered with the service registry (ex redis) (end point information is stored for routing request. Services need to query it to get the endpoint)
    > Service registry keeps track of microservices and knows where to find them in the infrastructure
    > A microservice can have multiple instances (can be an unknown number of instances), in that case service registry will not always return the same endpoint, rather it performs load balancing i.e, tries to distribute the load either randomly or by round robin scheduling

## Previous Microservice Experience:
    > Redis used as the Service registry. Tells where to find the services


