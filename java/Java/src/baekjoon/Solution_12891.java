// solved

package baekjoon;

import java.io.*;
import java.util.*;

public class Solution_12891 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int s = Integer.parseInt(st.nextToken());
        int p = Integer.parseInt(st.nextToken());

        st = new StringTokenizer(br.readLine());
        String[] dna = st.nextToken().split("");

        int[][] dp = new int[s][4];

        for(int i = 0; i < s; i++) {
            if(dna[i].equals("A")) dp[i][0] += 1;
            if(dna[i].equals("C")) dp[i][1] += 1;
            if(dna[i].equals("G")) dp[i][2] += 1;
            if(dna[i].equals("T")) dp[i][3] += 1;

            if(i > 0) {
                for(int j = 0; j < 4; j++) dp[i][j] += dp[i - 1][j];
            }
        }

        int[] goal = new int[4];
        st = new StringTokenizer(br.readLine());

        for(int i = 0; i < 4; i++) goal[i] = Integer.parseInt(st.nextToken());

        int count = 0;

        for(int i = 0; i < s - p + 1; i++) {
            int[] password = new int[4];

            for(int j = 0; j < 4; j++) {
                password[j] = dp[i + p - 1][j];
            }

            if(i > 0) {
                for(int j = 0; j < 4; j++) {
                    password[j] -= dp[i - 1][j];
                }
            }

            boolean pass = true;
            for(int j = 0; j < 4; j++) {
                if(goal[j] > password[j]) {
                    pass = false;
                    break;
                }
            }

            if(pass) count++;
        }

        System.out.print(count);
    }
}
