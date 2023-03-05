// solved

package swea;

import java.io.*;
import java.util.*;

public class Solution_1949 {
    static StringBuilder result = new StringBuilder();
    static int n;
    static int k;
    static int[][] board;
    static boolean[][] visited;
    static ArrayList<int[]> topPosi;
    static int[] dx = {-1, 0, 1, 0};
    static int[] dy = {0, -1, 0, 1};
    static int max;

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int t = Integer.parseInt(st.nextToken());

        for(int test_case = 1; test_case <= t; test_case++) {
            result.append("#" + test_case + " ");

            st = new StringTokenizer(br.readLine());
            n = Integer.parseInt(st.nextToken());
            k = Integer.parseInt(st.nextToken());

            board = new int[n][n];
            max = 0;

            int top = -1;

            for(int i = 0; i < n; i++) {
                st = new StringTokenizer(br.readLine());

                for(int j = 0; j < n; j++) {
                    board[i][j] = Integer.parseInt(st.nextToken());

                    if(top <= board[i][j]) {
                        if(top < board[i][j]) {
                            topPosi = new ArrayList<>();
                            top = board[i][j];
                        };

                        int[] top_xy = {i, j};
                        topPosi.add(top_xy);
                    }
                }
            }

            for(int i = 0; i < n; i++) {
                for(int j = 0; j < n; j++) {
                    cut(i, j);
                }
            }

            result.append(max + "\n");
        }
        System.out.print(result.toString());
    }

    static void cut(int x, int y) {
        for(int i = 0; i <= k; i++) {
            board[x][y] -= i;
            checkRoad();
            board[x][y] += i;
        }
    }

    static void checkRoad() {
        visited = new boolean[n][n];

        for(int[] posi: topPosi) {
            visited[posi[0]][posi[1]] = true;
            dfs(posi[0], posi[1], 1);
            visited[posi[0]][posi[1]] = false;
        }
    }

    static ArrayList<int[]> getNewTop() {
        int top = -1;
        ArrayList<int[]> newTopPosi = new ArrayList<>();

        for(int i = 0; i < n; i++) {
            for(int j = 0; j < n; j++) {
                if(top <= board[i][j]) {
                    if(top < board[i][j]) {
                        newTopPosi = new ArrayList<>();
                        top = board[i][j];
                    };

                    int[] top_xy = {i, j};
                    newTopPosi.add(top_xy);
                }
            }
        }

        return newTopPosi;
    }

    static void dfs(int cx, int cy, int count) {
        boolean next = false;
        int x = cx;
        int y = cy;

        for(int i = 0; i < 4; i++) {
            int nx = x + dx[i];
            int ny = y + dy[i];

            if(nx < 0 || nx >= n || ny < 0 || ny >= n) continue;

            if(board[nx][ny] < board[x][y] && !visited[nx][ny]) {
                next = true;

                visited[nx][ny] = true;
                dfs(nx, ny, count + 1);
                visited[nx][ny] = false;
            }
        }

        if(!next) {
            max = Math.max(max, count);
        }
    }
}
