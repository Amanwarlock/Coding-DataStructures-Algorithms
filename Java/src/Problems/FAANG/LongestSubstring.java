package Problems.FAANG;

import java.util.HashMap;

public class LongestSubstring {

    public static int findLongestSubstr(String str){
        int longest = 0;
        int left = 0;
        HashMap<Character, Integer> map = new HashMap<Character, Integer>();

        for(int right = 0; right < str.length(); right ++){
            char letter = str.charAt(right);
            if(map.containsKey(letter) && map.get(letter) >= left){
                left = map.get(letter) + 1;
            }
            map.put(letter, right);
            longest = Math.max(longest, right - left + 1);
        }

        return longest;
    }

    public static void main(String[] args) {
        String str = "abcbcadb";
        System.out.println("Res : " + findLongestSubstr(str));
    }
}
