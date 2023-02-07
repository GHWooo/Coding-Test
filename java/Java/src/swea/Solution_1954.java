// solved

package swea;

import java.io.*;

public class Solution_1954 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int T = Integer.parseInt(br.readLine());

        int[] dx = {0, 1, 0, -1};
        int[] dy = {1, 0, -1, 0};

        for(int test_case = 1; test_case <= T; test_case++) {
            int N = Integer.parseInt(br.readLine());

            int[][] result = new int[N][N];

            String direc = "right";
            int[] current = {0, -1};

            for(int i = 1; i <= (N * N); i++) {
                int x, y;

                if(direc == "right") {
                    x = current[0] + dx[0];
                    y = current[1] + dy[0];

                    if(y == N - 1 || result[x][y + 1] > 0) direc = "down";
                }
                else if(direc == "down") {
                    x = current[0] + dx[1];
                    y = current[1] + dy[1];

                    if(x == N - 1 || result[x + 1][y] > 0) direc = "left";
                }
                else if(direc == "left") {
                    x = current[0] + dx[2];
                    y = current[1] + dy[2];

                    if(y == 0 || result[x][y - 1] > 0) direc = "up";
                }
                else {
                    x = current[0] + dx[3];
                    y = current[1] + dy[3];

                    if(x == 0 || result[x - 1][y] > 0) direc = "right";
                }

                result[x][y] = i;

                current[0] = x;
                current[1] = y;
            }

            System.out.println("#" + test_case);
            for(int[] line : result) {
                for(int num : line) {
                    System.out.print(num + " ");
                }
                System.out.println();
            }
        }
    }
}
