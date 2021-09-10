package Problems.FAANG;

import java.util.Stack;

public class BackSpaceStringCompare {

    public static String buildString(String str){
        Stack<Character> stack = new Stack<Character>();
        for(int i = 0; i < str.length(); i++){
            if(str.charAt(i) != '#'){
                stack.push(str.charAt(i));
            }else{
                stack.pop();
            }
        }

        return stack.toString();
    }

    public static boolean compare1(String str1, String str2){
        String stra = buildString(str1);
        String strb = buildString(str2);

        if(stra.length() != strb.length()) return  false;

        for(int i = 0; i < stra.length(); i++){
            if(stra.charAt(i) != strb.charAt(i)) return false;
        }

        return true;
    }

    public static boolean compare2(String str1, String str2){
        int p1 = str1.length() - 1;
        int p2 = str2.length() - 1;

        while(p1 >= 0 || p2 >= 0){
            if(str1.charAt(p1) == '#' || str2.charAt(p2) == '#'){

                if(str1.charAt(p1) == '#'){
                    int backcount = 2;
                    while(backcount > 0){
                        p1 --;
                        backcount --;
                        if(str1.charAt(p1) == '#'){
                            backcount += 2;
                        }
                    }
                }

                if(str2.charAt(p2) == '#'){
                    int backcount = 2;
                    while(backcount > 0){
                        p2 --;
                        backcount --;
                        if(str2.charAt(p2) == '#'){
                            backcount += 2;
                        }
                    }
                }
            }else{
                if(str1.charAt(p1) != str2.charAt(p2)) return  false;
                p1 --;
                p2 --;
            }
        }

        return true;
    }

    public static void main(String[] args) {
        String str1 = "ab#z";
        String str2 = "az#z";

        boolean res1 = compare1(str1, str2);
        boolean res2 = compare2(str1, str2);

        System.out.println("Result 1: " + res1);
        System.out.println("Result 2: " + res2);

    }
}
