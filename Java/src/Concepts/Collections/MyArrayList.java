package Concepts.Collections;

import java.util.*;

public class MyArrayList {
    public static void main(String[] args) {

        ArrayList<String> arrList = new ArrayList<String>();

        List<String> arrList1 = new ArrayList<String>();

        /**
         * @implSpec Add
         */
        arrList.add("Python");
        arrList.add(1, "Node.js");
        arrList.add("Javascript");
        arrList.add("Java");
        arrList.add("Golang");
        arrList.add("Angular");
        arrList.add("React");
        arrList.add("Vue");


        /**
         * @implSpec Get/Retrieve
         */
        String getResult1 = arrList.get(2);
        System.out.println("Retrieval : " + getResult1);


        /**
         * @implSpec Update/Insert
         */
        arrList.set(2, "C++");
        System.out.println("Update/Insert : " + arrList.get(2));

        /**
         * @implSpec Remove/Delete
         * 1. Remove by index;
         * 2. Remove by element - returns false if element does not exist;
         * 3. Remove all elements from list1 based on elements given in another list list2;
         * 4. Remove all - empty the list;
         */
        // 1.
        arrList.remove(2);

        // 2.
        boolean isRemoved = arrList.remove("Golang");
        System.out.println("Removed ? : " + isRemoved);

        // 3.
        ArrayList<String> removeList = new ArrayList<String>();
        removeList.add("Angular");
        removeList.add("React");
        removeList.add("Vue");
        arrList.removeAll(removeList);
        System.out.println("After remove all : " + arrList);

        // 4.
        //arrList.clear();

        /**
         * @implSpec Size/Length
         */
        int size = arrList.size();
        System.out.println("Size : " + size);

        /**
         * @implSpec Empty
         */
        boolean isEmpty = arrList.isEmpty();
        System.out.println("IsEmpty : " + isEmpty);

        /**
         * @implSpec Search
         * 1. First occurrence - indexOf
         * 2. Last occurrence - lastIndexOf
         * 3. Check if present in list - contains
         */
        // 1.
        int firstOccurrence = arrList.indexOf("Java");
        System.out.println("First occurrence : " + firstOccurrence);
        // 2.
        int lastOccurrence = arrList.lastIndexOf("J");
        System.out.println("Last occurrence : " + lastOccurrence);
        // 3.
        boolean isExist = arrList.contains("Ruby");
        System.out.println("Is exist in list : " + isExist);


        /**
         * @implSpec Iterate
         * 1. Using for loop
         * 2. Using for-each
         * 3. Using Iterator
         * 4. using List Iterator
         */
        // 1.
        for(int i = 0; i < arrList.size(); i++){
            System.out.println("Using for loop : " + arrList.get(i));
        }

        // 2.
        for(String lang: arrList){
            System.out.println("Using for-each : " + lang);
        }

        // 3.
        Iterator<String> myListIterator = arrList.iterator();
        while(myListIterator.hasNext()){
            //myListIterator.remove();
            System.out.println("Using Iterator : " + myListIterator.next());
        }

        // 4.
        // myListIterator = arrList.listIterator();
        ListIterator<String> myListIterator2 = arrList.listIterator(arrList.size()); // from backwards
        while(myListIterator2.hasPrevious()){
            System.out.println("Using List Iterator : " + myListIterator2.previous());
        }

        /**
         * @implSpec Sort
         * 1. Collection.sort()
         * 2. ArrayList.sort(); - uses Comparator Interface
         * 3. Comparable vs Comparator
         */
        // 1.
        Collections.sort(arrList);
        System.out.println("Collections.sort() : " + arrList);

        // 2.
        arrList.sort(new Comparator<String>() {
            @Override
            public int compare(String o1, String o2) {
                return o1.compareTo(o2);
            }
        });
        System.out.println("ArrayList.sort() : " + arrList);


        /**
         * @implSpec Utilities
         * 1. Clone
         * 2. toArray() - ArrayList<String> languages = new ArrayList<>(); String[] arr = new String[languages.size()];  languages.toArray(arr);
         * 3. toString() - String str = languages.toString();
         * 4. ArrayList from arrays - ArrayList<String> languages = new ArrayList<>(Arrays.asList(arr));
         */
        ArrayList<String> clonedList = (ArrayList<String>) arrList.clone();


    }
}
