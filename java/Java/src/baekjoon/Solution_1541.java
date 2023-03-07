// solved

package baekjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Solution_1541 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String input = br.readLine().trim();

        String num = "";
        int positive = 0;
        int negative = 0;
        int positiveEnd = 0;

        for (int i = 0; i < input.length(); i++) {
            char ch = input.charAt(i);
            if (ch != '+' && ch != '-') {
                num += ch;

                if (i == input.length() - 1) {
                    if (positiveEnd == 0) {
                        positive += Integer.parseInt(num);
                    } else {
                        negative += Integer.parseInt(num);
                    }
                }
            } else {
                if (positiveEnd == 0) {
                    positive += Integer.parseInt(num);
                    num = "";
                } else {
                    negative += Integer.parseInt(num);
                    num = "";
                }

                if (ch == '-' && positiveEnd == 0) {
                    positiveEnd = 1;
                }
            }
        }

        System.out.println(positive - negative);
    }
}
