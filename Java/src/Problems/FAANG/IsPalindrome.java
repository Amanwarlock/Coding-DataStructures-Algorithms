package Problems.FAANG;

public class IsPalindrome {

    public static boolean isPalindromeFromCenter(String str){

        int mid = str.length() / 2;
        int left = mid;
        int right = mid;

        if(str.length() % 2 == 0){ // it is even
            left --;
        }

        while(left >= 0 && right < str.length()){
            if(str.charAt(left) != str.charAt(right)) return false;
            left --;
            right ++;
        }

        return true;
    }

    public static boolean isPalindromeFromOutside(String str){
        int left = 0;
        int right = str.length() - 1;

        while(left < right){
            if(str.charAt(left) != str.charAt(right)) return false;
            left ++;
            right --;
        }

        return true;
    }

    public static void main(String[] args) {

        String str1 = "1221";
        String str2 = "12321";

        System.out.println("Is Palindrome  : " + isPalindromeFromOutside(str1));

    }
}
