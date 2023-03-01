// solved

package baekjoon;

import java.util.*;
import java.io.*;

public class Solution_17472 {
    static int n;
    static int m;
    static int[][] board;
    static int island_num = 2;
    static ArrayList<ArrayList<int[]>> island = new ArrayList<ArrayList<int[]>>();
    static ArrayList<int[]> square_info;
    static boolean[] visited;
    static boolean[][] cross_visited;

    static int[] dx = {-1, 1, 0, 0};
    static int[] dy = {0, 0, -1, 1};

    static int len = 0;
    static int min = Integer.MAX_VALUE;

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        n = Integer.parseInt(st.nextToken());
        m = Integer.parseInt(st.nextToken());
        board = new int[n][m];

        for(int i = 0; i < n; i++) {
            st = new StringTokenizer(br.readLine());

            for(int j = 0; j < m; j++) {
                board[i][j] = Integer.parseInt(st.nextToken());
            }
        }

        island.add(new ArrayList<int[]>());
        island.add(new ArrayList<int[]>());

        searchBoard();

        visited = new boolean[island_num + 1];
        visited[2] = true;
        cross_visited = new boolean[island_num + 1][island_num + 1];

        island_num -= 3;

        crossIsland(2);

        System.out.print(min == Integer.MAX_VALUE ? -1 : min);
    }

    static void searchBoard() {
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < m; j++) {
                square_info = new ArrayList<int[]>();

                if(board[i][j] == 1) {
                    board[i][j] = -1;
                    searchIsland(i, j);
                    board[i][j] = island_num++;

                    island.add(square_info);
                }
            }
        }
    }

    static void searchIsland(int x, int y) {
        for(int i = 0; i < 4; i++) {
            int nx = x + dx[i];
            int ny = y + dy[i];

            if(nx < 0 || nx >= n || ny < 0 || ny >= m) continue;

            if(board[nx][ny] == 0) {
                findGround(nx, ny, i);
            } else if(board[nx][ny] == 1) {
                board[nx][ny] = -1;
                searchIsland(nx, ny);
                board[nx][ny] = island_num;
            }
        }
    }

    static void findGround(int x, int y, int dec) {
        int count = 0;
        int tx = x;
        int ty = y;

        while(tx >= 0 && tx < n && ty >= 0 && ty < m) {
            if(board[tx][ty] > 0) {
                if(count >= 2) {
                    int[] posi_info = {tx, ty, count};
                    square_info.add(posi_info);
                }
                return;
            }

            count++;

            tx += dx[dec];
            ty += dy[dec];
        }
    }

    static void crossIsland(int index) {
        if(island_num == 0) {
            min = Math.min(min, len);
            return;
        }

        ArrayList<int[]> next = island.get(index);

        for(int[] info: next) {
            int nx = info[0];
            int ny = info[1];
            int count = info[2];
            int nIsland_num = board[nx][ny];

            if(cross_visited[nIsland_num][index] && cross_visited[index][nIsland_num]) continue;

            if(visited[nIsland_num]) {
                if(!cross_visited[nIsland_num][index] && !cross_visited[index][nIsland_num]) {
                    cross_visited[index][nIsland_num] = true;
                    len += count;
                    crossIsland(nIsland_num);
                    len -= count;
                    cross_visited[index][nIsland_num] = false;
                } else {
                    if(!cross_visited[index][nIsland_num]) {
                        cross_visited[index][nIsland_num] = true;
                        crossIsland(nIsland_num);
                        cross_visited[index][nIsland_num] = false;
                    }
                }
            } else {
                island_num--;
                visited[nIsland_num] = true;

                if(!cross_visited[nIsland_num][index] && !cross_visited[index][nIsland_num]) {
                    cross_visited[index][nIsland_num] = true;
                    len += count;
                    crossIsland(nIsland_num);
                    len -= count;
                    cross_visited[index][nIsland_num] = false;
                } else {
                    if(!cross_visited[index][nIsland_num]) {
                        cross_visited[index][nIsland_num] = true;
                        crossIsland(nIsland_num);
                        cross_visited[index][nIsland_num] = false;
                    }
                }

                island_num++;
                visited[nIsland_num] = false;
            }
        }
    }
}
