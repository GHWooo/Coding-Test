package baekjoon;

import java.io.*;
import java.util.*;

public class Solution_2239 {
    static int[][] board = new int[9][9];
    static ArrayList<int[]> candidate = new ArrayList<>();

    static boolean[][] horizontality = new boolean[9][10];
    static boolean[][] perpendicular = new boolean[9][10];
    static boolean[][] square = new boolean[9][10];

    static boolean end = false;

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        for(int i = 0; i < 9; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            String[] line = st.nextToken().split("");

            for(int j = 0; j < 9; j++) {
                board[i][j] = Integer.parseInt(line[j]);

                if(board[i][j] == 0) {
                    int[] new_candidate = {i, j};
                    candidate.add(new_candidate);
                } else {
                    horizontality[i][board[i][j]] = true;
                    perpendicular[j][board[i][j]] = true;

                    int squarePosi = 0;
                    if(i > 2 && i < 6) squarePosi += 1;
                    if(i > 5) squarePosi += 2;
                    if(j > 2 && j < 6) squarePosi += 3;
                    if(j > 5) squarePosi += 6;

                    square[squarePosi][board[i][j]] = true;
                }
            }
        }

        solution(0);
    }

    static void solution(int index) {
        if(index == candidate.size()) {
            StringBuilder sb = new StringBuilder();

            for(int i = 0; i < 9; i++) {
                for(int j = 0; j < 9; j++) {
                    sb.append(board[i][j]);
                }
                sb.append("\n");
            }

            System.out.print(sb.toString());

            end = true;
            return;
        }

        int[] posi = candidate.get(index);
        int px = posi[0];
        int py = posi[1];

        int squarePosi = 0;
        if(px > 2 && px < 6) squarePosi += 1;
        if(px > 5) squarePosi += 2;
        if(py > 2 && py < 6) squarePosi += 3;
        if(py > 5) squarePosi += 6;

        for(int i = 1; i <= 9; i++) {
            if(!horizontality[px][i] && !perpendicular[py][i] && !square[squarePosi][i]) {
                board[px][py] = i;
                horizontality[px][i] = true;
                perpendicular[py][i] = true;
                square[squarePosi][i] = true;

                solution(index + 1);

                if(end) return;

                board[px][py] = 0;
                horizontality[px][i] = false;
                perpendicular[py][i] = false;
                square[squarePosi][i] = false;
            }
        }
    }
}