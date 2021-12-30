# Spring Framework

## Github

    > https://github.com/in28minutes/spring-master-class


## Setting Up Project

    > For setting up spring project we will use spring initializer
        - https://start.spring.io/


## Why Spring

    > To loosely couple code
    > Have dependency injection mechanism
    > Core concepts of spring are loose coupling and dependency injection


## What is a Bean?

    > Bean is an instance of an object (class)

    > ex: Employee emp = new Employee() --> This is a bean of employee type

    > To spring we need to tell three things:
        - What are the beans it need to manage (@Component)
        - What are the dependencies for these beans (@Autowired)
        - Where to search for beans -- This is known as component scan

    > How to let spring know what are beans?
        - use @Component annotation

                @Component
                class Employee{

                } 
    
    > @Autowired - What are the dependencies for these beans

            @Component
                class Employee{

                    @Autowired
                    private Logger logger;

                    Employee(Logger logger){
                        super();
                        this.logger = logger;
                    }
                } 

        - Autowiring happens via constructor (i.e, at instance creation we pass instance of dependencies) also known as constructor injection

    > Component Scan - Where to search for beans?

        - By default its the current file package
        - Spring will search this package and its subpackages

## Application Context

    > In spring we are creating beans

    > All these beans are managed and maintained by spring application context (beans are present and managed by application context)

    > We need to get beans from spring application context

    > So the main spring application file, we have SpringApplication.run() function, this returns ApplicationContext instance

        Example: ApplicationContext appContext = SpringApplication.run(LearningSpringApplication.class, args);

        EmployeeImpl emp = appContext.getBean(EmployeeImpl.class);  (This is singleton by default. Once instance is created, same instance is returned when asked) 


## Autowiring

    > There are two ways of autowiring - providing dependency injection for beans

        1. Constructor injection
        2. Setter injection

    > If a bean has a constructor with dependency argument then constructor injection is used

    > If there is no constructor, a setter method with dependency argument is used

    > Also, note that in absence of constructor, you can even skip the setter function, spring will create and use it under the hood

    > Use constructor injection for mandatory dependecies without which the bean cannot function

    > Use setter injection for optional dependencies

## Autowiring - @Primary  dynamic autowiring and autowiring by name

    > In spring, for a bean if there is dependency and there are two beans of same type that is implementing this dependency,
        then there is conflict

    > Spring throws error --> need only single bean but found two (when mulitple beans are found)

    > [METHOD-1]: We can use @Primary to mark one of the dependency as main / primary

            @Component
                class Employee{

                    @Autowired
                    private Logger logger;

                    Employee(Logger logger){
                        super();
                        this.logger = logger;
                    }
                } 

            // Interface
            interface Logger {

            }
            
            @Component
            @Primary
            class LoggerOne implements Logger{

            }

            @Component
            class LoggerTwo implements Logger{
                
            }

    > [METHOD-2] We can autowire by name --> In this case we are not using @primary, but while injecting we are specifically asking by class name (check Employee Class)

            // Interface
            interface Logger {

            }

            @Component
            class LoggerOne implements Logger{

            }

            @Component
            class LoggerTwo implements Logger{
                
            }

            @Component
            class Employee{

                    @Autowired
                    private Logger LoggerOne;  // or private Logger LoggerTwo --> Here instead of primary, we are autowiring by name

                    Employee(Logger logger){
                        super();
                        this.logger = logger;
                    }
            } 

    > What happens when both @Primary and autowiring by name is used ? Which has higher precedence
        - @Primary has higher precedence, 
        - consider the example below where LoggerOne is @Primary, but in Employee class we are autowiring by name for LoggerTwo class. 
        - Note instance of LoggerOne will be provided as it is @Primary -> Higher precedence even though in Employee we autowired LoggerTwo by name


            // Interface
            interface Logger {

            }

            @Component
            @Primary
            class LoggerOne implements Logger{

            }

            @Component
            class LoggerTwo implements Logger{
                
            }

            @Component
            class Employee{

                    @Autowired
                    private Logger LoggerTwo;  // instance of LoggerOne will be provided as @Primary has higher precedence then autowiring by name

                    Employee(Logger logger){
                        super();
                        this.logger = logger;
                    }
            } 

    > [Method-3] Using @Qualifier , for @Qualifier we need to give a name, the name can be user defined @Qualifier("<user defined name>")


            // Interface
            interface Logger {

            }

            @Component
            @Qualifier("firstLogger")
            class LoggerOne implements Logger{

            }

            @Component
            @Qualifier("secondLogger")
            class LoggerTwo implements Logger{
                
            }

            @Component
            class Employee{

                    @Autowired
                    @Qualifier("firstLogger")   //or @Qualifier("secondLogger")    // Use qualifier and give name of the impl class whose instance is needed
                    private Logger logger; // note referenced by interface

                    Employee(Logger logger){
                        super();
                        this.logger = logger;
                    }
            } 

