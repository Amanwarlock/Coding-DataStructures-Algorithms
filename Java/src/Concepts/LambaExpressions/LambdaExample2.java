package Concepts.LambaExpressions;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class LambdaExample2 {

    public static void main(String[] args) {

        List<String> namesList = new ArrayList<String>();
        namesList.add("Python");
        namesList.add("JavaScript");
        namesList.add("Java");
        namesList.add("GoLang");
        namesList.add("Angular");

        Collections.sort(namesList, new Comparator<String>() {
            @Override
            public int compare(String o1, String o2) {
                return o1.compareTo(o2);
            }
        });

        System.out.println("Sorted names list : " + namesList);

        //*****************************************************************************
        List<String> programingList = new ArrayList<String>();
        programingList.addAll(namesList);

        Collections.sort(programingList, (str1, str2) -> str1.compareTo(str2));

        System.out.println("Sorted programing list with lambda : " + programingList);

        //*****************************************************************************

        programingList.forEach(name -> System.out.println(" Programing Language Name : " + name));

    }
}
