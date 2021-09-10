package Concepts.Collections;

import java.util.LinkedList;

public class MyLinkedList {
    public static void main(String[] args) {
        /**
         * @implNote
         *
         *  # ADD::::
         *      1. list.add(item);
         *      2. list.add(index, item) //(Add item at specific index position)
         *      3. list.addFirst(item) // adding element at the begining of the linked list;
         *      4. list.addLast(item) // adding an element at the end of the linked list;
         *      5. list.addAll(another collection) // adding to linkedlist from another collection like arraylist etc
         *
         *  # Retrieval / fetch / get:::::
         *      1. list.getFirst() // get the first element; if list is empty throws NoSuchElementException
         *      2. list.getLast() // gets the last element; if list is empty throws NoSuchElementException
         *      3. list.get(index) // get element by index position;
         *
         *   # Remove / Delete::::
         *      1. list.remove() // removes the first
         *      2. list.remove(index) // removes by index and returns boolean
         *      3. list.remove(item) // removes by item value;
         *      4. list.removeFirst();
         *      5. list.removeLast()
         *      6. list.clear();
         *
         *    # Search / find::::
         *      1. list.contains(item)
         *      2. list.indexOf(item); // first occurrence
         *      3. list.lastIndexOf(item); //last occurrence
         *
         *    # Size / length::::
         *      1. list.size()
         *      2. list.isEmpty();
         *
         *    # Iteration / looping:::
         *
         *    NOTE:::
         *      1. next node ??
         */

        LinkedList<String> list = new LinkedList<String>();

        /**
         * @implSpec ADD
         */
        list.add("Java");
        list.add("Javascript");
        list.add("Python");
        System.out.println("Printing linked list : " + list);



    }
}
