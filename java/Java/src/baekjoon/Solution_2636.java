// solved

package baekjoon;

import java.io.*;
import java.util.*;

public class Solution_2636 {
    private static int[] dx = {-1, 0, 1, 0};
    private static int[] dy = {0, -1, 0, 1};
    private static int n, m;
    private static int[][] board;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        n = Integer.parseInt(st.nextToken());
        m = Integer.parseInt(st.nextToken());

        board = new int[n][m];
        int[] start = new int[2], end = new int[2];

        for (int i = 0; i < n; i++) {
            st = new StringTokenizer(br.readLine());
            for (int j = 0; j < m; j++) {
                int value = Integer.parseInt(st.nextToken());
                board[i][j] = value;
                if (value != 0) {
                    end[0] = i;
                    end[1] = j;
                    if (start[0] == 0 && start[1] == 0) {
                        start[0] = i;
                        start[1] = j;
                    }
                }
            }
        }

        int count = 0;
        int endCheeseCount = 0;

        while (start[0] != 0 || start[1] != 0) {
            count++;

            int[] newStart = new int[2], newEnd = new int[2];
            boolean endPoint = false;

            List<int[]> temp = new ArrayList<>();

            for (int i = start[0]; i <= end[0]; i++) {
                for (int j = start[1]; j < m; j++) {
                    if (j == m - 1) start[1] = 0;
                    if (board[i][j] == 0) continue;

                    if (direcCheck(i, j)) {
                        temp.add(new int[]{i, j});
                    } else {
                        newEnd = new int[]{i, j};
                        if (newStart[0] == 0 && newStart[1] == 0) newStart = new int[]{i, j};
                    }

                    if (i == end[0] && j == end[1]) {
                        endPoint = true;
                        break;
                    }
                }
                if (endPoint) break;
            }

            endCheeseCount = temp.size();
            temp.forEach(position -> board[position[0]][position[1]] = 0);

            start = newStart.clone();
            end = newEnd.clone();
        }

        System.out.println(count + "\n" + endCheeseCount);
    }

    private static boolean direcCheck(int x, int y) {
        int check = 0;

        for (int i = 0; i < 4; i++) {
            int tx = x + dx[i];
            int ty = y + dy[i];

            if (board[tx][ty] == 0 && edgeCheck(tx, ty)) check++;
        }

        return check >= 1;
    }

    private static boolean edgeCheck(int x, int y) {
        if (x == 0 || x == n - 1 || y == 0 || y == m - 1)
            return true;

        Queue<int[]> queue = new LinkedList<>();
        queue.add(new int[]{x, y});

        boolean[][] visited = new boolean[n][m];
        visited[x][y] = true;

        while (!queue.isEmpty()) {
            int[] current = queue.poll();

            for (int i = 0; i < 4; i++) {
                int nx = current[0] + dx[i];
                int ny = current[1] + dy[i];

                if (visited[nx][ny] || board[nx][ny] != 0) continue;

                if (nx == 0 || nx == n - 1 || ny == 0 || ny == m - 1) return true;

                visited[nx][ny] = true;
                queue.add(new int[]{nx, ny});
            }
        }

        return false;
    }
}