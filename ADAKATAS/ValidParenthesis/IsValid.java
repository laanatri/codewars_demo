import java.util.*;

public class IsValid {

    public static boolean CheckIfAllTrue(Boolean[] arr) {
        for (Boolean b : arr) {
            if (!b) return false;
        }
        return true;
    }

    public static Boolean isValid(String str) {
        char[][] toCheck = {{'(', ')'}, {'{', '}'}, {'[', ']'}};
        Boolean[] results = {true, true, true};
        for (int i = 0; i < str.length(); i++) {
            for (int e = 0; e < toCheck.length; e++) {
                if (str.charAt(i) == toCheck[e][0] && results[e] == true) {
                    results[e] = false;
                }
                if (str.charAt(i) == toCheck[e][1] && results[e] == false) {
                    results[e] = true;
                }
            }
        }
        return CheckIfAllTrue(results);
    }

    public static void main(String[] args) {

        System.out.println(isValid("()"));
        System.out.println(isValid("()[]{}"));
        System.out.println(isValid("(]"));
        System.out.println(isValid("([])"));

    }
}