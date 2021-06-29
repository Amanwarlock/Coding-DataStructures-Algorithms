package Problems.FAANG;

import java.util.HashMap;

public class TwoSum {

    public static int[] findTwoSum(int[] arr, int target ){
        HashMap<Integer, Integer> myMap = new HashMap<>();
        int[] res = new int[2];
        for(int i = 0; i < arr.length; i++){
            if(myMap.containsKey(arr[i])){
                res[0] = myMap.get(arr[i]);
                res[1] = i;
                return res;
            }else{
                int numToFind = target - arr[i];
                myMap.put(numToFind, i);
            }
        }

        return  res;
    }

    public static void main(String[] args) {
        int[] nums = {1,3,7,9,2};
        int target = 11;

        int[] result = findTwoSum(nums, target);
        System.out.println("Result " + result[0] + " " + result[1]);
    }
}
