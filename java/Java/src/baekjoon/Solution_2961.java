// solved

package baekjoon;

import java.io.*;
import java.util.*;

public class Solution_2961 {
    public static long[][] queue;
    public static int n;
    public static long min = 1_000_000_000;

    public static void solution(long s, long b, int index) {
        long temp_min = Math.abs(s - b);

        if(min > temp_min) min = temp_min;

        for(int i = index + 1; i < n; i++) {
            long ts = s * queue[i][0];
            long tb = b + queue[i][1];

            solution(ts, tb, i);
        }
    }

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        n = Integer.parseInt(st.nextToken());

        queue = new long[n][2];

        for(int i = 0; i < n; i++) {
            st = new StringTokenizer(br.readLine());
            queue[i][0] = Integer.parseInt(st.nextToken());
            queue[i][1] = Integer.parseInt(st.nextToken());
        }

        for(int i = 0; i < n; i++) {
            solution(queue[i][0], queue[i][1], i);
        }

        System.out.print(min);
    }
}
