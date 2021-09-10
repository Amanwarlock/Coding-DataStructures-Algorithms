package Practise;

public class DoublyLinkedImplementation {
    public static void main(String[] args) {
        MyStack myStack = new MyStack();
        DoublyLinkedList myDoublyList  = new DoublyLinkedList();

        myStack.push("R");
        myStack.push("Z");
        myStack.push("V");
        myStack.push("U");
        myStack.push("T");
        myStack.push("X");
        myStack.push("A");

        Node item1 = myStack.pop();
        myDoublyList.prepend(item1.value);
        myDoublyList.append(item1.value);


        Node item2 = myStack.pop();
        myDoublyList.prepend(item2.value);
        myDoublyList.append(item2.value);

        DoublyLinkedListNode current  = myDoublyList.head;
        String result = "";
        while( current!= null){
            StringBuilder res = new StringBuilder();
            res.append(current.previous !=null ? current.previous.value: "null");
            res.append(current.value);
            res.append(current.next !=null ? current.next.value : "null");
            current = current.next;
            result += res.toString();
        }

        System.out.println("Result : " + result);

    }
}
