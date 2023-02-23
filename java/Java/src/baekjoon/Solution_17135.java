// solved

package baekjoon;

import java.io.*;
import java.util.*;

public class Solution_17135 {
    static int n;
    static int m;
    static int d;
    static int[][] board;
    static ArrayList<int[]> enemy = new ArrayList<>();
    static ArrayList<int[]> t_enemy = new ArrayList<>();
    static int[] archer = new int[3];

    static int max_kill;

    static int enemy_count;
    static int kill_count;
    static boolean[] kill_visited;
    static boolean[] shoot_visited;

    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        n = Integer.parseInt(st.nextToken());
        m = Integer.parseInt(st.nextToken());
        d = Integer.parseInt(st.nextToken());

        board = new int[n + 1][m];

        for(int i = 0; i < n; i++) {
            st = new StringTokenizer(br.readLine());

            for(int j = 0; j < m; j++) {
                int space = Integer.parseInt(st.nextToken());

                board[i][j] = space;

                if(space == 1) {
                    int[] one_posi = {i, j};
                    enemy.add(one_posi);
                }
            }
        }

        Collections.sort(enemy, new Comparator<int[]>() {
            @Override
            public int compare(int[] e1, int[] e2) {
                return e1[1] == e2[1] ? e2[0] - e1[0] : e1[1] - e2[1];
            }
        });

        for(int i = 0; i <= m - 3; i++) {
            Archer(i, 0);
        }

        System.out.print(max_kill);
    }

    static void Archer(int index, int count) {
        if(count == 3) {
            Simulation();
            return;
        }

        for(int i = index; i <= m - (3 - count); i++) {
            board[n][i] = 2;
            archer[count] = i;

            Archer(i + 1, count + 1);
            board[n][i] = 0;
        }
    }

    static void Simulation() {
        t_enemy.clear();
        for(int i = 0; i < enemy.size(); i++) {
            t_enemy.add(enemy.get(i));
        }

        kill_count = 0;
        enemy_count = enemy.size();
        kill_visited = new boolean[enemy_count];

        while(enemy_count > 0) {
            shoot_visited = new boolean[3];

            Shoot();
            Move();
        }

        max_kill = Math.max(max_kill, kill_count);
    }

    static void Shoot() {
        Set<Integer> current_kill = new HashSet<Integer>();

        for(int j = 0; j < archer.length; j++) {
            int archer_x = n;
            int archer_y = archer[j];

            int[] min_info = {-1, Integer.MAX_VALUE};

            for(int i = 0; i < t_enemy.size(); i++) {
                if(kill_visited[i]) continue;

                int enemy_x = t_enemy.get(i)[0];
                int enemy_y = t_enemy.get(i)[1];

                int distance = Math.abs(enemy_x - archer_x) + Math.abs(enemy_y - archer_y);

                if(distance <= d) {
                    if(distance < min_info[1]) {
                        min_info[0] = i;
                        min_info[1] = distance;
                    }
                }
            }

            if(min_info[1] < Integer.MAX_VALUE) {
                current_kill.add(min_info[0]);
            }
        }

        for(int index: current_kill) {
            kill_visited[index] = true;
            enemy_count--;
            kill_count++;
        }
    }

    static void Move() {
            for(int i = 0; i < t_enemy.size(); i++) {
                if(kill_visited[i]) continue;

                int next_enemy_x = t_enemy.get(i)[0] + 1;
                int next_enemy_y = t_enemy.get(i)[1];

                if(next_enemy_x < n) {
                    int[] next_enemy = {next_enemy_x, next_enemy_y};

                    t_enemy.set(i, next_enemy);
                } else {
                    kill_visited[i] = true;
                    enemy_count--;
            }
        }
    }
}
