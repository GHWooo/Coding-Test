// solved

package swea;

import java.io.*;
import java.util.*;

public class Solution_1249 {
    static int n;
    static int[][] board;
    static boolean[][] visited;
    static StringBuilder sb = new StringBuilder();

    static int[] dx = {-1, 1, 0, 0};
    static int[] dy = {0, 0, -1, 1};

    static int min;


    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int t = Integer.parseInt(st.nextToken());

        for(int test_case = 1; test_case <= t; test_case++) {
            sb.append("#" + test_case + " ");

            st = new StringTokenizer(br.readLine());
            n = Integer.parseInt(st.nextToken());

            board = new int[n][n];
            visited = new boolean[n][n];

            for (int i = 0; i < n; i++) {
                st = new StringTokenizer(br.readLine());
                String[] line = st.nextToken().split("");

                for (int j = 0; j < n; j++) {
                    board[i][j] = Integer.parseInt(line[j]);
                }
            }

            PriorityQueue<position> queue = new PriorityQueue<>();
            queue.add(new position(0, 0, 0));
            visited[0][0] = true;
            min = Integer.MAX_VALUE;

            while(!queue.isEmpty()) {
                position current = queue.poll();

                for(int i = 0; i < 4; i++) {
                    int nx = current.x + dx[i];
                    int ny = current.y + dy[i];

                    if(nx < 0 || nx >= n || ny < 0 || ny >= n) continue;

                    int ntime = board[nx][ny] + current.time;

                    if(nx == n - 1 && ny == n - 1) {
                        min = Math.min(ntime, min);
                        continue;
                    }

                    if(visited[nx][ny]) continue;
                    visited[nx][ny] = true;
                    queue.add(new position(nx, ny, ntime));
                }
            }

            sb.append(min + "\n");
        }

        System.out.print(sb.toString());
    }

    static class position implements Comparable<position> {
        int x, y, time;

        position(int x, int y, int time) {
            this.x = x;
            this.y = y;
            this.time = time;
        }

        @Override
        public int compareTo(position p) {
            if(this.time < p.time) return -1;
            else if(this.time > p.time) return 1;
            return 0;
        }
    }
}
