// solved

package baekjoon;

import java.util.*;
import java.io.*;

public class Solution_17281 {
    static int n;
    static int[][] player;
    static int[] batting_order;
    static boolean[] visited;
    static boolean[] ground;
    static int out;
    static int score;
    static int next;
    static int max = 0;

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        n = Integer.parseInt(st.nextToken());

        player = new int[n][10];

        for(int inning = 0; inning < n; inning++) {
            st = new StringTokenizer(br.readLine());

            for(int i = 1; i < 10; i++) {
                int current_player = Integer.parseInt(st.nextToken());
                player[inning][i] = current_player;
            }
        }

        batting_order = new int[10];
        batting_order[4] = 1;

        visited = new boolean[10];
        visited[1] = true;

        permutation(1);

        System.out.print(max);
    }

    static void permutation(int index) {
        if(index == 4) {
            permutation(5);
            return;
        }
        if(index == 10) {
            playGame();
            return;
        }

        for(int i = 2; i < 10; i++) {
            if(visited[i]) continue;

            visited[i] = true;
            batting_order[index] = i;
            permutation(index + 1);
            visited[i] = false;
            batting_order[index] = 0;
        }
    }

    static void playGame() {
        score = 0;
        next = 1;

        for(int inning = 0; inning < n; inning++) {
            ground = new boolean[4];
            out = 0;

            while(out < 3) {
                int order = batting_order[next++];

                switch (player[inning][order]) {
                    case 0:
                        out++;
                        break;
                    case 1:
                        for(int i = 3; i > 0; i--) {
                            if(ground[i]) {
                                if(i == 3) {
                                    ground[i] = false;
                                    score++;
                                }
                                else {
                                    ground[i] = false;
                                    ground[i + 1] = true;
                                }
                            }
                        }
                        ground[1] = true;
                        break;
                    case 2:
                        for(int i = 3; i > 0; i--) {
                            if(ground[i]) {
                                if(i >= 2) {
                                    ground[i] = false;
                                    score++;
                                }
                                else {
                                    ground[i] = false;
                                    ground[i + 2] = true;
                                }
                            }
                        }
                        ground[2] = true;
                        break;
                    case 3:
                        for(int i = 3; i > 0; i--) {
                            if(ground[i]) {
                                ground[i] = false;
                                score++;
                            }
                        }
                        ground[3] = true;
                        break;
                    case 4:
                        for(int i = 3; i > 0; i--) {
                            if(ground[i]) {
                                ground[i] = false;
                                score++;
                            }
                        }
                        score++;
                        break;
                }

                if(next == 10) next = 1;
            }
        }

        max = Math.max(max, score);
    }
}
