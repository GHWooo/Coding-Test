package baekjoon;

import java.io.*;
import java.util.*;

public class Solution_16637 {
    static int n;
    static String[] formula;
    static String[] t_formula;
    static boolean[] visited;
    static boolean[] formula_visited;

    static int max = Integer.MIN_VALUE;

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        n = Integer.parseInt(st.nextToken());
        n /= 2;

        visited = new boolean[n + 1];

        st = new StringTokenizer(br.readLine());
        formula = st.nextToken().split("");

        if(n == 0) {
            System.out.print(formula[0]);
            return;
        }

        for(int i = 1; i <= n; i++) {
            ArrayList<Integer> temp = new ArrayList<>();
            temp.add(i);

            visited[i] = true;
            search(i, temp);
            visited[i] = false;
        }

        System.out.print(max);
    }

    static void search(int index, ArrayList<Integer> temp) {
        calculate(temp);

        for(int i = index + 2; i <= n; i++) {
            if(visited[i]) continue;

            temp.add(i);
            visited[i] = true;
            search(i, temp);
            visited[i] = false;
            temp.remove(temp.size() - 1);
        }
    }

    static void calculate(ArrayList<Integer> temp) {
        int answer = 0;
        t_formula = formula.clone();
        formula_visited = new boolean[(n * 2) + 2];

        for(int index: temp) {
            index = (index * 2) - 1;
            formula_visited[index] = true;

            String current = t_formula[index];
            int left = Integer.parseInt(t_formula[index - 1]);
            int right = Integer.parseInt(t_formula[index + 1]);

            if(current.equals("+")) answer = left + right;
            if(current.equals("-")) answer = left - right;
            if(current.equals("*")) answer = left * right;

            check(index, index, Integer.toString(answer));
        }

        for(int i = 1; i < (n * 2) + 1; i += 2) {
            if(formula_visited[i]) continue;
            formula_visited[i] = true;

            String current = t_formula[i];
            int left = Integer.parseInt(t_formula[i - 1]);
            int right = Integer.parseInt(t_formula[i + 1]);

            if(current.equals("+")) answer = left + right;
            if(current.equals("-")) answer = left - right;
            if(current.equals("*")) answer = left * right;

            check(i, i, Integer.toString(answer));
        }

        max = Math.max(max, answer);
    }

    static void check(int index, int pre, String answer) {
        if(formula_visited[index]) {
            t_formula[index - 1] = answer;
            t_formula[index + 1] = answer;

            if(index < (n * 2) - 2 && index + 2 != pre) {
                check(index + 2, index, answer);
            }
            if(index > 2 && index - 2 != pre) {
                check(index - 2, index, answer);
            }
        }
    }
}