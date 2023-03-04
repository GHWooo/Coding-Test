// solved

package baekjoon;

import java.io.*;
import java.util.*;

public class Solution_3190 {
    static int n, k, l;
    static int[][] board;
    static int[][] snake_direc;
    static int[] update_direc = new int[10_001];
    static int time = 0;

    static int[] tail = {0, 0};
    static int[] dx = {-1, 0, 1, 0};
    static int[] dy = {0, 1, 0, -1};

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        n = Integer.parseInt(st.nextToken());
        board = new int[n][n];
        board[0][0] = 2;

        snake_direc = new int[n][n];
        for(int i = 0; i < n; i++) Arrays.fill(snake_direc[i], -1);
        snake_direc[0][0] = 1;

        st = new StringTokenizer(br.readLine());
        k = Integer.parseInt(st.nextToken());

        for(int i = 0; i < k; i++) {
            st = new StringTokenizer(br.readLine());
            int x = Integer.parseInt(st.nextToken());
            int y = Integer.parseInt(st.nextToken());

            board[x - 1][y - 1] = 1;
        }

        st = new StringTokenizer(br.readLine());
        l = Integer.parseInt(st.nextToken());

        for(int i = 0; i < l; i++) {
            st = new StringTokenizer(br.readLine());
            int t = Integer.parseInt(st.nextToken());
            String direc = st.nextToken();

            update_direc[t] = direc.equals("L") ? -1 : 1;
        }

        moveSnake(0, 0, 1);

        System.out.print(time + 1);
    }

    static void moveSnake(int x, int y, int direc) {
        int nx = x + dx[direc];
        int ny = y + dy[direc];

        if(nx < 0 || nx >= n || ny < 0 || ny >= n) return;

        int next = board[nx][ny];
        if(next == 2) return;

        board[nx][ny] = 2;
        if(next == 0) {
            int tx = tail[0] + dx[snake_direc[tail[0]][tail[1]]];
            int ty = tail[1] + dy[snake_direc[tail[0]][tail[1]]];

            board[tail[0]][tail[1]] = 0;
            tail[0] = tx;
            tail[1] = ty;
        }

        time++;

        int cdirec = direc;
        if(update_direc[time] != 0) {
            if(update_direc[time] == -1) {
                cdirec = cdirec == 0 ? 3 : cdirec - 1;
            } else {
                cdirec = cdirec == 3 ? 0 : cdirec + 1;
            }
        }
        snake_direc[nx][ny] = cdirec;

        moveSnake(nx, ny, cdirec);
    }
}
