// solved

package swea;

import java.io.*;
import java.util.*;

public class Solution_5650 {
    static StringBuilder result = new StringBuilder();
    static int n;
    static int[][] board;
    static ArrayList<int[]>[] hole = new ArrayList[11];
    static int score;
    static int max;

    static int[][] dbox = {{}, {2, 0, 3, 1}, {3, 2, 0, 1}, {1, 3, 0, 2}, {2, 3, 1, 0}, {2, 3, 0, 1}};
    static int[] dx = {-1, 0, 1, 0};
    static int[] dy = {0, -1, 0, 1};

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int t = Integer.parseInt(st.nextToken());

        for(int test_case = 1; test_case <= t; test_case++) {
            result.append("#" + test_case + " ");

            st = new StringTokenizer(br.readLine());
            n = Integer.parseInt(st.nextToken().trim());

            board = new int[n][n];
            max = 0;

            for(int i = 6; i <= 10; i++) hole[i] = new ArrayList<>();

            ArrayList<int[]> startPoint = new ArrayList<>();

            for(int i = 0; i < n; i++) {
                st = new StringTokenizer(br.readLine());

                for(int j = 0; j < n; j++) {
                    board[i][j] = Integer.parseInt(st.nextToken());

                    if(board[i][j] == 0) {
                        int[] start_posi = {i, j};

                        startPoint.add(start_posi);
                    }

                    if(board[i][j] >= 6) {
                        int[] hole_posi = {i, j};

                        hole[board[i][j]].add(hole_posi);
                    }
                }
            }

            for(int[] start: startPoint) {
                for(int i = 0; i < 4; i++) {
                    playGame(start[0], start[1], i);
                }
            }

            result.append(max + "\n");
        }
        System.out.print(result.toString());
    }

    static void playGame(int cx, int cy, int direc) {
        score = 0;

        int x = cx;
        int y = cy;

        while(true) {
            int nx = 0;
            int ny = 0;
            int number = board[x][y];

            if(number >= 1 && number <= 5) {
                direc = dbox[number][direc];
                score++;
            }

            nx = x + dx[direc];
            ny = y + dy[direc];

            if(nx < 0 || nx >= n || ny < 0 || ny >= n) {
                direc = dbox[5][direc];
                nx = x;
                ny = y;
                score++;
            }

            if(board[nx][ny] == -1 || (nx == cx && ny == cy)) {
                max = Math.max(max, score);
                return;
            }

            if(board[nx][ny] >= 6) {
                int hole_num = board[nx][ny];
                if(hole[hole_num].get(0)[0] == nx && hole[hole_num].get(0)[1] == ny) {
                    nx = hole[hole_num].get(1)[0];
                    ny = hole[hole_num].get(1)[1];
                } else {
                    nx = hole[hole_num].get(0)[0];
                    ny = hole[hole_num].get(0)[1];
                }
            }

            x = nx;
            y = ny;
        }
    }
}
