// solved

package baekjoon;

import java.io.*;
import java.util.*;

public class Solution_5904 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        StringBuilder sb = new StringBuilder("moo");

        int n = Integer.parseInt(st.nextToken());

        if(n <= 3) {
            System.out.print(sb.charAt(n - 1));
            return;
        }

        int k = 0;
        int s_len = 3;

        while(s_len < n) {
            k++;
            s_len = (k + 3) + (s_len * 2);
        }

        while(k >= 0) {
            int possible_s = ((s_len - (k + 3)) / 2) + 1;
            int possible_e = possible_s + (k + 2);

            if(possible_s <= n && possible_e >= n) {
                for(int i = 0; i < k; i++) sb.append("o");

                System.out.print(sb.charAt(n - possible_s));
                return;
            }

            if(n > possible_e) n -= possible_e;

            k--;
            s_len = possible_s - 1;
        }
    }
}
