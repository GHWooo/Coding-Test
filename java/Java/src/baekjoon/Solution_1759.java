package baekjoon;

import java.io.*;
import java.util.*;

public class Solution_1759 {
    static int l;
    static int c;
    static StringBuilder result = new StringBuilder();

    static String vowel = "aeiou";
    static String[] input;

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        l = Integer.parseInt(st.nextToken());
        c = Integer.parseInt(st.nextToken());

        input = new String[c];

        st = new StringTokenizer(br.readLine());
        for(int i = 0; i < c; i++) input[i] = st.nextToken();

        Arrays.sort(input);

        for(int i = 0; i < c; i++) {
            String init = input[i];
            int count = vowel.contains(init) ? 1 : 0;

            solution(init, count, i);
        }

        System.out.print(result.toString());
    }

    static void solution(String current, int count, int index) {
        if(current.length() == l) {
            if(count > 0) result.append(current + "\n");
        }

        for(int i = index + 1; i < c; i++) {
            String next = input[i];
            int next_count = vowel.contains(next) ? count + 1 : count;

            if(next_count <= l - 2) solution(current + next, next_count, i);
        }
    }
}