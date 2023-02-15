// solved

package baekjoon;

import java.io.*;
import java.util.*;

public class Solution_2563 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());

        int[][] board = new int[101][101];
        int size = 0;

        for(int i = 0; i < n; i++) {
            st = new StringTokenizer(br.readLine());
            int x = Integer.parseInt(st.nextToken());
            int y = Integer.parseInt(st.nextToken());

            for(int j = x; j < x + 10; j++) {
                for(int k = y; k < y + 10; k++) {
                    if(board[j][k] == 0) {
                        board[j][k]++;
                        size++;
                    }
                }
            }
        }

        System.out.print(size);
    }
}
