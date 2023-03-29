// solved

package baekjoon;

import java.io.*;
import java.util.*;

public class Solution_10971 {
    static int n;
    static int[][] board;
    static int result;

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        n = Integer.parseInt(st.nextToken());
        board = new int[n][n];

        for(int i = 0; i < n; i++) {
            st = new StringTokenizer(br.readLine());

            for(int j = 0; j < n; j++) {
                board[i][j] = Integer.parseInt(st.nextToken());
            }
        }

        ArrayList<Integer> next = new ArrayList<>();

        for(int i = 1; i < n; i++)
            if(board[0][i] > 0) next.add(i);

        result = Integer.MAX_VALUE;

        for(int i = 0; i < next.size(); i++) {
            ArrayList<Integer> visited = new ArrayList<>();
            visited.add(next.get(i));

            int count = board[0][next.get(i)];

            solution(visited, next.get(i), count);
        }

        System.out.print(result);
    }

    static void solution(ArrayList<Integer> visited, int current, int count) {
        if(visited.size() == n - 1) {
            if(board[current][0] > 0) {
                int t_count = count + board[current][0];
                result = Math.min(result, t_count);
            }

            return;
        }

        for(int i = 1; i < n; i++) {
            if(!visited.contains(i) && board[current][i] > 0) {
                ArrayList<Integer> t_visited = new ArrayList<>();

                for(int v: visited) t_visited.add(v);
                t_visited.add(i);

                solution(t_visited, i, count + board[current][i]);
            }
        }
    }
}
