// solved

package swea;

import java.io.*;
import java.util.*;

public class Solution_1873 {
    static int h;
    static int w;
    static String[][] board;
    static int[] position = {-1, -1};

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        StringBuilder sb = new StringBuilder();

        int t = Integer.parseInt(st.nextToken());

        for(int test_case = 1; test_case <= t; test_case++) {
            st = new StringTokenizer(br.readLine());
            h = Integer.parseInt(st.nextToken());
            w = Integer.parseInt(st.nextToken());

            board = new String[h][w];

            for(int i = 0; i < h; i++) {
                st = new StringTokenizer(br.readLine());
                String line = st.nextToken();
                board[i] = line.split("");

                if(position[0] == -1 && position[1] == -1) {
                    int upcheck = line.indexOf("^");
                    if(upcheck != -1) {
                        position[0] = i;
                        position[1] = upcheck;
                        continue;
                    }

                    int downcheck = line.indexOf("v");
                    if(downcheck != -1) {
                        position[0] = i;
                        position[1] = downcheck;
                        continue;
                    }

                    int leftcheck = line.indexOf("<");
                    if(leftcheck != -1) {
                        position[0] = i;
                        position[1] = leftcheck;
                        continue;
                    }

                    int rightcheck = line.indexOf(">");
                    if(rightcheck != -1) {
                        position[0] = i;
                        position[1] = rightcheck;
                        continue;
                    }
                }
            }

            new StringTokenizer(br.readLine()).nextToken();

            st = new StringTokenizer(br.readLine());
            String[] questions = st.nextToken().split("");

            for(String q : questions) {
                if(q.equals("U")) Up();
                else if(q.equals("D")) Down();
                else if(q.equals("L")) Left();
                else if(q.equals("R")) Right();
                else Shoot();
            }

            sb.append("#" + test_case + " ");

            for(int i = 0; i < h; i++) {
                for(int j = 0; j < w; j++) {
                    sb.append(board[i][j]);
                }
                sb.append("\n");
            }

            position[0] = -1;
            position[1] = -1;
        }

        System.out.print(sb.toString());
    }

    static void Up() {
        board[position[0]][position[1]] = "^";

        if(position[0] > 0) {
            if(board[position[0] - 1][position[1]].equals(".")) {
                board[position[0]][position[1]] = ".";
                board[position[0] - 1][position[1]] = "^";

                position[0]--;
            }
        }
    }

    static void Down() {
        board[position[0]][position[1]] = "v";

        if(position[0] < h - 1) {
            if(board[position[0] + 1][position[1]].equals(".")) {
                board[position[0]][position[1]] = ".";
                board[position[0] + 1][position[1]] = "v";

                position[0]++;
            }
        }
    }

    static void Left() {
        board[position[0]][position[1]] = "<";

        if(position[1] > 0) {
            if(board[position[0]][position[1] - 1].equals(".")) {
                board[position[0]][position[1]] = ".";
                board[position[0]][position[1] - 1] = "<";

                position[1]--;
            }
        }
    }

    static void Right() {
        board[position[0]][position[1]] = ">";

        if(position[1] < w - 1) {
            if(board[position[0]][position[1] + 1].equals(".")) {
                board[position[0]][position[1]] = ".";
                board[position[0]][position[1] + 1] = ">";

                position[1]++;
            }
        }
    }

    static void Shoot() {
        String shape = board[position[0]][position[1]];

        if(shape.equals("^")) {
            for(int i = position[0] - 1; i >= 0; i--) {
                if(board[i][position[1]].equals("*")) {
                    board[i][position[1]] = ".";
                    return;
                }
                else if(board[i][position[1]].equals("#")) return;
            }
        }
        else if(shape.equals("v")) {
            for(int i = position[0] + 1; i < h; i++) {
                if(board[i][position[1]].equals("*")) {
                    board[i][position[1]] = ".";
                    return;
                }
                else if(board[i][position[1]].equals("#")) return;
            }
        }
        else if(shape.equals("<")) {
            for(int i = position[1] - 1; i >= 0; i--) {
                if(board[position[0]][i].equals("*")) {
                    board[position[0]][i] = ".";
                    return;
                }
                else if(board[position[0]][i].equals("#")) return;
            }
        }
        else if(shape.equals(">")) {
            for(int i = position[1] + 1; i < w; i++) {
                if(board[position[0]][i].equals("*")) {
                    board[position[0]][i] = ".";
                    return;
                }
                else if(board[position[0]][i].equals("#")) return;
            }
        }
    }
}
