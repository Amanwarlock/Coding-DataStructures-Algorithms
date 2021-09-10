package Practise;

class Node{
    String value;
    Node next;

    Node(String val){
        this.value = val;
        next = null;
    }

    @Override
    public String toString() {
        return "Node{" +
                "value='" + value + '\'' +
                ", next=" + next +
                '}';
    }
}

public class MyStack {
    Node head;
    Node tail;

    MyStack(){
        this.head = null;
        this.tail = null;
    }

    public  Node push(String val){
        Node newNode = new Node(val);
        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        return newNode;
    }

    public Node pop(){
        if(this.head == null) return null;
        Node element = this.head;
        this.head = this.head.next;
        return  element;
    }
}




