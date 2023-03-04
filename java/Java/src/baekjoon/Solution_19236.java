// solved

package baekjoon;

import java.util.*;
import java.io.*;

public class Solution_19236 {
    static int sum;
    static int max;
    static int[] dx = {0, -1, -1, 0, 1, 1, 1, 0, -1};
    static int[] dy = {0, 0, -1, -1, -1, 0, 1, 1, 1};

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;

        int[][][] board = new int[4][4][2];
        int[][] fish_posi = new int[17][2];

        for(int i = 0; i < 4; i++) {
            st = new StringTokenizer(br.readLine());

            for(int j = 0; j < 4; j++) {
                int fish_number = Integer.parseInt(st.nextToken());
                int fish_direc = Integer.parseInt(st.nextToken());

                if(i == 0 && j == 0) {
                    board[i][j][0] = 0;

                    fish_posi[fish_number][0] = -1;
                    fish_posi[fish_number][1] = -1;

                    sum += fish_number;
                } else {
                    board[i][j][0] = fish_number;

                    fish_posi[fish_number][0] = i;
                    fish_posi[fish_number][1] = j;
                }

                board[i][j][1] = fish_direc;
            }
        }

        simulation(0, 0, board, fish_posi);

        System.out.print(max);
    }

    static void simulation(int x, int y, int[][][] board, int[][] fish_posi) {
        moveFish(board, fish_posi);
        ArrayList<int []> next_shark = checkNext(x, y, board);

        if(next_shark.isEmpty()) {
            max = Math.max(max, sum);
            return;
        }

        for(int[] next: next_shark) {
            int[][][] new_board = new int[4][4][2];
            int[][] new_fish_posi = new int[17][2];

            for(int i = 0; i < 4; i++) {
                for(int j = 0; j < 4; j++) {
                    new_board[i][j] = board[i][j].clone();
                }
            }
            for(int i = 0; i < 17; i++) {
                new_fish_posi[i] = fish_posi[i].clone();
            }

            int eat_num = moveShark(x, y, next, new_board, new_fish_posi);

            sum += eat_num;
            simulation(next[0], next[1], new_board, new_fish_posi);
            sum -= eat_num;
        }
    }

    static void moveFish(int[][][] board, int[][] fish_posi) {
        for(int i = 1; i <= 16; i++) {
            if(fish_posi[i][0] == -1) continue;

            int cur_x = fish_posi[i][0];
            int cur_y = fish_posi[i][1];
            int cur_d = board[cur_x][cur_y][1];

            for(int j = 0; j < 8; j++) {
                int nd = cur_d + j;
                if(nd > 8) nd -= 8;

                int next_x = cur_x + dx[nd];
                int next_y = cur_y + dy[nd];

                if(next_x < 0 || next_x >= 4 || next_y < 0 || next_y >= 4 || (board[next_x][next_y][0] == 0)) continue;

                swapFish(i, nd, next_x, next_y, board, fish_posi);
                break;
            }
        }
    }

    static void swapFish(int fish_num, int cur_direc, int next_x, int next_y, int[][][] board, int[][] fish_posi) {
        int next_fish = board[next_x][next_y][0];
        int next_direc = board[next_x][next_y][1];

        int cur_x = fish_posi[fish_num][0];
        int cur_y = fish_posi[fish_num][1];

        board[next_x][next_y][0] = fish_num;
        board[next_x][next_y][1] = cur_direc;
        fish_posi[fish_num][0] = next_x;
        fish_posi[fish_num][1] = next_y;

        board[cur_x][cur_y][0] = next_fish;
        board[cur_x][cur_y][1] = next_direc;

        if(next_fish > 0) {
            fish_posi[next_fish][0] = cur_x;
            fish_posi[next_fish][1] = cur_y;
        }
    }

    static ArrayList<int []> checkNext(int x, int y, int[][][] board) {
        ArrayList<int []> next_shark = new ArrayList<>();

        int shark_direc = board[x][y][1];
        int tx = x + dx[shark_direc];
        int ty = y + dy[shark_direc];

        while(tx >= 0 && tx < 4 && ty >= 0 && ty < 4) {
            if(board[tx][ty][0] != -1) {
                int[] next_posi = {tx, ty};
                next_shark.add(next_posi);
            }

            tx += dx[shark_direc];
            ty += dy[shark_direc];
        }

        return next_shark;
    }

    static int moveShark(int cx, int cy, int[] next, int[][][] board, int[][] fish_posi) {
        int nx = next[0];
        int ny = next[1];
        int nfish = board[nx][ny][0];

        board[nx][ny][0] = 0;
        board[cx][cy][0] = -1;
        fish_posi[nfish][0] = -1;
        fish_posi[nfish][1] = -1;

        return nfish;
    }
}