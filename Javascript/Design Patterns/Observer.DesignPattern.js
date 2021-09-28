class Subject{
    constructor(){
        this._observers = [];
    }

    subscribe(fn){
        this._observers.push(fn);
    }

    unsubscribe(fn){
        this._observers = this._observers.filter(f => fn !== f ? true: false);
    }

    fire(){
        this._observers.forEach(fn => fn.call());
    }
}

const mySub = new Subject();

function observer1(){
    console.log("Running observer 1");
}

function observer2(){
    console.log("Running observer 2");
}

mySub.subscribe(observer1);
mySub.subscribe(observer2);

//mySub.unsubscribe(observer2);

mySub.fire();