// solved
package baekjoon;

import java.io.*;

public class Solution_11659 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String[] nm = br.readLine().split(" ");
        int n = Integer.parseInt(nm[0]);
        int m = Integer.parseInt(nm[1]);

        String[] board = br.readLine().split(" ");
        int[] new_board = new int[n];

        new_board[0] = Integer.parseInt(board[0]);

        for(int i = 1; i < n; i++) {
            new_board[i] = Integer.parseInt(board[i]) + new_board[i - 1];
        }

        int[] result = new int[m];

        for(int i = 0; i < m; i++) {
            String[] se = br.readLine().split(" ");
            int start = Integer.parseInt(se[0]);
            int end = Integer.parseInt(se[1]);

            int sum = new_board[end - 1];

            if(start > 1) sum -= new_board[start - 2];

            result[i] = sum;
        }

        for(int i = 0; i < m; i++) {
            System.out.println(result[i]);
        }
    }
}
