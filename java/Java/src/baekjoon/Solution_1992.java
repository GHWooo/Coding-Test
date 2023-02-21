// solved

package baekjoon;

import java.io.*;
import java.util.*;

public class Solution_1992 {

    static int[][] board;
    static StringBuilder sb = new StringBuilder();

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int N = Integer.parseInt(st.nextToken());
        board = new int[N][N];

        for(int i = 0; i < N; i++) {
            st = new StringTokenizer(br.readLine());
            String[] readline = st.nextToken().split("");

            for(int j = 0; j < N; j++) board[i][j] = Integer.parseInt(readline[j]);
        }

        solution(0, 0, N);
        System.out.println(sb);
    }

    static void solution(int x, int y, int size) {
        if(same(x, y, size)) {
            sb.append(board[x][y]);
            return;
        }

        int newSize = size / 2;

        sb.append('(');
        solution(x, y, newSize);
        solution(x, y + newSize, newSize);
        solution(x + newSize, y, newSize);
        solution(x + newSize, y + newSize, newSize);
        sb.append(')');
    }

    static boolean same(int x, int y, int size) {
        int value = board[x][y];

        for(int i = x; i < x + size; i++) {
            for(int j = y; j < y + size; j++) {
                if(value != board[i][j]) return false;
            }
        }

        return true;
    }

}