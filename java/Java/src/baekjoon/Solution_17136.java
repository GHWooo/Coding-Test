// solved

package baekjoon;

import java.io.*;
import java.util.*;
public class Solution_17136 {
    static int[][] board = new int[10][10];
    static int[] start = new int[2];
    static int[] confetti;
    static int left = 0;
    static int min = Integer.MAX_VALUE;

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;

        start[0] = -1;

        for(int i = 0; i < 10; i++) {
            st = new StringTokenizer(br.readLine());

            for(int j = 0; j < 10; j++) {
                board[i][j] = Integer.parseInt(st.nextToken());

                if(board[i][j] == 1) {
                    left++;

                    if(start[0] == -1) {
                        start[0] = i;
                        start[1] = j;
                    }
                }
            }
        }

        confetti = new int[6];
        for(int j = 1; j <= 5; j++) confetti[j] = 5;

        searchBoard(start[0], start[1]);

        if(start[0] == -1) min = 0;
        else if(min == Integer.MAX_VALUE) min = -1;

        System.out.print(min);
    }

    static void searchBoard(int x, int y) {
        if(left == 0) {
            min = Math.min(min, confetti[0]);
            return;
        }

        if(x == -1) return;

        if(board[x][y] == 1) {
            for(int size = 5; size > 0; size--) {
                if(confetti[size] == 0 || x + size > 10 || y + size > 10 || left < (size * size)) continue;
                if(!check(x, y, size)) continue;

                confetti[size]--;
                confetti[0]++;
                left -= (size * size);
                fill(x, y, size, 0);

                int[] next = createNext(x, y, size);
                searchBoard(next[0], next[1]);

                confetti[size]++;
                confetti[0]--;
                left += (size * size);
                fill(x, y, size, 1);
            }
        } else {
            int[] next = createNext(x, y, 1);
            searchBoard(next[0], next[1]);
        }
    }

    static boolean check(int x, int y, int size) {
        for(int i = x; i < x + size; i++) {
            for(int j = y; j < y + size; j++) {
                if(board[i][j] == 0) return false;
            }
        }
        return true;
    }

    static void fill(int x, int y, int size, int value) {
        for(int i = x; i < x + size; i++) {
            for(int j = y; j < y + size; j++) {
                if(board[i][j] != value) board[i][j] = value;
            }
        }
    }

    static int[] createNext(int x, int y, int size) {
        int[] next = new int[2];
        next[0] = x;
        next[1] = y + size;

        if(next[1] == 10) {
            if(next[0] == 9) {
                next[0] = -1;
            } else {
                next[0]++;
                next[1] = 0;
            }
        }
        return next;
    }
}
