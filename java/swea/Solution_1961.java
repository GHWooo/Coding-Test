// solved
import java.util.Scanner;

public class Solution_1961 {
    public static int[][] solv(int[][] box, int n) {
        int[][] temp_box = new int[n][n];

        for(int i = 0; i < n; i++) {
            for(int k = 0; k < n; k++) {
                temp_box[k][n - i - 1] = box[i][k];
            }
        }
        return temp_box;
    }

    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();

        for(int test_case = 1; test_case <= T; test_case++)
        {
            int n = sc.nextInt();
            int[][][] result = new int [4][n][n];

            for(int i = 0; i < n; i++) {
                for(int k = 0; k < n; k++) {
                    result[0][i][k] = sc.nextInt();
                }
            }

            result[1] = solv(result[0], n);
            result[2] = solv(result[1], n);
            result[3] = solv(result[2], n);

            System.out.println("#" + test_case);
            for(int i = 0; i < n; i++) {
                for(int k = 1; k <= 3; k++) {
                    for(int j = 0; j < n; j++) {
                        System.out.print(result[k][i][j]);
                    }
                    System.out.print(" ");
                }
                System.out.println();
            }
        }
    }
}
