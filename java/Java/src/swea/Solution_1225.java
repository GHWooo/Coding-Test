// solved

package swea;

import java.io.*;
import java.util.*;

public class Solution_1225 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        StringBuffer sb = new StringBuffer();

        for(int test_case = 1; test_case <= 10; test_case++) {
            Queue<Integer> queue = new LinkedList<>();

            br.readLine();
            st = new StringTokenizer(br.readLine());

            for(int i = 0; i < 8; i++) {
                queue.add(Integer.parseInt(st.nextToken()));
            }

            int cycle = 1;

            while(true) {
                int front = queue.poll();

                if(front - cycle <= 0) {
                    queue.add(0);
                    break;
                } else {
                    queue.add(front - cycle);
                }

                cycle++;
                if(cycle == 6) cycle -= 5;
            }

            sb.append("#" + test_case + " ");
            for(int number : queue) {
                sb.append(number + " ");
            }
            sb.append("\n");
        }

        System.out.print(sb.toString());
    }
}
