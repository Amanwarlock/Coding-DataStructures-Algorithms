class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
// ---- Generate our linked list ----
const linkedList = [5, 4, 3, 2, 1].reduce((acc, val) => new ListNode(val, acc), null);

const printList = (head) => {
  if(!head) {
    return;
  }

  console.log(head.val);
  printList(head.next);
}


function reverseBetween(head, m, n){
  let currentPos = 1;
  let currentNode = head;
  let start = head;

  while(currentPos < m){
    start = currentNode;
    currentNode = currentNode.next;
    currentPos++;
  }

  let newList = null;
  let tail = currentNode;

  while(currentPos >= m && currentPos <= n){
    let next = currentNode.next;
    currentNode.next = newList;
    newList = currentNode;
    currentNode = next;
    currentPos++;
  }

    start.next = newList;
    tail.next = currentNode;

    if(m === 1) return newList;
    else return head;

}

printList(linkedList);
console.log('after reverse');

printList(reverseBetween(linkedList, 1, 5));

//console.log("Res : ", almostPalidrome(string));
