// solved

package baekjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Solution_2096 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int n = Integer.parseInt(st.nextToken());
        int[][] board = new int[n][3];

        for (int i = 0; i < n; i++) {
            st = new StringTokenizer(br.readLine());
            board[i][0] = Integer.parseInt(st.nextToken());
            board[i][1] = Integer.parseInt(st.nextToken());
            board[i][2] = Integer.parseInt(st.nextToken());
        }

        int[][][] dp = new int[n][3][2];

        for (int i = 0; i < 3; i++) {
            dp[0][i][0] = board[0][i];
            dp[0][i][1] = board[0][i];
        }

        for (int i = 1; i < n; i++) {
            for (int j = 0; j < 3; j++) {
                int[] min_answer = new int[3];
                int[] max_answer = new int[3];
                Arrays.fill(min_answer, Integer.MAX_VALUE);
                Arrays.fill(max_answer, Integer.MIN_VALUE);

                min_answer[0] = dp[i - 1][j][0];
                max_answer[0] = dp[i - 1][j][1];

                if (j > 0) {
                    min_answer[1] = dp[i - 1][j - 1][0];
                    max_answer[1] = dp[i - 1][j - 1][1];
                }
                if (j < 2) {
                    min_answer[2] = dp[i - 1][j + 1][0];
                    max_answer[2] = dp[i - 1][j + 1][1];
                }

                dp[i][j][0] = Arrays.stream(min_answer).min().getAsInt() + board[i][j];
                dp[i][j][1] = Arrays.stream(max_answer).max().getAsInt() + board[i][j];
            }
        }

        int min = Integer.MAX_VALUE;
        int max = 0;

        for (int i = 0; i < 3; i++) {
            if (min > dp[n - 1][i][0]) min = dp[n - 1][i][0];
            if (max < dp[n - 1][i][1]) max = dp[n - 1][i][1];
        }

        System.out.println(max + " " + min);
    }
}