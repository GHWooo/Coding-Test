package swea;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Solution_1926 {

    public static void main(String[] args) throws IOException{
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(reader.readLine());

        String result = "";

        for(int i = 1; i <= n; i++) {
            String clap = "";
            String[] str_num = Integer.toString(i).split("");

            for(String num: str_num) {
                if(Integer.parseInt(num) % 3 == 0 && Integer.parseInt(num) != 0) clap += "-";
            }

            if(clap == "") result += (Integer.toString(i) + " ");
            else result += (clap + " ");
        }

        System.out.print(result);
    }
}