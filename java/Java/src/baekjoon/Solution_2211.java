// solved

package baekjoon;

import java.io.*;
import java.util.*;

public class Solution_2211 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());

        ArrayList<int []>[] linked = new ArrayList[n + 1];
        for(int i = 1; i <= n; i++) linked[i] = new ArrayList<>();

        for(int i = 0; i < m; i++) {
            st = new StringTokenizer(br.readLine());
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());
            int c = Integer.parseInt(st.nextToken());

            int[] link1 = {a, c};
            int[] link2 = {b, c};

            linked[a].add(link2);
            linked[b].add(link1);
        }

        int[] dlist = new int[n + 1];
        Arrays.fill(dlist, Integer.MAX_VALUE);
        dlist[1] = 0;

        PriorityQueue<Node> queue = new PriorityQueue<>();
        queue.add(new Node(1, 0));

        int[][] result = new int[n + 1][2];

        while(!queue.isEmpty()) {
            Node current = queue.poll();
            int num = current.num;
            int time = current.time;

            if(time > dlist[num]) continue;

            for(int[] next: linked[num]) {
                if(dlist[next[0]] > time + next[1]) {
                    dlist[next[0]] = time + next[1];

                    int[] newLine = {next[0], num};
                    result[next[0]] = newLine;

                    queue.add(new Node(next[0], dlist[next[0]]));
                }
            }
        }

        StringBuilder sb = new StringBuilder();

        int count = 0;
        for(int[] posi: result) {
            if(posi[0] == 0 && posi[1] == 0) continue;

            count++;
            sb.append(posi[0] + " " + posi[1] + "\n");
        }

        sb.insert(0, count + "\n");

        System.out.print(sb.toString());
    }

    static class Node implements Comparable<Node> {
        public int num;
        public int time;

        public Node(int num, int time) {
            this.num = num;
            this.time = time;
        }

        @Override
        public int compareTo(Node n) {
            return this.time - n.time;
        }
    }
}
