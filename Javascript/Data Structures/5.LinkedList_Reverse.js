
/**
 *  prepend -> O(1)
 *  append -> O(1)
 *  lookup -> O(n)
 *  insert -> O(n)
 *  delete -> O(n)
 */

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
      const newNode = {
        value: value,
        next: null
      }
      console.log(newNode)
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    prepend(value) {
      const newNode = {
        value: value,
        next: null
      }
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
    printList() {
      const array = [];
      let currentNode = this.head;
      while(currentNode !== null){
          array.push(currentNode.value)
          currentNode = currentNode.next
      }
      console.log("Print List : ", array);
      return array;
    }
    insert(index, value){
      //Check for proper parameters;
      if(index >= this.length) {
        console.log('yes')
        return this.append(value);
      }
      
      const newNode = {
        value: value,
        next: null
      }
      const leader = this.traverseToIndex(index-1);
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer;
      this.length++;
      return this.printList();
    }
    traverseToIndex(index) {
      //Check parameters
      let counter = 0;
      let currentNode = this.head;
      while(counter !== index){
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
    remove(index) {
      // Check Parameters      
      const leader = this.traverseToIndex(index-1);
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      this.length--;
      return this.printList();
    }
    /**
     *@description NOTE 
     *  - For reversing, we only need to change pointers (Don't think of swapping. There is no swapping)
     *  - For reversing, we need references to: prev node, curr node, next node; 
     */
    reverse() {
      if (!this.head.next) {
        return this.head;
      }
      let first = this.head; 
      this.tail = this.head;
      let second = first.next;
  
      while(second) {
        const temp = second.next; // actually its the next node;
        second.next = first; // current node;
        first = second; // update prev node to point to current node for the next iteration
        second = temp; // point the current node to the next node for next iteration;
      }
  
      this.head.next = null;
      this.head = first;
      return this.printList();
    }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.printList()
//myLinkedList.insert(2, 99)
//myLinkedList.insert(20, 88)
myLinkedList.printList()
//myLinkedList.remove(2)
myLinkedList.reverse()


