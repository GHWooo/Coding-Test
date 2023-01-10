// solved
import java.util.Scanner;

public class Solution_2058 {
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        String T = sc.nextLine();
        String[] number_list = T.split("");

        int sum = 0;

        for(int i = 0; i < number_list.length; i++) {
            int number = Integer.parseInt(number_list[i]);
            sum += number;
        }

        System.out.println(sum);
    }
}
