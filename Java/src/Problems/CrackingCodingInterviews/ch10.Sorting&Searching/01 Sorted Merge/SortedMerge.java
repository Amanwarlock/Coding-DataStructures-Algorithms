package Problems.CrackingCodingInterviews;

public class SortedMerge {

    public static int[] mergeSorted(int[] a, int[] b){
        int index = a.length - 1;
        int indexA = a.length - b.length - 1;
        int indexB = b.length - 1;

        while(indexB >= 0){
            if(indexA >=0 && a[indexA] > b[indexB]){
                a[index] = a[indexA];
                indexA --;
            }else{
                a[index] = b[indexB];
                indexB --;
            }
            index --;
        }

        return a;
    }

    public static void main(String[] args) {

        int[] a = {2, 5, 7, 9, 0, 0, 0, 0};
        int[] b = {1, 4, 6, 8};

        a = mergeSorted(a, b);

        StringBuilder sb = new StringBuilder();

        for(int i = 0; i < a.length; i++){
            sb.append(a[i] + ", ");
        }

        System.out.println(sb.toString());
    }
}
