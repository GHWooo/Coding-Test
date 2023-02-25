// solved

package baekjoon;

import java.io.*;
import java.util.*;

public class Solution_17471 {
    static int n;
    static int[] population;
    static ArrayList<int []> linked = new ArrayList<>();
    static ArrayList<Integer> fields;
    static boolean[] visited;
    static int sumA;
    static int sumB;
    static int min = Integer.MAX_VALUE;


    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        n = Integer.parseInt(st.nextToken());
        population = new int[n + 1];

        st = new StringTokenizer(br.readLine());
        for(int i = 1; i <= n; i++) population[i] = Integer.parseInt(st.nextToken());

        linked.add(new int[0]);
        for(int i = 1; i <= n; i++) {
            st = new StringTokenizer(br.readLine());

            int m = Integer.parseInt(st.nextToken());
            int[] link = new int[m];

            for(int j = 0; j < m; j++) link[j] = Integer.parseInt(st.nextToken());

            linked.add(link);
        }

        for(int i = 1; i <= n; i++) {
            fields = new ArrayList<>();
            fields.add(i);
            solution(fields, i);
        }

        System.out.print(min == Integer.MAX_VALUE ? -1 : min);
    }

    static void solution(ArrayList<Integer> fields, int index) {
        if(fields.size() < n) {
            check(fields);

            if(fields.size() == n - 1) return;
        }

        for(int i = index + 1; i <= n; i++) {
            fields.add(i);
            solution(fields, i);
            fields.remove(fields.size() - 1);
        }
    }

    static void check(ArrayList<Integer> fields) {
        visited = new boolean[n + 1];
        visited[0] = true;

        sumA = searchA(fields.get(0), 0);

        for(int current: fields) {
            if(!visited[current]) {
                return;
            }
        }

        for(int i = 1; i <= n; i++) {
            if(!visited[i]) {
                sumB = searchB(i, 0);
                break;
            }
        }

        for(boolean v: visited) {
            if(!v) return;
        }

        min = Math.min(min, Math.abs(sumA - sumB));
    }

    static int searchA(int index, int sum) {
        visited[index] = true;
        int nSum = sum + population[index];

        for(int next: linked.get(index)) {
            if(!visited[next] && fields.contains(next)) nSum = searchA(next, nSum);
        }

        return nSum;
    }

    static int searchB(int index, int sum) {
        visited[index] = true;
        int nSum = sum + population[index];

        for(int next: linked.get(index)) {
            if(!visited[next]) nSum = searchB(next, nSum);
        }

        return nSum;
    }
}
