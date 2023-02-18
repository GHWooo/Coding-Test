// solved

package baekjoon;

import java.io.*;
import java.util.*;

public class Solution_1926 {
    static int n;
    static int m;
    static int[][] board;
    static boolean[][] visited;

    static int[] dx = {1, -1, 0, 0};
    static int[] dy = {0, 0, 1, -1};

    static int count = 0;
    static int max_size = 0;

    static int solution(int x, int y, int sum) {
        visited[x][y] = true;
        int temp_sum = 1;

        for(int i = 0; i < 4; i++) {
            int tx = x + dx[i];
            int ty = y + dy[i];

            if(tx > -1 && tx < n && ty > -1 && ty < m) {
                if(!visited[tx][ty] && board[tx][ty] == 1) {
                    temp_sum += solution(tx, ty, sum + 1);
                }
            }
        }

        return temp_sum;
    }

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        n = Integer.parseInt(st.nextToken());
        m = Integer.parseInt(st.nextToken());

        board = new int[n][m];
        visited = new boolean[n][m];

        for(int i = 0; i < n; i++) {
            st = new StringTokenizer(br.readLine());
            for(int j = 0; j < m; j++) board[i][j] = Integer.parseInt(st.nextToken());
        }

        for(int i = 0; i < n; i++) {
            for(int j = 0; j < m; j++) {
                if(!visited[i][j] && board[i][j] == 1) {
                    count++;
                    int temp_sum = solution(i, j, 1);
                    max_size = Math.max(max_size, temp_sum);
                }
            }
        }

        System.out.print(count + "\n" + max_size);
    }
}
