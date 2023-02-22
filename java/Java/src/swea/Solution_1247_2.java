// solved

package swea;

import java.io.*;
import java.util.*;

public class Solution_1247_2 {
    static int n;
    static int[] company = new int[2];
    static int[] home = new int[2];
    static int[][] board;
    static boolean[] visited;
    static int min = Integer.MAX_VALUE;

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        StringBuilder sb = new StringBuilder();

        int t = Integer.parseInt(st.nextToken());

        for(int test_case = 1; test_case <= t; test_case++) {
            st = new StringTokenizer(br.readLine());
            n = Integer.parseInt(st.nextToken());

            st = new StringTokenizer(br.readLine());
            company[0] = Integer.parseInt(st.nextToken());
            company[1] = Integer.parseInt(st.nextToken());
            home[0] = Integer.parseInt(st.nextToken());
            home[1] = Integer.parseInt(st.nextToken());

            board = new int[n][2];
            visited = new boolean[n];

            for(int i = 0; i < n; i++) {
                board[i][0] = Integer.parseInt(st.nextToken());
                board[i][1] = Integer.parseInt(st.nextToken());
            }

            solution(home[0], home[1], 0, 0);

            sb.append("#" + test_case + " " + min);
            if(test_case < t) sb.append("\n");

            min = Integer.MAX_VALUE;
        }

        System.out.print(sb.toString());
    }

    static void solution(int x, int y, int count, int sum) {
        if(count == n) {
            int result = sum + Math.abs(x - company[0]) + Math.abs(y - company[1]);
            min = Math.min(min, result);
            return;
        }

        for(int i = 0; i < n; i++) {
            if(!visited[i]) {
                int next_sum = sum + Math.abs(x - board[i][0]) + Math.abs(y - board[i][1]);

                visited[i] = true;
                solution(board[i][0], board[i][1], count + 1, next_sum);
                visited[i] = false;
            }
        }
    }
}
