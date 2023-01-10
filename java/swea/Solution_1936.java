// solved
import java.util.Scanner;

public class Solution_1936 {
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);

        String result = "A";
        int temp_1 = sc.nextInt();
        int temp_2 = sc.nextInt();

        if(temp_1 < temp_2) result = "B";

        System.out.println(result);
    }
}
