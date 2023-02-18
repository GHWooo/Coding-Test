// solved

package baekjoon;

import java.io.*;
import java.util.*;

public class Solution_14675 {
    static int n;
    static int q;
    static int[] parents;
    static int[] children;

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        StringTokenizer st = new StringTokenizer(br.readLine());
        n = Integer.parseInt(st.nextToken());

        parents = new int[n + 1];
        children = new int[n + 1];

        for(int i = 0; i < n - 1; i++) {
            st = new StringTokenizer(br.readLine());
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());

            parents[a] += 1;
            children[b] += 1;
        }

        st = new StringTokenizer(br.readLine());
        q = Integer.parseInt(st.nextToken());

        for(int i = 0; i < q; i++) {
            st = new StringTokenizer(br.readLine());
            int t = Integer.parseInt(st.nextToken());
            int k = Integer.parseInt(st.nextToken());

            if(t == 2) sb.append("yes");
            else {
                if(parents[k] > 0 && children[k] > 0) sb.append("yes");
                if(parents[k] == 0 && children[k] > 0) {
                    if(children[k] > 1) sb.append("yes");
                    else sb.append("no");
                }
                if(parents[k] > 0 && children[k] == 0) {
                    if (parents[k] > 1) sb.append("yes");
                    else sb.append("no");
                }
            }

            if(i < q - 1) sb.append("\n");
        }

        System.out.print(sb.toString());
    }
}
