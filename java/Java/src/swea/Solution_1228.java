// solved

package swea;

import java.io.*;
import java.util.*;

public class Solution_1228 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;

        for(int test_case = 1; test_case <= 10; test_case++) {
            LinkedList<String> linked = new LinkedList<String>();

            st = new StringTokenizer(br.readLine());
            int n = Integer.parseInt(st.nextToken());

            st = new StringTokenizer(br.readLine());
            for(int i = 0; i < n; i++) linked.add(st.nextToken());

            st = new StringTokenizer(br.readLine());
            int m = Integer.parseInt(st.nextToken());

            st = new StringTokenizer(br.readLine());
            for(int i = 0; i < m; i++) {
                st.nextToken();
                int index = Integer.parseInt(st.nextToken());
                int count = Integer.parseInt(st.nextToken());

                for(int j = 0; j < count; j++) {
                    String next = st.nextToken();
                    linked.add(index, next);

                    index++;
                }
            }

            StringBuffer sb = new StringBuffer();

            for(int i = 0; i < 10; i++) {
                sb.append(" " + linked.get(i));
            }

            System.out.println("#" + test_case + " " + sb.toString());
        }
    }
}
