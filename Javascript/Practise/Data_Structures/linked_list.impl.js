/**
 *  1. Fn append (at last position)
 *  2. Fn prepend (at begining)
 *  3. Search
 *  4. Insert
 *  5. Remove
 *  6. Reverse
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    this.printList();
    console.log(this);
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    this.printList();
    console.log(this);
    return this;
  }

  insert(index, value) {
    let prevNode = this.traverseToIndex(index - 1);
    let nextNode = prevNode.next;
    let newNode = new Node(value);
    prevNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
    this.printList();
    return this;
  }

  remove(index) {
    const prevNode = this.traverseToIndex(index - 1);
    const unwantedNode = prevNode.next;
    const nextNode = unwantedNode.next;
    prevNode.next = nextNode;
    this.length--;
    this.printList();
    return this;
  }

  search(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        console.log("FOUND ::: ", currentNode);
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    console.log("NOT FOUND ::: ", currentNode);
    return undefined;
  }

  reverse() {
    let prevNode = null;
    let currentNode = this.head;
    this.tail = this.head;
    while (currentNode) {
        let nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
    }
    this.head = prevNode;
    console.log(this);
    this.printList();
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  printList() {
    let arr = [];
    let currentNode = this.head;
    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log("Linked List ::: ", arr);
  }
}

const myLinkedList = new LinkedList();
myLinkedList.append(10);
myLinkedList.append(20);
myLinkedList.prepend(5);
myLinkedList.append(30);
myLinkedList.insert(2, 15);
myLinkedList.insert(4, 25);
myLinkedList.remove(2);
myLinkedList.remove(2);
myLinkedList.search(5);
myLinkedList.search(10);
myLinkedList.search(100);
myLinkedList.reverse();
