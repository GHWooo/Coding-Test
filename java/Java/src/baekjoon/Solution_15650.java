// solved
package baekjoon;

import java.io.*;

public class Solution_15650 {
    public static int n;
    public static int m;
    public static String result = "";

    public static void solution(int number, String temp, int count) {
        if(count == m) {
            result += (temp + "\n");
            return;
        }

        for(int i = number + 1; i <= n; i++) {
            String next_temp = temp + i + " ";
            solution(i, next_temp, count + 1);
        }

    }

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] nm = br.readLine().split(" ");

        n = Integer.parseInt(nm[0]);
        m = Integer.parseInt(nm[1]);

        for(int i = 1; i <= (n - m + 1); i++) {
            String temp = i + " ";
            solution(i, temp, 1);
        }

        System.out.println(result);
    }
}

