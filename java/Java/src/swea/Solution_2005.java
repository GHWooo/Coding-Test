// solved
package swea;

import java.util.Scanner;

public class Solution_2005
{
    public static void main(String args[]) throws Exception
    {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();

        for(int test_case = 1; test_case <= T; test_case++)
        {
            int N = sc.nextInt();
            int[][] result = new int[N][];

            for(int i = 0; i < N; i++) {
                int[] line = new int[i + 1];

                if(i == 0) line[i] = 1;
                else {
                    for(int j = 0; j < i + 1; j++) {
                        if(j == 0 || j == i) line[j] = 1;
                        else line[j] = result[i - 1][j - 1] + result[i - 1][j];
                    }
                }

                result[i] = line;
            }

            System.out.println("#" + test_case);
            for(int[] l: result) {
                for(int element: l) {
                    System.out.print(element + " ");
                }
                System.out.println();
            }
        }
    }
}