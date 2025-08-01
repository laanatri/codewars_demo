import java.util.*;

public class TwoSum {

    public static int[] twoSum(int[] numArr, Integer target) {
        for (int i = 0; i < numArr.length; i++) {
            for (int e = 1; e < numArr.length; e++) {
                if (numArr[i] + numArr[e] == target) {
                    return new int[] {i, e};
                }
            }
        }
        return new int[] {};
    }

    public static void main(String[] args) {

        System.out.println(Arrays.toString(twoSum(new int[] {2, 7, 11, 15}, 9)));
        System.out.println(Arrays.toString(twoSum(new int[] {3, 2, 4}, 6)));
        System.out.println(Arrays.toString(twoSum(new int[] {3, 3}, 6)));

    }
}