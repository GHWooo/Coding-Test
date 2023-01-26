// solved
package swea;

import java.util.Scanner;

public class Solution_2007
{
    public static void main(String args[]) throws Exception
    {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();

        String result = "";

        for(int test_case = 1; test_case <= T; test_case++)
        {
            String[] str_list = sc.next().split("");
            int str_len = str_list.length;

            for(int i = 1; i <= str_len / 2; i++) {
                String compare = "";
                boolean end = false;

                for(int j = 0; j < i; j++) {
                    compare += str_list[j];
                }

                String t_compare = "";

                for(int j = i; j < i * 2; j++) {
                    t_compare += str_list[j];
                }

                if(compare.equals(t_compare)) {
                    System.out.println("#" + test_case + " " + i);
                    break;
                }
            }
        }
    }
}