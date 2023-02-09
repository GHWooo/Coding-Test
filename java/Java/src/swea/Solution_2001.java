// solved

package swea;

import java.io.*;
import java.util.*;

public class Solution_2001 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int t = Integer.parseInt(st.nextToken());

        for(int test_case = 1; test_case <= t; test_case++) {
            st = new StringTokenizer(br.readLine());
            int n = Integer.parseInt(st.nextToken());
            int m = Integer.parseInt(st.nextToken());

            int[][] dp = new int[n][n];

            for(int i = 0; i < n; i++) {
                st = new StringTokenizer(br.readLine());

                for(int j = 0; j < n; j++) {
                    dp[i][j] = Integer.parseInt(st.nextToken());

                    if(j != 0) dp[i][j] += dp[i][j - 1];
                }
            }

            int max_count = 0;

            for(int i = 0; i < (n - m + 1); i++) {
                for(int j = 0; j < (n - m + 1); j++) {
                    int temp_count = 0;

                    for(int k = 0; k < m; k++) {
                        temp_count += dp[i + k][j + m - 1];

                        if(j != 0) temp_count -= dp[i + k][j - 1];
                    }

                    if(temp_count > max_count) max_count = temp_count;
                }
            }

            System.out.println("#" + test_case + " " + max_count);
        }
    }
}