// solved

package baekjoon;

import java.io.*;
import java.util.*;

public class Solution_1261 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int m = Integer.parseInt(st.nextToken());
        int n = Integer.parseInt(st.nextToken());

        int[][] board = new int[n][m];
        boolean[][] visited = new boolean[n][m];

        for(int i = 0; i < n; i++) {
            st = new StringTokenizer(br.readLine());
            String[] line = st.nextToken().split("");

            for(int j = 0; j < m; j++) board[i][j] = Integer.parseInt(line[j]);
        }

        PriorityQueue<Node> queue = new PriorityQueue<>();
        queue.add(new Node(0, 0, 0));
        visited[0][0] = true;

        int[] dx = {-1, 0, 1, 0};
        int[] dy = {0, -1, 0, 1};

        int[][] dlist = new int[n][m];
        for(int i = 0; i < n; i++) {
            int[] temp = new int[m];
            Arrays.fill(temp, Integer.MAX_VALUE);

            dlist[i] = temp;
        }

        dlist[0][0] = 0;

        while(!queue.isEmpty()) {
            Node posi = queue.poll();

            int x = posi.x;
            int y = posi.y;
            int item = posi.item;

            for(int i = 0; i < 4; i++) {
                int nx = x + dx[i];
                int ny = y + dy[i];

                if(nx < 0 || nx >= n || ny < 0 || ny >= m) continue;

                dlist[nx][ny] = Math.min(dlist[nx][ny], item + board[nx][ny]);

                if(!visited[nx][ny]) {
                    visited[nx][ny] = true;
                    queue.add(new Node(nx, ny, dlist[nx][ny]));
                }
            }
        }

        System.out.print(dlist[n - 1][m - 1]);
    }

    static class Node implements Comparable<Node> {
        public int x;
        public int y;
        public int item;

        public Node(int x, int y, int item) {
            this.x = x;
            this.y = y;
            this.item = item;
        }

        @Override
        public int compareTo(Node n) {
            return this.item - n.item;
        }
    }
}
