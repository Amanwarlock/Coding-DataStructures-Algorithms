package Concepts.Collections;

import java.util.HashMap;

public class MyHashMap {

    public static void main(String[] args) {

        /**
         * @implNote
         * # ADD:
         *      1. put
         *      2. puIfAbsent
         * # Retrieve:
         *      1. get
         * # Check size:
         *      1. isEmpty()
         *      2. size()
         *      3. containsKey()
         *      4. containsValue()
         * # Remove:
         *      1. remove(key)
         *      2. remove(key, value)
         * # EntrySet, keySet, values:
         *      1. entrySet();
         *      2. keySet();
         *      3. values();
         * # Iterations:
         *      1. Set<Map.Entry<String, Double>> employeeSalaryEntries = employeeSalary.entrySet();
         *      2. Iterator<Map.Entry<String, Double>> employeeSalaryIterator = employeeSalaryEntries.iterator();
         *      3. employeeSalary.entrySet().forEach(entry ->
         *      4. Map.Entry<String, Double> entry: employeeSalary.entrySet()
         *      5. employeeSalary.keySet().forEach(employee ->
         */

        HashMap<Integer, Integer> myMap = new HashMap<Integer, Integer>();

        /**
         * @implSpec  Add
         */
        myMap.put(1,1);
        myMap.putIfAbsent(1,1);

        /**
         * @implSpec Get
         * */
        myMap.get(1);

        /**
         * @implSpec Size
         * */
        myMap.isEmpty();
        myMap.size();

        /**
         * @implSpec Contains
         * */
        myMap.containsKey(1);
        myMap.containsValue(1);

    }
}
