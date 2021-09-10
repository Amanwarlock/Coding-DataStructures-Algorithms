package Practise;

class DoublyLinkedListNode{
    String value;
    DoublyLinkedListNode next;
    DoublyLinkedListNode previous;

    DoublyLinkedListNode(String val){
        this.value = val;
        this.next = null;
        this.previous = null;
    }

    @Override
    public String toString() {
        return "DoublyLinkedListNode{" +
                "value='" + value + '\'' +
                '}';
    }
}

public class DoublyLinkedList {

    DoublyLinkedListNode head;
    DoublyLinkedListNode tail;

    DoublyLinkedList(){
        this.head = null;
        this.tail = null;
    }

    // adds item at the front of the list
    public DoublyLinkedListNode prepend(String val){
        DoublyLinkedListNode newNode = new DoublyLinkedListNode(val);
        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head.previous = newNode;
            this.head = newNode;
        }
        return newNode;
    }

    // adds item to the rear of the list (back)
    public DoublyLinkedListNode append(String val){
        DoublyLinkedListNode newNode = new DoublyLinkedListNode(val);
        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }
        return newNode;
    }
}
