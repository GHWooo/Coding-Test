// solved

package baekjoon;

import java.io.*;
import java.util.*;

public class Solution_1987 {
    static int r;
    static int c;
    static String[][] board;
    static boolean[] visited = new boolean[26];

    static int[] dx = {0, 0, 1, -1};
    static int[] dy = {1, -1, 0, 0};

    static int solution(int x, int y, int count) {
        int max = count;

        visited[board[x][y].charAt(0) - 'A'] = true;

        for(int i = 0; i < 4; i++) {
            int tx = x + dx[i];
            int ty = y + dy[i];

            if (tx >= 0 && tx < r && ty >= 0 && ty < c
                    && !visited[board[tx][ty].charAt(0) - 'A']) {
                max = Math.max(max,  solution(tx, ty, count + 1));
            }
        }

        visited[board[x][y].charAt(0) - 'A'] = false;

        return max;
    }

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        r = Integer.parseInt(st.nextToken());
        c = Integer.parseInt(st.nextToken());

        board = new String[r][c];
        for(int i = 0; i < r; i++) {
            st = new StringTokenizer(br.readLine());
            board[i] = st.nextToken().split("");
        }

        System.out.print(solution(0, 0, 1));
    }
}