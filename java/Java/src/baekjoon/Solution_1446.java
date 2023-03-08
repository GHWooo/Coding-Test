package baekjoon;

import java.io.*;
import java.util.*;

public class Solution_1446 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int n = Integer.parseInt(st.nextToken());
        int d = Integer.parseInt(st.nextToken());

        int[] dlist = new int[d + 1];
        for(int i = 0; i <= d; i++) dlist[i] = i;

        ArrayList<int[]> linked = new ArrayList<>();

        for(int i = 0; i < n; i++) {
            st = new StringTokenizer(br.readLine());
            int s = Integer.parseInt(st.nextToken());
            int e = Integer.parseInt(st.nextToken());
            int len = Integer.parseInt(st.nextToken());

            int[] newLink = {s, e, len};
            linked.add(newLink);
        }

        Collections.sort(linked, (a, b) -> {
            return a[1] - b[1];
        });

        for(int[] link: linked) {
            int s = link[0];
            int e = link[1];
            int len = link[2];

            if(e > d) continue;

            int origin = dlist[e];
            dlist[e] = Math.min(dlist[e], dlist[s] + len);

            if(origin == dlist[e]) continue;

            int cursor = 1;
            for(int j = e + 1; j <= d; j++) dlist[j] = dlist[e] + cursor++;
        }

        System.out.print(dlist[d]);
    }
}