package Algorithms;

public class BubbleSort {
    public static void printArr(int[] arr, String msg){
        System.out.println(" " + msg );
        for(int i = 0; i < arr.length; i++){
            System.out.print(" " + arr[i]);
        }
        System.out.println("\n");
    }
    public static void main(String[] args) {
        int[] arr = {1, 10, 5, 3, 2, 4};

        System.out.println("Running Bubble sort Algorithm ......");
        printArr(arr, "Printing Unsorted array");

        for(int lastUnsortedIndex = arr.length - 1; lastUnsortedIndex > 0 ; lastUnsortedIndex -- ){
            for(int i = 0; i < lastUnsortedIndex; i++){
                if(arr[i] > arr[i + 1]){
                    // swap
                    int temp = arr[i];
                    arr[i] = arr[i+1];
                    arr[i+1] = temp;
                }
            }
        }

        printArr(arr, "Printing Sorted Array");

    }
}
