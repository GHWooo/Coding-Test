// solved

package swea;

import java.io.*;
import java.util.*;

public class Solution_5658 {
    static StringBuilder result = new StringBuilder();
    static int n;
    static int k;

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int t = Integer.parseInt(st.nextToken());

        for(int test_case = 1; test_case <= t; test_case++) {
            result.append("#" + test_case + " ");

            st = new StringTokenizer(br.readLine());
            n = Integer.parseInt(st.nextToken());
            k = Integer.parseInt(st.nextToken());

            st = new StringTokenizer(br.readLine());
            String[] str = st.nextToken().split("");

            HashSet<Long> set = new HashSet<>();

            int m = n / 4;

            for(int i = 0; i < m; i++) {
                int cursor = i;
                for(int j = 0; j < 4; j++) {
                    StringBuilder sb = new StringBuilder();

                    for(int v = 0; v < m; v++) {
                        sb.append(str[cursor++]);

                        if(cursor >= n) cursor = 0;
                    }

                    Number16 answer = new Number16(sb.toString());
                    set.add(answer.value);
                }
            }

            ArrayList<Long> listSet = new ArrayList<>(set);
            Collections.sort(listSet, Collections.reverseOrder());

            result.append(listSet.get(k - 1) + "\n");
        }

        System.out.print(result.toString());
    }

    static class Number16 {
        long value;
        public Number16(String num) {
            String[] numSplit = num.split("");

            long sum = 0;
            int cursor = 0;

            for(int i = numSplit.length - 1; i > -1; i--) {
                long temp = (long)Math.pow(16, cursor++);

                String tnum = numSplit[i];
                if(tnum.equals("A")) tnum = "10";
                if(tnum.equals("B")) tnum = "11";
                if(tnum.equals("C")) tnum = "12";
                if(tnum.equals("D")) tnum = "13";
                if(tnum.equals("E")) tnum = "14";
                if(tnum.equals("F")) tnum = "15";

                sum += (temp * (long)Integer.parseInt(tnum));
            }

            this.value = sum;
        }
    }
}
