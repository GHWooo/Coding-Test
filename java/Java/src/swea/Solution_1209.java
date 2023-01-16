// solved
import java.util.Scanner;

public class Solution_1209 {
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        int T = 10;

        for(int test_case = 1; test_case <= T; test_case++)
        {
            sc.nextInt();

            int result = 0;
            int[] heat_list = new int[100];
            int diagonal_1 = 0;
            int diagonal_2 = 0;

            for(int i = 0; i < 100; i++) {
                int line = 0;
                for(int k = 0; k < 100; k++) {
                    int number = sc.nextInt();

                    line += number;
                    heat_list[k] += number;
                    if(k == 0 + i) diagonal_1 += number;
                    if(k == 99 - i) diagonal_2 += number;
                }
                if(result < line) result = line;
                if(i == 99) {
                    for(int heat : heat_list) {
                        if(result < heat) result = heat;
                    }
                    if(result < diagonal_1) result = diagonal_1;
                    if(result < diagonal_2) result = diagonal_2;
                }
            }

            System.out.println("#" + test_case + " " + result);
        }
    }
}
