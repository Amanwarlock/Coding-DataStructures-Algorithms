class Stack {
     _stack;

     constructor(){
         this._stack = [];
     }

     push(node){
        this._stack.push(node);
     }

     pop(){
        return this._stack.pop();
     }

     peek(){
        return this._stack[this._stack.length-1];
     }

     isEmpty(){
        return this._stack.length === 0;
     }
}


class MinStack extends Stack {


    push(val){
        let minVal = Math.min(val, this.min());
        super.push(new Node(val, minVal))
    }

    pop(){
        return super.pop();
    }

    min(){
        if(this.isEmpty()){
            return Number.MAX_VALUE;
        }else{
            return super.peek()?.min;
        }
    }

    isEmpty(){
        return super.isEmpty();
    }


}

class Node{
    
    value;
    min;
    
    constructor(value, minVal){
        this.value = value;
        this.min = minVal;
    }
}



const myMinStack = new MinStack();

myMinStack.push(5);
myMinStack.push(10);
myMinStack.push(1);
myMinStack.push(2);
myMinStack.push(7);


while(!myMinStack.isEmpty()){
    console.log("Min : ", myMinStack.pop());
}

//------------------------------------------------------------------------------------------------------------------------------------------

class MinStack2 extends Stack {

    s2;

    constructor(){
        super();
        this.s2 = new Stack();
    }
    
    push(val){
        if(val <= this.min()){
            this.s2.push(val);
        }
        super.push(val);
    }

    pop(){
        let val = super.pop();
        if(val === this.min()){
            this.s2.pop();
        }

        return val;
    }

    isEmpty(){
        return super.isEmpty();
    }

    min(){
        if(this.s2.isEmpty()){
            return Number.MAX_VALUE;
        }else{
            return this.s2.peek();
        }
    }
}


const myMinStack2 = new MinStack2();

myMinStack2.push(5);
myMinStack2.push(10);
myMinStack2.push(1);
myMinStack2.push(2);
myMinStack2.push(7);


while(!myMinStack2.isEmpty()){
    console.log("Min : ", myMinStack2.pop(), myMinStack2.min());
}