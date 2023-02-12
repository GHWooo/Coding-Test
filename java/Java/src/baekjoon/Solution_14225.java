// solved

package baekjoon;

import java.io.*;
import java.util.*;
public class Solution_14225 {
    static int n;
    static int[] s;
    static boolean[] visited;

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        n = Integer.parseInt(st.nextToken());
        s = new int[n];
        int sum = 0;

        st = new StringTokenizer(br.readLine());
        for(int i = 0; i < n; i++) {
            s[i] = Integer.parseInt(st.nextToken());
            sum += s[i];
        }

        visited = new boolean[sum + 2];

        solution(0, 0);

        for(int i = 1; i <= sum + 1; i++) {
            if(!visited[i]) {
                System.out.print(i);
                return;
            }
        }
    }

    static void solution(int index, int sum) {
        if(index == n) {
            visited[sum] = true;
        } else {
            solution(index + 1, sum);
            solution(index + 1, sum + s[index]);
        }
    }
}