## Spring Modules

    > Core container modules are

            - Beans
            - Core
            - Context
            - SpEL


            |                               |                       |                                   |
            |   Data Access / Integration   |                       |               Web                 |
            |                               |                       |                                   |
            |     [JDBC]    [ORM]           |                       |       [Web sockets]     [servlet] |
            |     [OXM]     [JMS]           |                       |       [web]             [portlet] |
            |     [ Transactions ]          |                       |                                   |


            |   [AOP]           [ASPECTS]                       [Instrumentation]           [Messaging]  |


            |                                       Core Container                                       |
            |   [Beans]           [Core]                       [Context]           [SpEL]                |


            |                                           [TEST]                                           |



## Container (aka application context)

    > Container creates and manages the beans and lifecycle of the beans
    > Note container creates only one instance of a bean. It is a singleton pattern by default
    > If multiple times we request for an instance appContext.getBean(EmployeeImpl.class), same instance is returned 
    > It will not create a new instance every time


## Scope of Bean

    > In Spring beans are by default singleton  (One instance per spring context)

    > There four type of bean scopes:

            1. Singleton (singleton (lowercase)) (One instance per spring context)
            2. Prototype (prototype) - (New bean whenever requested)
            3. Request (request) - (One bean per HTTP request)
            4. Session (session) - (One bean per HTTP session)

    > Example of prototype bean

             @Component
             @Scope("prototype")
            class Employee{

                    @Autowired
                    private Logger logger; 

                    // constructor injection
                    Employee(Logger logger){
                        super();
                        this.logger = logger;
                    }
            } 


    > Note in the above example we hardcoded the prototype name which is not a good practise, Instead we should refer is using
        ConfigurableBeanFactory.SCOPE_PROTOTYPE

            @Component
             @Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
            class Employee{

                    @Autowired
                    private Logger logger; 

                    // constructor injection
                    Employee(Logger logger){
                        super();
                        this.logger = logger;
                    }
            } 

## Proxy Mode

    > Lets assume a Main class which requires singleton bean of PersonDAO class

    > The personDAO class by default is singleton and has jdbc connection as a dependency

    > Since personDAO is singleton, first time when its instance is created, jdbc instance is also created and assigned

    > But if we want a new connection of JDBC (new instance) each time we request singleton personDAO. How can we do this?

    > On jdbc class (dependency of personDAO), if we configure prototype scope, will it work? No. Because personDAO is singleton and once it is instantiated
        jdbc instance is also instantiated. Spring does not know that it has to create different with eaach access to personDAO singleton

    > To achieve this we can use proxy on the jdbc connection class

    > This ensures even if the parent is singleton and jdbc is dependency, with each access of personDAO new jdbc connection is created

            class Main {

                @Autowired
                PersonDAO personDao
            }

            // Singleton
            @Component
            class PersonDAO {

                @Autowired
                JDBCConnection jdbcConnection; // require new instance (new connection) with each access

            }

            @Component
            @Scope(value=ConfigurableBeanFactory.SCOPE_PROTOTYPE, proxyMode= ScopedProxyMode.TARGET_CLASS)
            class JDBCConnection{

            }   



## Gang of four singleton pattern Vs Spring context singleton

    > According to gang of four singleton pattern , only one instance per JVM is created

    > In spring, one instance per Spring context is created

    > Hypothetically, if there are five spring contexts, then there are five singleton instances created


