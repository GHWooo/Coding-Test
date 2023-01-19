package swea;

import java.util.Scanner;

public class Solution_2019
{
    public static void main(String args[]) throws Exception
    {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        int temp = 1;

        System.out.print(temp + " ");

        for(int test_case = 1; test_case <= T; test_case++)
        {
            temp *= 2;
            System.out.print(temp + " ");
        }
    }
}