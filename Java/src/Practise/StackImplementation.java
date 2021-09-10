package Practise;

public class StackImplementation {
    public static void main(String[] args) {
        MyStack myStack = new MyStack();

        myStack.push("R");
        myStack.push("Z");
        myStack.push("V");
        myStack.push("U");
        myStack.push("T");
        myStack.push("X");
        myStack.push("A");


        System.out.println("Stack : " +  myStack.pop());

    }
}
