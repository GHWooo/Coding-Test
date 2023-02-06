// solved
package swea;

import java.io.*;

public class Solution_1289
{
    public static void main(String args[]) throws Exception
    {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int T = Integer.parseInt(br.readLine());

        for(int test_case = 1; test_case <= T; test_case++)
        {
            String[] init = br.readLine().split("");
            String current = "0";
            int count = 0;

            for(int i = 0; i < init.length; i++) {
                if(!init[i].equals(current)) {
                    current = current == "1" ? "0" : "1";
                    count++;
                }
            }

            System.out.println("#" + test_case + " " + count);
        }
    }
}