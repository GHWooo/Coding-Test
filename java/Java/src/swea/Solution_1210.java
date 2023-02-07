// solved

package swea;

import java.io.*;

public class Solution_1210 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        for(int test_case = 1; test_case <= 10; test_case++) {
            br.readLine();

            String[][] board = new String[100][100];
            int[] point = new int[2];

            for(int i = 0; i < 100; i++) {
                String[] line = br.readLine().split(" ");

                for(int j = 0; j < 100; j++) {
                    board[i][j] = line[j];

                    if(i == 99) {
                        if(line[j].equals("2")) {
                            point[0] = 99;
                            point[1] = j;
                        }
                    }
                }
            }

            int[] dx = {-1, 0, 0};
            int[] dy = {0, -1, 1};

            String direc = "up";

            while(point[0] > 0) {
                if(direc.equals("up")) {
                    point[0] += dx[0];
                    point[1] += dy[0];

                    if(point[1] > 0) {
                        if(board[point[0]][point[1] - 1].equals("1")) direc = "left";
                    }
                    if(point[1] < 99) {
                        if(board[point[0]][point[1] + 1].equals("1")) direc = "right";
                    }
                }
                else if(direc.equals("left")) {
                    point[0] += dx[1];
                    point[1] += dy[1];

                    if(point[1] == 0 || board[point[0]][point[1] - 1].equals("0")) direc = "up";
                }
                else {
                    point[0] += dx[2];
                    point[1] += dy[2];

                    if(point[1] == 99 || board[point[0]][point[1] + 1].equals("0")) direc = "up";
                }
            }

            System.out.println("#" + test_case + " " + point[1]);
        }
    }
}

