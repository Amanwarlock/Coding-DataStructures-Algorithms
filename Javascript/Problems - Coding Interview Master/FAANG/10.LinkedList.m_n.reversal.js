/*
LINK: https://leetcode.com/problems/reverse-linked-list-ii/
NOTE: The beginning portion builds our test case linked list. Scroll down to the section titled Our Solution for the code solution!
Given the head of a singly linked list and two integers left and right where left <= right, 
reverse the nodes of the list from position left to position right, and return the reversed list.
 */

class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  // ---- Generate our linked list ----
  const linkedList = [5, 4, 3, 2, 1].reduce((acc, val) => new ListNode(val, acc), null);
  
  // ---- Generate our linked list ----
  
  const printList = (head) => {
    if(!head) {
      return;
    }
  
    console.log(head.val);
    printList(head.next);
  }
  
  // --------- Our solution -----------
  
  var reverseBetween = function(head, m, n) {
    let currentPos = 1, currentNode = head;
    let start = head;
    
    while(currentPos < m) {
      start = currentNode;
      currentNode = currentNode.next;
      currentPos++;
    }
    
    let newList = null; // head of newList; 
    let tail = currentNode;
    
    while(currentPos >= m && currentPos <= n) {
      const next = currentNode.next;
      currentNode.next = newList;
      newList = currentNode;
      currentNode = next;
      currentPos++;
    }
    
    start.next = newList; // If m = head index (start of linked List) , then start and tail will be same. As start and tail was pointing to head, which now is at the end (tail)
    tail.next = currentNode;
    
    if(m > 1) {
      return head
    } else {
      return newList;
    }
  };
  
  printList(linkedList);
  console.log('after reverse');
  printList(reverseBetween(linkedList, 2, 4));
  