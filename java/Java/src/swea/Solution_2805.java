// solved

package swea;

import java.io.*;

public class Solution_2805
{
    public static void main(String args[]) throws Exception
    {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine());

        for(int test_case = 1; test_case <= T; test_case++)
        {
            int N = Integer.parseInt(br.readLine());
            String[][] field = new String[N][N];

            for(int i = 0; i < N; i++) {
                field[i] = br.readLine().split("");
            }

            int mid = N / 2;
            int result = 0;

            for(int i = 0; i < N; i++) {
                if(i < mid) {
                    result += Integer.parseInt(field[i][mid]);

                    for(int j = 1; j < i + 1; j++) {
                        result += Integer.parseInt(field[i][mid - j]);
                        result += Integer.parseInt(field[i][mid + j]);
                    }
                }
                else if(i == mid) {
                    for(int j = 0; j < N; j++) {
                        result += Integer.parseInt(field[i][j]);
                    }
                }
                else {
                    result += Integer.parseInt(field[i][mid]);

                    for(int j = 1; j < (N - i); j++) {
                        result += Integer.parseInt(field[i][mid - j]);
                        result += Integer.parseInt(field[i][mid + j]);
                    }
                }
            }

            System.out.println("#" + test_case + " " + result);
        }
    }
}
