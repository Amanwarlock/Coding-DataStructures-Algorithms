class Stack {
    
    constructor(capacity){
        this._stack = [];
        this._capacity = capacity;
    }

    _stack;
    _capacity = 0;
    _size = 0;

    push(val){
        this._stack.push(val);
        this._size ++;
    }

    pop(){
        let v = this._stack.pop();
        this._size --;
        return v;
    }

    isFull(){
        return this._size === this._capacity;
    }

    isEmpty(){
        return this._size === 0;
    }

}


class StackOfPlates {

    constructor(capacity){
        this._stacks = [];
        this._capacity = capacity;
    }

    _stacks;
    _capacity = 0;

    getLastStack(){
        return this._stacks[this._stacks.length-1];
    }

    push(v){
        let last = this.getLastStack();
        if(last !== null && last !== undefined && !last.isFull()){
            last.push(v);
        }else{
            let newStack = new Stack(this._capacity);
            newStack.push(v);
            this._stacks.push(newStack);
        }
    }

    pop(){
        let last = this.getLastStack();

        if(last === null) return null; // or throw exception 

        let v = last.pop();

        if(last.isEmpty()) this._stacks.pop();

        return v;
    }
}


const myStackOfPlates = new StackOfPlates(3);

myStackOfPlates.push(2);
myStackOfPlates.push(2);
myStackOfPlates.push(2);
myStackOfPlates.push(3);
myStackOfPlates.push(3);
myStackOfPlates.push(3);
myStackOfPlates.push(4);
myStackOfPlates.push(4);

console.log("Stack of plates : ", myStackOfPlates._stacks);


console.log("Stack of plates popped : ", myStackOfPlates.pop(), myStackOfPlates._stacks);
console.log("Stack of plates popped : ", myStackOfPlates.pop(), myStackOfPlates._stacks);
console.log("Stack of plates popped : ", myStackOfPlates.pop(), myStackOfPlates._stacks);
console.log("Stack of plates popped : ", myStackOfPlates.pop(), myStackOfPlates._stacks);
console.log("Stack of plates popped : ", myStackOfPlates.pop(), myStackOfPlates._stacks);
console.log("Stack of plates popped : ", myStackOfPlates.pop(), myStackOfPlates._stacks);
console.log("Stack of plates popped : ", myStackOfPlates.pop(), myStackOfPlates._stacks);
console.log("Stack of plates popped : ", myStackOfPlates.pop(), myStackOfPlates._stacks);