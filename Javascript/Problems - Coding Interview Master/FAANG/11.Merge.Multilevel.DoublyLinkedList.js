/*
NOTE: The beginning portion builds our test case linked list. Scroll down to the section titled Our Solution for the code solution!

  LINK: https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/

  You are given a doubly linked list which in addition to the next and previous pointers, it could have a child pointer, which may or may not point to a separate 
  doubly linked list. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure, as shown in the example below.

Flatten the list so that all the nodes appear in a single-level, doubly linked list. You are given the head of the first level of the list.

 */

class ListNode {
    constructor(val, next = null, prev = null, child = null) {
      this.val = val;
      this.next = next;
      this.prev = prev;
      this.child = child;
    }
  }
  
  // ---- Generate our linked list ----
  const nodes = [1, [2, 7, [8, 10, 11], 9], 3, 4, [5, 12, 13], 6]
  
  const buildMultiLevel = function(nodes) {
    const head = new ListNode(nodes[0]);
    let currentNode = head;
  
    for(let i = 1; i < nodes.length; i++) {
      const val = nodes[i];
      let nextNode;
  
      if(Array.isArray(val)) {
        nextNode = buildMultiLevel(val);
        currentNode.child = nextNode;
        continue;
      }
  
      nextNode = new ListNode(val);
      currentNode.next = nextNode;
      nextNode.prev = currentNode;
      currentNode = nextNode;
    }
    
    return head;
  }
  
  let multiLinkedList = buildMultiLevel(nodes);
  
  // ---- Generate our linked list ----
  
  const printListMulti = head => {
    if(!head) {
      return;
    }
  
    console.log(head.val)
  
    if(head.child) {
      printListMulti(head.child);
    }
  
    printListMulti(head.next);
  }
  
  const printList = head => {
    if(!head) {
      return;
    }
  
    console.log(head.val);
    
    printList(head.next);
  }
  
  // --------- Our solution -----------
  
  var flatten = function (head) {
    if (!head) return head;
  
    let currentNode = head;
    while (currentNode !== null) {
      if (currentNode.child === null) {
        currentNode = currentNode.next;
      } else {
        let tail = currentNode.child;
        while (tail.next !== null) {
          tail = tail.next;
        }
  
        tail.next = currentNode.next;
        if (tail.next !== null) {
          tail.next.prev = tail;
        }
  
        currentNode.next = currentNode.child;
        currentNode.next.prev = currentNode;
        currentNode.child = null;
      }
    }
  
    return head;
  };
  
  printListMulti(multiLinkedList);
  console.log('after flatten');
  printList(flatten(multiLinkedList));