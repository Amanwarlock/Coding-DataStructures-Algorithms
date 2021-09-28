/**
 * @description
 * Name: Factory Design Pattern
 * Category :  Creational Design Pattern
 * Task: Factory pattern is a object that creates other objects
 */

/**
 * @description ENUMS
 */
const enums = {
   "DEVELOPER": "Developer" ,
    "TESTER": "Tester"
}


/**
 * @description BASE CLASS
 */
class Employee {
    _name;
    _type;
    
    set name(employeeName){
        this._name = employeeName;
    }

    get name(){
        return this._name;
    }

    set type(typ){
        this._type = typ;
    }

    get type(){
        return this._type;
    }
}

// Derived class
class Developer extends Employee {
    constructor(name){
        super();
        this.name = name;
        this.type = enums.DEVELOPER;
    }
}

// Derived class
class Tester extends Employee {
    constructor(name){
        super();
        this.name = name;
        this.type = enums.TESTER;
    }
}

class EmployeeFactory {
    // All factories have create method;
    create(name, type){
        switch(type){
            case enums.DEVELOPER: 
                return new Developer(name);
                break;
            case enums.TESTER:
                    return new Tester(name);
                    break;
        }
    }
}

let employees = [];

const factory = new EmployeeFactory();

employees.push(factory.create('Aman', enums.DEVELOPER));
employees.push(factory.create('Bob', enums.TESTER));

for(let emp of employees){
    console.log(`I am ${emp.name} and I'm a ${emp.type}`);
}