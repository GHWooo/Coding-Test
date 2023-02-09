// solved

package baekjoon;

import java.io.*;
import java.util.*;

public class Solution_2023 {
    static int n;

    static boolean isPrime(int num) {
        for(int i = 2; i <= num / 2; i++) {
            if(num % i == 0)
                return false;
        }
        return true;
    }

    static void solution(int count, int number) {
        if(count == n) {
            if(isPrime(number))
                System.out.println(number);
            return;
        }

        for(int i = 1; i < 10; i++) {
            if(i == 2 || i == 4 || i == 6 || i == 8) continue;
            if(isPrime(number * 10 + i)) solution(count + 1, number * 10 + i);
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        n = Integer.parseInt(st.nextToken());

        solution(1,2);
        solution(1,3);
        solution(1,5);
        solution(1,7);
    }
}