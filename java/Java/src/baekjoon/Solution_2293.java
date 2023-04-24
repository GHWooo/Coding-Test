// solved

package baekjoon;

import java.io.*;
import java.util.*;

public class Solution_2293 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int K = Integer.parseInt(st.nextToken());

        int[] coins = new int[N];
        for (int i = 0; i < N; i++) {
            st = new StringTokenizer(br.readLine());
            coins[i] = Integer.parseInt(st.nextToken());
        }

        int[][] dp = new int[N][K + 1];
        for (int i = 1; i <= K; i++) {
            dp[0][i] = i % coins[0] == 0 ? 1 : 0;
        }

        for (int i = 1; i < N; i++) {
            for (int j = 1; j <= K; j++) {
                int value = coins[i];

                while (value <= j) {
                    int dif = j - value;

                    if (dif == 0) {
                        dp[i][j]++;
                        break;
                    }

                    dp[i][j] += dp[i - 1][dif];

                    value += coins[i];
                }

                dp[i][j] += dp[i - 1][j];
            }
        }

        System.out.println(dp[N - 1][K]);
    }
}