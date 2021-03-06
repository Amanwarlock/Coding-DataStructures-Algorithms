/*
NOTE: The beginning portion builds our test case linked list. Scroll down to the section titled Our Solution for the code solution!
    Floyd's Tortoise and hare algorithm

    LINK: https://leetcode.com/problems/linked-list-cycle-ii/

 */

class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  // ---- Generate our linked list ----
  const linkedList = [8,7,6,5,4,3,2,1].reduce((acc, val) => new ListNode(val, acc), null);
  
  let curr = linkedList, cycleNode;
  while(curr.next !== null) {
    if(curr.val === 3) {
      cycleNode = curr;
    }
  
    curr = curr.next;
  }
  
  curr.next = cycleNode;
  // ---- Generate our linked list ----
  
  // --------- Our solution -----------
  
  /**
   * @description FLOYD's tortoise and hare algorithm
   */
  const findCycle = function(head) {
    if(!head) return null;
    
    let tortoise = head, hare = head;
    
    while(true) {
      tortoise = tortoise.next;
      hare = hare.next;
      
      if(hare === null || hare.next === null) {
        return null;
      } else {
        hare = hare.next;
      }
      
      if(tortoise === hare) break;
    }
    
    let p1 = head,
        p2 = tortoise; // or hare as they both overlapped
    
    while(p1 !== p2) {
      p1 = p1.next;
      p2 = p2.next;
    }
    
    return p2 // or p1 as they both point to the same node
  };
  
  console.log("Method - 1: ", findCycle(linkedList));



  //  Floyd's Tortoise and hare algorithm


function findCycle2(head){
  let hare = head; // fast
  let tortoise = head; // slow

  while(hare !== null && hare.next !== null){
    tortoise = tortoise.next;
    hare = hare.next.next; // 2x speed

    if(tortoise === hare){
      break;
    }
  }

  if(hare === null || hare.next === null){
    // no loop detected;
    return null;
  }

  let p1 = head;
  let p2 = tortoise; // or hare

  while(p1 !== p2){
    p1 = p1.next;
    p2 = p2.next;
  }

  return p1;
}


console.log("Method - 2: ", findCycle2(linkedList));



