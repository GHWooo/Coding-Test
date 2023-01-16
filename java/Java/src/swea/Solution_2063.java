// solved
import java.util.Scanner;
import java.util.Collections;
import java.util.ArrayList;

public class Solution_2063 {
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();

        ArrayList<Integer> number_list = new ArrayList<Integer>();

        for(int test_case = 1; test_case <= T; test_case++)
        {
            int number = sc.nextInt();
            number_list.add(number);

        }
        Collections.sort(number_list);

        int result = number_list.get(T / 2);

        System.out.println(result);
    }
}