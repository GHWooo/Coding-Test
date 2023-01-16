// solved
import java.util.Scanner;

public class Solution_1204 {
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        int T;
        T=sc.nextInt();

        for(int test_case = 1; test_case <= T; test_case++)
        {
            sc.nextInt();
            int[] number_list = new int[101];

            for(int i = 0; i < 1000; i++) {
                int number = sc.nextInt();
                number_list[number] += 1;
            }

            int max = 0;
            int result = 0;

            for(int i = 0; i < 100; i++) {
                if(max <= number_list[i]){
                    max = number_list[i];
                    result = i;
                }
            }

            System.out.println("#" + test_case + " " + result);
        }
    }
}
