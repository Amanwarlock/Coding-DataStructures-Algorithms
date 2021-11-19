package Problems.Interview.Collection;

// Volvo Interview Question

public class CostOfSessionsVolvo {

    public static int solution(int[] A, int X, int Y){
        int minCost = Integer.MAX_VALUE;

        for(int i = 0; i < A.length; i++){
            int cost = 0;
            int j = i;
            int count = X;
            while( count > 0 && j < A.length){
                cost += A[j];
                count -= 1;
                j += Y;
            }
            if(cost > 0 && count == 0){
                minCost = Math.min(minCost, cost);
            }

        }


        return minCost;
    }


    public static void main(String[] args) {

        int[] arr = {4, 2, 3, 7}; // cost

        int res = solution(arr, 2, 2);

        System.out.println("Result : " + res);
    }

}
