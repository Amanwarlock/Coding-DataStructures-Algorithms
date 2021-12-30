package Concepts.LambaExpressions;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;

public class FunctionInterface {

    public static String changeCase(Function<String, String> caseChange, String progName){
        return caseChange.apply(progName);
    }


    public static void main(String[] args) {

        Function<String, String> upperCase = str -> str.toUpperCase();

        Function<String, String> lowerCase = str -> str.toLowerCase();

        List<String> programingList = new ArrayList<String>();
        programingList.add("Python");
        programingList.add("JavaScript");
        programingList.add("Java");
        programingList.add("GoLang");
        programingList.add("Angular");


        System.out.println("\n------------------------------------");
        System.out.println("Print Upper case : ");
        for(String progName: programingList){
            String name = changeCase(upperCase, progName);
            System.out.println(name);
        }

        System.out.println("\n------------------------------------");
        System.out.println("Print Lower case : ");
        for(String progName: programingList){
            String name = changeCase(lowerCase, progName);
            System.out.println(name);
        }
    }
}