## Component Scan

    > What and how will you debug if JVM or spring throws bean not found exception

    > First, I will check if my bean class has @Component annotation

    > Even if the bean has @Component annotation, and still bean is not found exception occurs, then check if your bean belongs to the same package
    as the SpringBootApplication class

    > What is SpringBootApplicationClass
        - Well, we have a main or root class in spring application with annotation @SpringBootApplication
        - To find the beans and to create instances, the container performs component scan
        - By default component scan is performed only in the package and sub packages of the SpringBootApplication class


    > Example

            - Demo  (package)
                - EmployeeDAO
            - Basics (package)
                - Student (sub-package)
                - personDAO
                - MyMainSpringApplication.java
            

            Package com.example.basics ---> By default spring performs component scan to find beans in this package and it subpackages

            @SpringBootApplication
            class MyMainSpringApplication {

                    ApplicationContext ctx = SpringApplication.run(LearningSpringApplication.class, args);
            }
         
    >  By what if we want to refer to a bean which is in a different package from the main spring bootstaping file ?

    > For this we can use @Componentscan annotation to let spring know that it should perform component scan on that additional package also which is outside
    the hierarchy

    >  Example with component scan on outside/external package


            Package com.example.basics 

            @SpringBootApplication
            @ComponentScan("com/example.demo")  --> now spring will look for beans in current package as well as the package specified here
            class MyMainSpringApplication {

                    ApplicationContext ctx = SpringApplication.run(LearningSpringApplication.class, args);
            }



## Bean Lifecycle

    > Spring IOC Container (Inversion of Control Container) creates and manages the lifecycle of the beans

    > When we put @Component annotation, IOC container manages the lifecycle of those beans

    >  What if we want to do certain things at the creation of these instances and at the time when these instances (beans) are destroyed

    > The first thing IOC container does is, it will first autowire the dependencies

    > Lifecyle of beans:

            - @PostConstruct
                  - If we want to do something when all of the dependencies in the bean are autowired
                  - As soon as the bean is created and initialized with the dependencies the post construct will be called

                    example:

                            @PostContruct 
                            public void postContruct(){

                            }

                            Note: Name of the method doesnot matter

            - @PreDestroy
                  - Called just before the bean is destroyed / removed from the IOC container



## CDI - Context and Dependency Injection

    > CDI is the interface which defines different annotations

    > CDI is an interface that defines how to do dependency injection

    > Example

        - @Inject (comparable to @Autowired)
        - @Named (comparable to @Component and @Qualifier)
        - @Singleton (Defines a scope of singleton)

    > CDI proposes different way to defining and injecting beans. Let's see the CDI way

        // Create a bean

        @Named //---> instead of @Component
        class PersonDAO{

            @Inject  // ---> instead of @Autowired
            Logger loggerOne;
        }

    > So we can use either spring annotations or CDI annotations, it does not matter. Spring implements the CDI interface



## Two ways of wiring dependencies

    > There are two different ways of wiring and setting up dependencies in spring and they are as follows:

            1. Using annotations
            2. Using XML   (before 2.5 things had to be wired manually using XML)

    NOTE: Earlier versions, beans and dependency injections are configured using XML

    NOTE: IN spring boot application (Spring boot is used overall in this notes as example to learn Spring framework)

            > All main java files (buisness logic) resides in --> src/main/java
            > Other resources such as xml and others are in --> src/main/resources


## IOC Container - Application Context vs Bean Factory

    > In spring there are two implementations of IOC container and they are as follows:
        1. Application Context
        2. Bean Factory

    > Application context provides more features than Bean Factory

    > Bean Factory only creates instances and autowires them

    > Application Context does all those things that the Bean Factory does, plus few more additional things (example: AOP, webapplication context for web applications)



## Component Annotations

    > @Component - Bean (Generic component - not specific to any layer)

    > @Repository - encapsulating storage, retrieval and search behaviour typically from a relational database (Used for data layer - getting data from DB)

    > @Service - Business Service Facade  (used for business layer)

    > @Controller - Controller in MVC pattern  (UI layer)


    NOTE: except for the component annotation, the Repository, Service and Controller are specific to the layer