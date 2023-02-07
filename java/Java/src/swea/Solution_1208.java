// solved

package swea;

import java.io.*;
import java.util.Arrays;

public class Solution_1208 {
    public static void main(String args[]) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        for(int test_case = 1; test_case <= 10; test_case++) {
            int count = Integer.parseInt(br.readLine());
            int[] height = new int[101];

            String[] input = br.readLine().split(" ");
            int cursor = 1;

            for(String n : input) {
                height[cursor] = Integer.parseInt(n);
                cursor++;
            }

            Arrays.sort(height);

            int max = 100;
            int min = 1;

            for(int i = 0; i < count; i++) {
                height[max] -= 1;
                height[min] += 1;

                Arrays.sort(height);

                if(height[max] - height[min] == 1) break;
            }

            System.out.println("#" + test_case + " " + (height[max] - height[min]));
        }
    }
}
