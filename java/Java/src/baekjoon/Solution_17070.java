// solved

package baekjoon;

import java.io.*;
import java.util.*;

public class Solution_17070 {
    static int n;
    static String board[][];
    static boolean[][][][] visited;

    static int[][] horizon = {{0, 1, 0, 1, 0}, {0, 1, 1, 1, 1}};
    static int[][] perpen = {{1, 0, 1, 0, 2}, {1, 0, 1, 1, 1}};
    static int[][] diagonal = {{1, 1, 0, 1, 0}, {1, 1, 1, 1, 1}, {1, 1, 1, 0, 2}};

    static Queue<int[]> queue = new LinkedList<>();

    static int count = 0;

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        n = Integer.parseInt(st.nextToken());

        board = new String[n][n];
        visited = new boolean[n][n][n][n];

        for(int i = 0; i < n; i++) {
            st = new StringTokenizer(br.readLine());

            for(int j = 0; j < n; j++) {
                board[i][j] = st.nextToken();
            }
        }

        int[] init = {0, 0, 0, 1, 0};

        solution(init);

        System.out.print(count);
    }

    static void solution(int[] current) {
        int x2 = current[2];
        int y2 = current[3];

        if(x2 == n - 1 && y2 == n - 1) {
            count++;
            return;
        }

        if(current[4] == 0) {
            for(int[] next: horizon) {
                int[] posi = move(current, next);

                if(posi[0] != -1) {
                    visited[posi[0]][posi[1]][posi[2]][posi[3]] = true;
                    solution(posi);
                    visited[posi[0]][posi[1]][posi[2]][posi[3]] = false;
                }
            }
        }
        else if(current[4] == 2) {
            for(int[] next: perpen) {
                int[] posi = move(current, next);

                if(posi[0] != -1) {
                    visited[posi[0]][posi[1]][posi[2]][posi[3]] = true;
                    solution(posi);
                    visited[posi[0]][posi[1]][posi[2]][posi[3]] = false;
                }
            }
        }
        else {
            for(int[] next: diagonal) {
                int[] posi = move(current, next);

                if(posi[0] != -1) {
                    visited[posi[0]][posi[1]][posi[2]][posi[3]] = true;
                    solution(posi);
                    visited[posi[0]][posi[1]][posi[2]][posi[3]] = false;
                }
            }
        }
    }

    static int[] move(int[] current, int[] next) {
        int[] answer = {-1, -1, -1, -1, next[4]};

        int nx1 = current[0] + next[0];
        int ny1 = current[1] + next[1];
        int nx2 = current[2] + next[2];
        int ny2 = current[3] + next[3];

        if(nx1 >= 0 && ny1 >= 0 && nx2 >= 0 && ny2 >= 0
                && nx1 < n && ny1 < n && nx2 < n && ny2 < n) {
            if(visited[nx1][ny1][nx2][ny2] || board[nx2][ny2].equals("1")) return answer;

            if(next[4] == 1) {
                if(board[nx2 - 1][ny2].equals("1") || board[nx2][ny2 - 1].equals("1"))
                    return answer;
            }

            answer[0] = nx1;
            answer[1] = ny1;
            answer[2] = nx2;
            answer[3] = ny2;
        }

        return answer;
    }
}