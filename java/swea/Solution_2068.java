// solved
import java.util.Scanner;

public class Solution_2068 {
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        int T;
        T=sc.nextInt();

        for(int test_case = 1; test_case <= T; test_case++)
        {
            int result = 0;

            for(int i = 0; i < 10; i++) {
                int number = sc.nextInt();
                if(result < number) result = number;
            }

            System.out.println("#" + test_case + " " + result);
        }
    }
}
