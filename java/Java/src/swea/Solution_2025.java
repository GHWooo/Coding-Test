package solved;

import java.util.Scanner;

public class Solution_2025
{
	public static void main(String args[]) throws Exception
	{
		Scanner sc = new Scanner(System.in);
		int T=sc.nextInt();
		int sum = 0;
        
		for(int test_case = 1; test_case <= T; test_case++)
		{
			sum += test_case;
		}
        
        System.out.print(sum);
	}
}