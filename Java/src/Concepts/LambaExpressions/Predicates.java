package Concepts.LambaExpressions;

import java.util.ArrayList;
import java.util.List;
import java.util.function.IntPredicate;
import java.util.function.Predicate;

class Employee{

    private String name;
    private int age;

    Employee(String name, int age){
        this.name = name;
        this.age = age;
    }

    public String getName(){
        return  this.name;
    }

    public int getAge(){
        return this.age;
    }
}

public class Predicates {

    public static void printByAge(List<Employee> employeeList, String text, Predicate<Employee> ageCondition){
        System.out.println("--------------------------");
        System.out.println(text);
        for(Employee emp: employeeList){
            if(ageCondition.test(emp)){
                System.out.println(emp.getAge());
            }
        }
    }

    public static void main(String[] args) {

        List<Employee> employeeList = new ArrayList<Employee>();

        employeeList.add(new Employee("Aman", 27));
        employeeList.add(new Employee("Batman", 40));
        employeeList.add(new Employee("Spiderman", 25));
        employeeList.add(new Employee("Ironman", 31));

        printByAge(employeeList, "Employees above 30 ", employee -> employee.getAge() > 30);

        printByAge(employeeList, "Employees  30 and below ", employee -> employee.getAge() <= 30);


        printByAge(employeeList, "Employees above 30 ", new Predicate<Employee>() {
            @Override
            public boolean test(Employee employee) {
                return employee.getAge() > 30;
            }
        });

        printByAge(employeeList, "Employees  30 and below ", new Predicate<Employee>() {
            @Override
            public boolean test(Employee employee) {
                return employee.getAge() <= 30;
            }
        });


        // Int predicates
        IntPredicate intp = i -> i > 15;
        System.out.println(" \n Int predicate : " + intp.test(10));

        IntPredicate greaterThan10 = i -> i > 10;
        IntPredicate lessThan50 = i -> i < 50;

        System.out.println("Predicate chaining : " + greaterThan10.and(lessThan50).test(25));

    }
}
