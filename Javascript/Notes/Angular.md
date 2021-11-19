# Angular


## Resources

    ## Github Repos
        > https://github.com/mschwarzmueller/RecipeBook

## Components

    ### Component Selector
        > By element -- @Component({ selector: 'app-server'}), HTML -> <app-server></app-server>
        > By attribute --> @Component({ selector: '[app-server]'}), HTML -> <div app-server></div>
        > By class --> @Component({ selector: '.app-server'}), HTML -> <div class='app-server'></div>

    ## Components Communication
        > Component interaction is normally between parents and children and vice-versa
        
        > Outside of hierarchy interaction is normally handled with routing or Data Services

        > There are three basic ways of cross component interaction
            1. Using Event Emitters (Input and Output event emitters) (parent-to- Child and vice-versa communication only)
            2. Using Routing - With routing we can pass data around
            3. Using Services (Data service) - Can create a Singleton instance, or use RxJS subjects to react to changes

        (Discussed in detail below)
    
    ## Binding to Custom Properties (Communication)

            import {Input} from '@angular/core';
            // component
            export class Item{
                @Input() element: {name: string, description: string};
            }

            // In HTML
            <app-item *ngFor="let item of itemList"  [element]="item"> </app-item>

        > Using Aliases
            - Note aliases are used for outside components. Inside the component variable name is used
            - When exposed a component property with aliases using Input() decorator, outside components must perform property binding on the alias name now.

            Example: 

                // component
                export class Item {
                    @Input('anotherItem) element: {name: string, description: string};
                }

                // HTML
                <app-item *ngFor="let item of itemList"  [anotherItem]="item"> </app-item>

    ## Binding to custom Events

            // Parent HTML
            <app-item (onServerAdded)='newServerHandler($event)'> </app-item>

            // Parent Component
            class Parent{
                newServerHandler(newServer: {name: string, description: string}){
                    // business logic
                }
            }

            // Child COmponent
            import {Output, EventEmitter} from '@angular/core';
            
            class Item{
                @Output() onServerAdded = new EventEmitter<{name: string, description: string}>();

                name: String;
                description: string;

                onAddServer(){
                    this.onServerAdded.emit({name: this.name, description: this.description});
                }
            }

        > Using aliases (Similar to Input() decorator)
            - When exposed a component property with aliases using Output() decorator, outside components must perform property binding on the alias name now.

                @Output('newServer') onServerAdded = new EventEmitter<{name: string, description: string}>();

                <app-item (newServer)='newServerHandler($event)'> </app-item>
## Data Binding
    > Databinding = communication

    > Three types of data binding
        1. String Interpolation / Property binding (from typescript to HTML template)
        2. Event Binding ( from HTML template to Typescript / Business logic) (React to user events)
            - (event)="expression"
        3. Two-way Binding --> [(ngModel)]="data"
    >           
        |                       |           output data             |               |
        |      Typescript       |  -------------------------->      |     HTML      |
        |   (Business Logic)    |                                   |   Template    |
        |                       |                                   |               |
    
    > [TYPE-1] Two ways:
        1. String Interpolation --> {{data}}
        2. Property Binding --> [property]="data"
            - Ex: <button [disabled]="isDisabled">Demo</button>

    > [TYPE-II] Event Binding
        - <button (click)="onClickDemo()">Demo</button>
        - <input (input)="onUserInput($event)"/> --> In typescript need to cast--> this.name = (<HTMLInputElement>event.target).value

    > [TYPE-III] Two-Binding
        > For two-binding to work--> import { FormsModule } from '@angular/forms'; 

    NOTE:
        > Consider example:
            >  DOM attribute binding using string interpolation example:
                    $ <img src="{{receipe.imagePath}}">

            > DOM attribute data binding using property binding example
                    $ <img [src]="receipe.imagePath">

## Directives

    > Ex: <p appTurnGreen > Receives green color</p>

    > Ex: @Directive({
        selector: '[appTurnGreen]'  --> attribute selector
    })

    > Built-In Directives:::
        > ngIf
            - Example: <p *ngIf="isHide"> Hide Me </p>

        > ngIf else example:
                <p *ngIf="hasData; else noData"> Showing data....<p>
                <ng-template #noData>
                    <p> No Data </p>
                </ng-template>

        > ngStyle
            - ngStyle is used with property binding
            - ngStyle takes javascript object key-value pairs
            - object props can be CSS classes
            - allows to dynamically assign values to css classes (vs ngClass)
            - some class naming example
                - if valid css classes then enclose in quotes ex: 'background-color'
                    otherwise use camel case i,e. backgroundColor
            
            <p [ngStyle]="{backgroundColor: getColor()}"> Server status </p>

                        or
            
            <p [ngStyle]="{'background-color': getColor()}"> Server status </p>

        > ngClass
            - allows to dynamically add or remove css classes (ngStyle adds or removes or assigns values to classes dynamically)
            - Also works only with property binding
            - takes js object, where key is the class name and value is a boolean condition that specifies whether to add or remove the class
            - no quotes needed if one word, but if multiword with dash - separated, then use quotes

            <p [ngClass]="{ online: serverStatus === 'online'}">

            <p [ngClass]="{ 'online-server': serverStatus === 'online'}">

        > <div *ngFor="let item of itemList; let i = index"> {i} - {item} </div>


## Typescript

    > Typescript shortcut for variable assignment via constructor during instance creation

        [METHOD-1]

                export class ReceipeModel {

                    public name: string;
                    public amount: number;

                    constructor(name: string, amount: number){
                        this.name = name;
                        this.amount = amount;
                    }
                }

        [METHOD-2]  Shortcut

                export class ReceipeModel {

                    constructor(public name: string, public amount: number){
                       
                    }
                }      

## Local Template References

    > Local references / template local references are used only inside the HTML, but they can also be passed to the Typescript classes
        - Example

            // HTML

            <input type='text' #serverName>
                
                {{serverName.value}}

            <button (click)="onAddServer(serverName)"></button>

            // Typescript

            onAddServer(serverName: HTMLInputElement)


## @ViewChild()

    NOTE:
        - For Angular 8+
            - If accessing element inside ngOnInit, we need to set {static: true}
            - If not accessing inside ngOnInit; but anywhere else inside the component, then set {static: false}
        - For Angular 9+
            - Only need to add {static:true} if needed, but do not have to add {static:false}

    > Syntax:
            $ @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef

    > ViewChild is used to get access or reference to the HTML element from inside the TypeScript code.

    > Example: Usage
         
         // HTML
         <input type='text' #serverName> // local reference variable

        // Typescript
          $ import {ElementRef, ViewChild} from '@angular/core';

          export class ServerComponent{

              @ViewChild('serverName', {static: false}) serverName: ElementRef;

              onAddServer(){
                  console.log(this.serverName.nativeElement.value)
              }
          }


## [NOTE] - How to access HTML elements inside Typescript (Component)
    > There are two ways:
        1. Local References
            - Use and create local reference in HTML and pass these references from HTML to the typescript via a function as an argument
        
        2. @ViewChild()


## ngContent

    > In angular, anything between the opening and closing tag of elements/components is lost
    > We pass data using propert binding
    > But using ng-content data between the tags can be projected to the component HTML just like passing data to a child component using custom property binding

    > Example:

        // Parent HTML of Parent Component
        <app-server>
                // between the tags
                <p>Hello Server !<p>
        </app-server>

        // Child Component - Server Component;s HTML

        <div>
            <header>Server </header>
            <ng-content></ng-content>
        </div>

    > ng-content acts like a placeholder that marks place in HTML for projection of content


## @ContentChild
    NOTE:
        - For Angular 8+
            - If accessing element inside ngOnInit, we need to set {static: true}
            - If not accessing inside ngOnInit; but anywhere else inside the component, then set {static: false}
        - For Angular 9+
            - Only need to add {static:true} if needed, but do not have to add {static:false}

     > Syntax:
            $ @ContentChild('serverContent', {static: true}) serverContent: ElementRef

    > using ng-content we can project data that is between opening and closing tags to the target element
    
    > We can access this projected content in the target component in the ngAfterContentInit lifecycle hook using @ContentChild

    > Example

            // Parent HTML - which is projecting
            <app-server>
                // between the tags
                <p #serverContent > Hello Server !<p>  //----> (note the local reference)
            </app-server>

            // Target Component HTML
            <div>
                <header>Server </header>
                <ng-content></ng-content>
             </div>

            // Target Component TypeScript
            import {ContentChild} from '@angular/core';
            export class ServerComponent implements AfterContentInit

                @ContentChild('serverContent', {static: false}) serverContent: ElementRef

                ngAfterContentInit(){
                    console.log(this.serverContent.nativeElement.textContent)
                }
## Component Lifecycle

    > When a component is created / instantiated, angular provides different methods to hook into the different phases that occur during the instantiation
    
    > We can hook into different phases of instantiation

    > Remember, before any hook constructor is called

    > Lifecycle Hooks

        - Phase-1: ngOnChanges
                - This is called first time the component is created
                - This also called whenever a bound input property changes later on

        - Phase-2: ngOnInit
                - This is called once the component is initialized
                - It runs after the constructor
                - Here the view is not ready yet, only the object/instance is created

        - Phase-3: ngDoCheck
                - This is called on every change detection cycle
                - Change detection cycle runs when an event is fired (like click of button etc), when ever a property is changed

        - Phase-4: ngAfterContentInit
                - This is called after content (ng-content) has been projected into the view

        - Phase-5: ngAfterContentChecked
                - Called everytime the projected content has beenn checked

        - Phase-6: ngAfterViewInit
                - Called once the current component's view (and child views) has been initialized
            
        - Phase-7: ngAfterViewChecked
                - called everytime the view and child views have been checked
        
        - Phase-8: ngOnDestroy
                - Called once the component is about to be destroyed
         

## Intercomponent Communication (Cross component communication)

    ### Using DataService with Event Emitters

        // Data Service provided at the top level (App module)
           
            import {EventEmitter} from '@angular/core';
           
            @Injectable()
            export class DataService{

                statusUpdated = new EventEmitter<string>();

                onNewReceeipe = new EventEmitter<receipe>()

                private receipeList = [... data] // cant be accessed outside

                getReceipeList(){
                    return this.receipeList.slice() // returns a copy and not the original array
                }

                addReceipe(receipe){
                    this.receipeList.push(receipe); // Adding new item only updates the array here, in component
                                                    // view we have a clone hence in dom it will not reflect
                                                    // fire an event here so that component can fetch a new copy
                    this.onNewReceipe.emit()
                }
            }

        // Component A - which emits the events
            
            @Component()
            export class A{

                onAddServer(){
                    this.dataService.statusUpdated.emit('online');
                }
            }

        // Component B - listening to the events

            @Component()
            export class B {

                constructor(private dataService: DataService){
                    this.dataService.statusUpdated.subscribe(status=>{
                        // business logic
                    })
                }
            }


    ### Using DataService with Observables

        // Data Service provided at the top level (App module)
           
            import {Subject} from 'rxjs';
           
            @Injectable()
            export class DataService{

                statusUpdated = new Subject<string>();

            }

        // Component A - which emits subject
            
            @Component()
            export class A{

                onAddServer(){
                    this.dataService.statusUpdated.next('online');
                }
            }

        // Component B - listening to the subjects

            import {Subscription} from 'rxjs'

            @Component()
            export class B {

                statusSubscription: Subscription;

                constructor(private dataService: DataService){
                   this.statusSubscription =  this.dataService.statusUpdated.subscribe(status=>{
                        // business logic
                    })
                }

                ngOnDestroy(){
                    this.statusSubscription.unsubscribe();
                }
            }




## Services:

    > From Angular 6+, instead of wiring up services in providers[] array, we can use @Injectable(providedIn: 'root')
    
    > The advantage of using @Injectable is as follows:
        1. Services can be loaded lazily by angular behind the scenes
        2. Redundant code can be removed automatically -  Tree shaking  

## Angular-CLI

    > Component
        > Generating a component using CLI
            - ng g c <path/name> --module=<module-name> --skip-tests --flat --dry-run



## QUESTIONS

    > Difference between RxJS and Promises

    > What are Tree shakable components

    > Explain JIT (Just in time) and AOT compilers?

    > Explain IVY renderer?

    > Know observables like pipe, map, subject, share, replay, tap

    > Know about webpack?

    > Modern HTML elements like tags etc?

    > Template driven vs Reactive forms?

    > What are pipes? (pure pipe, safe pipe etc)