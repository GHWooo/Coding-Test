// solved

package baekjoon;

import java.io.*;
import java.util.*;
public class Solution_3584 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        StringBuilder sb = new StringBuilder();

        int t = Integer.parseInt(st.nextToken());

        for(int test_case = 0; test_case < t; test_case++) {
            st = new StringTokenizer(br.readLine());
            int n = Integer.parseInt(st.nextToken());

            int[] parents = new int[n + 1];

            for(int i = 0; i < n - 1; i++) {
                st = new StringTokenizer(br.readLine());
                int a = Integer.parseInt(st.nextToken());
                int b = Integer.parseInt(st.nextToken());

                parents[b] = a;
            }

            st = new StringTokenizer(br.readLine());
            int start = Integer.parseInt(st.nextToken());
            int goal = Integer.parseInt(st.nextToken());

            boolean[] visited = new boolean[n + 1];

            int current = start;

            while(true) {
                visited[current] = true;

                if(parents[current] != 0) current = parents[current];
                else break;
            }

            current = goal;
            while(true) {
                if(!visited[current]) current = parents[current];
                else {
                    sb.append(Integer.toString(current));
                    break;
                }
            }

            if(test_case < t - 1) sb.append("\n");
        }

        System.out.print(sb.toString());
    }
}
