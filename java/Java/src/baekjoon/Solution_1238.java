// solved

package baekjoon;

import java.io.*;
import java.util.*;

public class Solution_1238 {
    static int n;
    static int m;
    static int x;

    static ArrayList<int[]>[] linked;
    static ArrayList<int[]>[] linked_reverse;
    static int[] total_time;
    static boolean[] visited;
    static PriorityQueue<Node> queue;

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        n = Integer.parseInt(st.nextToken());
        m = Integer.parseInt(st.nextToken());
        x = Integer.parseInt(st.nextToken());

        total_time = new int[n + 1];

        linked = new ArrayList[n + 1];
        linked_reverse = new ArrayList[n + 1];
        for(int i = 0; i <= n; i++) linked[i] = new ArrayList<>();
        for(int i = 0; i <= n; i++) linked_reverse[i] = new ArrayList<>();

        for(int i = 0; i < m; i++) {
            st = new StringTokenizer(br.readLine());
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());
            int t = Integer.parseInt(st.nextToken());

            int[] new_info = {b, t};
            int[] new_info_reverse = {a, t};

            linked[a].add(new_info);
            linked_reverse[b].add(new_info_reverse);
        }

        solution(linked);
        solution(linked_reverse);

        System.out.println(Arrays.stream(total_time).max().getAsInt());
    }

    static void solution(ArrayList<int[]>[] linked) {
        int[] temp_time = new int[n + 1];
        Arrays.fill(temp_time, Integer.MAX_VALUE);
        temp_time[x] = 0;

        visited = new boolean[n + 1];

        queue = new PriorityQueue<>();
        queue.add(new Node(x, 0));

        while(!queue.isEmpty()) {
            Node nq = queue.poll();

            int nb = nq.num;

            if (!visited[nb]) {
                visited[nb] = true;

                for(int[] next: linked[nb]) {
                    if(!visited[next[0]] && temp_time[next[0]] > temp_time[nb] + next[1]) {
                        temp_time[next[0]] = temp_time[nb] + next[1];
                        queue.add(new Node(next[0], temp_time[next[0]]));
                    }
                }
            }
        }

        for(int i = 1; i <= n; i++) {
            total_time[i] += temp_time[i];
        }
    }

    static class Node implements Comparable<Node> {
        public int num;
        public int time;

        public Node(int num, int time) {
            this.num = num;
            this.time = time;
        }

        @Override
        public int compareTo(Node node) {
            if(this.time > node.time) return 1;
            else if(this.time < node.time) return -1;
            return 0;
        }
    }

}