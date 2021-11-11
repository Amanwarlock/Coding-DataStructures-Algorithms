# Angular


## Components

    ### Component Selector
        > By element -- @Component({ selector: 'app-server'}), HTML -> <app-server></app-server>
        > By attribute --> @Component({ selector: '[app-server]'}), HTML -> <div app-server></div>
        > By class --> @Component({ selector: '.app-server'}), HTML -> <div class='app-server'></div>

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

## Angular-CLI

    > Component
        > Generating a component using CLI
            - ng g c <path/name> --module=<module-name> --skip-tests --flat --dry-run