package solved;

import java.util.Scanner;

public class Solution_2029
{
	public static void main(String args[]) throws Exception
	{
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();

		for(int test_case = 1; test_case <= T; test_case++)
		{
			int a = sc.nextInt();
        	int b = sc.nextInt();
			
            System.out.println("#" + test_case + " " + (a / b) + " " + (a % b));
		}
	}
}
