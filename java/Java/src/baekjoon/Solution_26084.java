// solved

package baekjoon;

import java.util.*;
import java.io.*;
public class Solution_26084 {
    static String S[];
    static int N;

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        S = new String[3];
        S = st.nextToken().split("");

        st = new StringTokenizer(br.readLine());
        N = Integer.parseInt(st.nextToken());

        long[] visited = new long[26];
        for(int i = 0; i < 3; i++) {
            int alpha_num = (int)S[i].charAt(0) - 65;
            visited[alpha_num]++;
        }

        long[] alpha_visited = new long[26];
        for(int i = 0; i < N; i++) {
            st = new StringTokenizer(br.readLine());
            int alpha_num = (int)st.nextToken().charAt(0) - 65;
            alpha_visited[alpha_num]++;
        }

        long count = 1;
        for(int i = 0; i < 26; i++) {
            if(visited[i] != 0) count *= solution(alpha_visited[i], visited[i]);
        }

        System.out.print(count);
    }

    static long solution(long n, long r) {
        if (r == 1) {
            return n;
        } else if (r == 2) {
            return (n * (n - 1)) / 2;
        } else {
            return (n * (n - 1) * (n - 2)) / 6;
        }
    }
}
