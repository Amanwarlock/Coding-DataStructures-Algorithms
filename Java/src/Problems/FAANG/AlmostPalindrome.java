package Problems.FAANG;

public class AlmostPalindrome {

    public static boolean isAlmostPalindrome(String str){
        int left  = 0;
        int right = str.length() - 1;
        while(left < right){
            if(str.charAt(left) != str.charAt(right)){
                return isValidSubPalindrome(str, left+1, right) ||  isValidSubPalindrome(str, left, right-1);
            }

            left ++;
            right --;
        }
        return true;
    }

    public static boolean isValidSubPalindrome(String str, int start, int end){
        while(start < end){
            if(str.charAt(start) != str.charAt(end)) return  false;
            start ++;
            end --;
        }
        return true;
    }

    public static void main(String[] args) {

        /**
         *      s = "aba" - true
         *      s = "abca" - true
         *      s = "abc" - false
         */

        String str = "abc";

        System.out.println("Is Almost Palindrome : " + isAlmostPalindrome(str));
    }
}
