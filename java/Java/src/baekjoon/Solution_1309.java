// solved

package baekjoon;

import java.io.*;
import java.util.*;

public class Solution_1309 {
    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int n = Integer.parseInt(st.nextToken());

        int[][] dp = new int[n][3];

        int[] init = {1, 1, 1};
        dp[0] = init;

        for(int i = 1; i < n; i++) {
            dp[i][0] = dp[i - 1][1] % 9901 + dp[i - 1][2] % 9901;
            dp[i][1] = dp[i - 1][0] % 9901 + dp[i - 1][2] % 9901;
            dp[i][2] = dp[i - 1][0] % 9901 + dp[i - 1][1] % 9901 + dp[i - 1][2] % 9901;
        }

        System.out.print((dp[n - 1][0] + dp[n - 1][1] + dp[n - 1][2]) % 9901);
    }
}