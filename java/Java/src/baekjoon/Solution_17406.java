// solved

package baekjoon;

import java.io.*;
import java.util.*;

public class Solution_17406 {
    static int n;
    static int m;
    static int k;
    static int[][] board;
    static int[][] func;
    static int result = 0;

    static void getMin(int[][] board) {
        for(int[] line: board) {
            int sum = 0;
            for(int num: line) {
                sum += num;
            }

            if(result == 0) result = sum;
            else {
                if(result > sum) result = sum;
            }
        }
    }
    static void rotation(int x, int y, int s, int[][] cur_board) {
//        System.out.println(x + " " + y + " " + s);
        int tx = x - 1;
        int ty = y - 1;
        int current = cur_board[tx][ty];

        for(int i = 1; i <= s * 2; i++) {
            int temp = cur_board[tx][++ty];
            cur_board[tx][ty] = current;
            current = temp;
        }
        for(int i = 1; i <= s * 2; i++) {
            int temp = cur_board[++tx][ty];
            cur_board[tx][ty] = current;
            current = temp;
        }
        for(int i = 1; i <= s * 2; i++) {
            int temp = cur_board[tx][--ty];
            cur_board[tx][ty] = current;
            current = temp;
        }
        for(int i = 1; i <= s * 2; i++) {
            int temp = cur_board[--tx][ty];
            cur_board[tx][ty] = current;
            current = temp;
        }

//        for(int[] temp1: cur_board) {
//            for(int num: temp1) {
//                System.out.print(num + " ");
//            }
//            System.out.println();
//        }

        if(s > 1) rotation(x + 1, y + 1, s - 1, cur_board);
    }

    static void solution(int index, boolean[] pre_visited, int[][] pre_board, int count) {
        boolean[] visited = pre_visited.clone();
        visited[index] = true;

        int[][] board = new int[n][m];
        for(int i = 0; i < n; i++) {
            board[i] = pre_board[i].clone();
        }

        int r = func[index][0];
        int c = func[index][1];
        int s = func[index][2];

        rotation(r - s, c - s, s, board);

        if(count == k) {
            getMin(board);
        } else {
            for(int i = 0; i < k; i++) {
                if(!visited[i]) solution(i, visited, board, count + 1);
            }

        }
    }

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        n = Integer.parseInt(st.nextToken());
        m = Integer.parseInt(st.nextToken());
        k = Integer.parseInt(st.nextToken());

        board = new int[n][m];
        func = new int[k][3];

        for(int i = 0; i < n; i++) {
            st = new StringTokenizer(br.readLine());
            for(int j = 0; j < m; j++) board[i][j] = Integer.parseInt(st.nextToken());
        }

        for(int i = 0; i < k; i++) {
            st = new StringTokenizer(br.readLine());
            func[i][0] = Integer.parseInt(st.nextToken());
            func[i][1] = Integer.parseInt(st.nextToken());
            func[i][2] = Integer.parseInt(st.nextToken());
        }

        for(int i = 0; i < k; i++) {
            boolean[] visited = new boolean[k];

            solution(i, visited, board, 1);
        }

        System.out.print(result);
    }
}
