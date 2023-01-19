package solved;

import java.util.Scanner;

public class Solution_2050
{
	public static void main(String args[]) throws Exception
	{
		Scanner sc = new Scanner(System.in);
		String str = sc.nextLine();
        
        for(int i = 0; i < str.length(); i++) {
            int asc = (int)str.charAt(i);
                
            if(asc > 96) asc -= 96;
            else asc -= 64;
            
        	System.out.print(asc + " ");
        }
	}
}