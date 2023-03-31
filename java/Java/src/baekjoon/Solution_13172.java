// solved

package baekjoon;

import java.io.*;
import java.util.*;

public class Solution_13172 {
    static final int P = 1_000_000_007;

    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int M = Integer.parseInt(st.nextToken());

        long N = 1, S = 0;

        for(int i=0;i<M;i++) {
            st = new StringTokenizer(br.readLine());
            int n = Integer.parseInt(st.nextToken());
            int s = Integer.parseInt(st.nextToken());

            S = s * N + S * n;
            N *= n;

            S %= P;
            N %= P;
        }

        StringBuilder sb = new StringBuilder();

        if(S % N != 0) sb.append((search(N, P-2) * S) % P);
        else sb.append(S/N + "");

        System.out.print(sb.toString());
    }

    static long search(long N, int index) {
        if(index == 1) return N;

        long temp = search(N, index/2);

        if(index % 2 == 1) return temp * temp % P * N % P;
        else return temp * temp % P;
    }
}