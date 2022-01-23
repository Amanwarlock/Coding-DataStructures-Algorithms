class Queue {
   
    oldestStack;
    newestStack;

    constructor(){
        this.oldestStack = [];
        this.newestStack = [];
    }

    push(v){
        this.newestStack.push(v);
    }

    size(){
        return this.oldestStack.length + this.newestStack.length;
    }

    shiftStacks(){
        if(this.oldestStack.length === 0){
            while(this.newestStack.length !== 0) {
                this.oldestStack.push(this.newestStack.pop());
            }
        }
    }

    pop(){
        this.shiftStacks();
        return this.oldestStack.pop();
    }

    peek(){
        this.shiftStacks();
        return this.oldestStack.peek();
    }
}



const myQueue = new Queue();

myQueue.push(5);
myQueue.push(6);
myQueue.push(7);
myQueue.push(8);
myQueue.push(9);

console.log("popped : " , myQueue.pop());
console.log("popped : " , myQueue.pop());
console.log("popped : " , myQueue.pop());
console.log("popped : " , myQueue.pop());
console.log("popped : " , myQueue.pop());
