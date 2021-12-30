package Concepts.LambaExpressions;

interface AddNumbers{
    public int sumOfTwo(int num1, int num2);
}

public class LambaExample {

    static int addTwoNums(AddNumbers addNums, int num1, int num2){
        return addNums.sumOfTwo(num1, num2);
    }

    public static void main(String[] args) {

        // Example-1 without lambda's, but with anonymous inner class
        int result1 = addTwoNums(new AddNumbers() {
            @Override
            public int sumOfTwo(int num1, int num2) {
                return num1 + num2;
            }
        }, 2, 4);

        System.out.println("Sum with anonymous inner class:  " + result1);

        // Example-2 with lambda's
        int result2 = addTwoNums((num1, num2)-> num1 + num2, 2, 4);
        System.out.println("Sum with Lambda:  " + result2);

    }

}
