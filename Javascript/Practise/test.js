/**
 * 
 * 
 *  T: O(1)
 *  S: 0()
 * 
 *   [4, 2, 1, 9, 8, 10] -- 10--> min
 * 
 *    [ {val: 4, min: 4}, { val: 2, min: 2} ......]
 * 
 */



class Stack{

    _stack = null;

    _minStack;

    constructor(){
        this._stack = [];
    }

    push(val){
        let newMin = Math.min(val, this._min());
        this._stack.push({val: val, min: newMin});
    }

    pop(){
        return this._stack.pop();
    }

    isEmpty(){
        return this._stack.length === 0;
    }

    peekMin(){
        if(this.isEmpty()){
            throw new Error("No Items FOund");
        }else{
            return this._min();
        }
    }

    peek(){
        if(this.isEmpty()){
            throw new Error("No Items FOund");
        }else{
            return this._stack[this._stack.length-1];
        }
    }


    _min(){
        if(this._stack.length === 0){
            return Number.MAX_VALUE;
        }else{
            return this.peek().min;
        }
    }

}


const myStack = new Stack();

myStack.push(4);
console.log("min ", myStack.peekMin());
myStack.push(2);
console.log("min ", myStack.peekMin());
myStack.push(1);
console.log("min ", myStack.peekMin());
myStack.push(9);
console.log("min ", myStack.peekMin());

myStack.pop();
console.log("min ", myStack.peekMin());

myStack.pop();
console.log("min ", myStack.peekMin());

myStack.pop();
console.log("min ", myStack.peekMin());

try{
    myStack.pop();
    console.log("min ", myStack.peekMin());
}catch(e){

}



