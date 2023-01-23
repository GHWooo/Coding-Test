package swea;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Solution_1859 {

    public static void main(String[] args) throws IOException{

        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(reader.readLine());

        for(int i = 1; i <= t; i++) {
            int n = Integer.parseInt(reader.readLine());
            int [] number_list = new int[n];

            String [] input = reader.readLine().split(" ");

            for(int j = 0; j < n; j++) {
                number_list[j] = Integer.parseInt(input[j]);
            }

            int max = number_list[n - 1];
            long result = 0;

            for(int j = n - 2; j >= 0; j--) {
                if(max > number_list[j]) {
                    result += max - number_list[j];
                } else {
                    max = number_list[j];
                }
            }

            System.out.println("#" + i + " " + result);
        }
    }
}