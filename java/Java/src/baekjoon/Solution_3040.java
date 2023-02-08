// solved
package baekjoon;

import java.io.*;
import java.util.*;

public class Solution_3040 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;

        int[] dwarf = new int[9];
        int sum = 0;

        for(int i = 0; i < 9; i++) {
            st = new StringTokenizer(br.readLine());
            dwarf[i] = Integer.parseInt(st.nextToken());
            sum += dwarf[i];
        }

        int answer1 = 0;
        int answer2 = 0;

        for(int i = 0; i < 8; i++) {
            for(int j = i + 1; j < 9; j++) {
                if(sum - (dwarf[i] + dwarf[j]) == 100) {
                    answer1 = dwarf[i];
                    answer2 = dwarf[j];
                    break;
                }
            }
            if(answer1 > 0) break;
        }

        String result = "";

        for(int i = 0; i < 9; i++) {
            if(dwarf[i] != answer1 && dwarf[i] != answer2) {
                result += (dwarf[i] + "\n");
            }
        }

        System.out.print(result);
    }
}

