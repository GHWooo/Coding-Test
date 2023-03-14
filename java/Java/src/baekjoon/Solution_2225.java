// solved

package baekjoon;

import java.io.*;
import java.util.*;

public class Solution_2225 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int n = Integer.parseInt(st.nextToken());
        int k = Integer.parseInt(st.nextToken());

        int[][] dp = new int[k + 1][n + 1];

        for(int i = 0; i <= n; i++) dp[1][i] = 1;
        for(int i = 1; i <= k; i++) dp[i][0] = 1;

        int TEMP = 1_000_000_000;

        for(int i = 2; i <= k; i++) {
            for(int j = 1; j <= n; j++) {
                dp[i][j] = dp[i - 1][j] % TEMP + dp[i][j - 1] % TEMP;
            }
        }

        System.out.print(dp[k][n] % TEMP);
    }
}
