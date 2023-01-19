package solved;

import java.util.Scanner;

public class Solution_2071
{
	public static void main(String args[]) throws Exception
	{
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();

		for(int test_case = 1; test_case <= T; test_case++)
		{
            int sum = 0;
            
            for(int i = 0; i < 10; i++) {
            	sum += sc.nextInt();
            }
            
            double temp = sum * 0.1;
            
            int avg = (int)Math.round((temp / 100) * 100);
            
            System.out.println("#" + test_case + " " + avg);
		}
	}
}
