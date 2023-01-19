package solved;

import java.util.Scanner;

public class Solution_2056
{
	public static void main(String args[]) throws Exception
	{
		Scanner sc = new Scanner(System.in);
		int T=sc.nextInt();
        sc.nextLine();

		for(int test_case = 1; test_case <= T; test_case++)
		{
			String str_date = sc.nextLine();
            String[] list_date = str_date.split("");
            
            String year = "";
            String month = "";
            String day = "";
            
            for(int i = 0; i < 4; i++){
            	year += list_date[i];
            }
            
            int temp_month;
            int temp_day;
            
            for(int i = 4; i < 6; i++) {
            	month += list_date[i];
            }
            temp_month = Integer.parseInt(month);
            
            for(int i = 6; i < 8; i++) {
            	day += list_date[i];
            }
            temp_day = Integer.parseInt(day);
            
            if(temp_month < 1 || temp_month > 12) {
            	System.out.println("#" + test_case + " -1");
                continue;
            }
            
            if(temp_month == 2) {
            	if(temp_day < 1 || temp_day > 28) {
                    System.out.println("#" + test_case + " -1");
                    continue;
                }
            } 
            else if (temp_month == 4 || temp_month == 6 || temp_month == 9 || temp_month == 11) {
            	if(temp_day < 1 || temp_day > 30) {
                    System.out.println("#" + test_case + " -1");
                    continue;
                }
            } else {
                if(temp_day < 1 || temp_day > 31) {
                        System.out.println("#" + test_case + " -1");
                        continue;
                    }
            }
            
            System.out.println("#" + test_case + " " + year + "/" + month + "/" + day);
		}
	}
}
