// solved

package baekjoon;

import java.io.*;
import java.util.*;

public class Solution_18428 {
    static int n;
    static String[][] board;
    static ArrayList<int[]> teacher = new ArrayList<>();
    static boolean result = false;

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        n = Integer.parseInt(st.nextToken());
        board = new String[n][n];

        for(int i = 0; i < n; i++) {
            st = new StringTokenizer(br.readLine());

            for(int j = 0; j < n; j++) {
                String temp = st.nextToken();
                board[i][j] = temp;

                if(temp.equals("T")) {
                    int[] position = {i, j};
                    teacher.add(position);
                }
            }
        }

        for(int i = 0; i < n; i++) {
            for(int j = 0; j < n; j++) {
                if(board[i][j].equals("X")) {
                    board[i][j] = "O";
                    solution(i, j, 1);

                    if(result) {
                        System.out.print("YES");
                        return;
                    }

                    board[i][j] = "X";
                }
            }
        }
        System.out.print("NO");
    }

    static void solution(int x, int y, int count) {
        if(count == 3) {
            if(check()) result = true;
            return;
        }

        if(result || (x == n - 1 && y == n - 1)) return;

        int ty = y < n - 1 ? y + 1 : 0;
        int tx = ty == 0 ? x + 1 : x;

        for(int i = tx; i < n; i++) {
            for(int j = ty; j < n; j++) {
                if(board[i][j].equals("X")) {
                    board[i][j] = "O";
                    solution(i, j, count + 1);
                    board[i][j] = "X";
                }

                if(j == n - 1) ty = 0;
            }
        }
    }

    static boolean check() {
        for(int[] position : teacher) {
            int tx = position[0];
            int ty = position[1];

            for(int i = ty - 1; i > -1; i--) {
                if(board[tx][i].equals("O") || board[tx][i].equals("T")) break;
                if(board[tx][i].equals("S")) return false;
            }
            for(int i = tx - 1; i > -1; i--) {
                if(board[i][ty].equals("O") || board[i][ty].equals("T")) break;
                if(board[i][ty].equals("S")) return false;
            }
            for(int i = ty + 1; i < n; i++) {
                if(board[tx][i].equals("O") || board[tx][i].equals("T")) break;
                if(board[tx][i].equals("S")) return false;
            }
            for(int i = tx + 1; i < n; i++) {
                if(board[i][ty].equals("O") || board[i][ty].equals("T")) break;
                if(board[i][ty].equals("S")) return false;
            }
        }
        return true;
    }
}

