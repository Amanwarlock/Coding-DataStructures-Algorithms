import java.util.HashMap;

public class Test {
    public static void main(String[] args) {

        char c = 'a';

        System.out.println(" val " + Character.forDigit(0, 10));

        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();

        System.out.println(" map : " + map.getOrDefault(1, 0));

    }
}
