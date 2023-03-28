package baekjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Solution_1149 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String input = br.readLine();
        int n = Integer.parseInt(input);
        int[][] house = new int[n][3];

        for (int i = 0; i < n; i++) {
            String[] line = br.readLine().split(" ");
            for (int j = 0; j < 3; j++) {
                house[i][j] = Integer.parseInt(line[j]);
            }
        }

        for (int i = 1; i < n; i++) {
            for (int j = 0; j < 3; j++) {
                int tx = j + 1 >= 3 ? j - 2 : j + 1;
                int ty = j + 2 >= 3 ? j - 1 : j + 2;
                house[i][j] += Math.min(house[i - 1][tx], house[i - 1][ty]);
            }
        }

        System.out.println(Arrays.stream(house[n - 1]).min().getAsInt());
    }
}