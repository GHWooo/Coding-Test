// solved

package baekjoon;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.*;

public class Solution_1062 {
    static int n, k;
    static int max = Integer.MIN_VALUE;
    static boolean[] visited;
    static String[] word;

    public static void solution(int alpha, int length) {
        if(length == k - 5) {
            int count = 0;

            for(int i = 0; i < n; i++) {
                boolean read = true;

                for(int j = 0; j < word[i].length(); j++) {
                    if(!visited[word[i].charAt(j) - 'a']) {
                        read = false;
                        break;
                    }
                }
                if(read) count++;
            }

            max = Math.max(max, count);
            return;
        }

        for(int i = alpha; i < 26; i++) {
            if(visited[i] == false) {
                visited[i] = true;
                solution(i, length + 1);
                visited[i] = false;
            }
        }
    }

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        n = Integer.parseInt(st.nextToken());
        k = Integer.parseInt(st.nextToken());

        word = new String[n];

        for(int i = 0; i < n; i++) {
            st = new StringTokenizer(br.readLine());
            String str = st.nextToken();

            str = str.replace("anta", "");
            str = str.replace("tica", "");

            word[i] = str;
        }

        if(k < 5) {
            System.out.println("0");
            return;
        } else if(k == 26) {
            System.out.println(n);
            return;
        }

        visited = new boolean[26];
        visited['a' - 97] = true;
        visited['c' - 97] = true;
        visited['i' - 97] = true;
        visited['n' - 97] = true;
        visited['t' - 97] = true;

        solution(0, 0);

        System.out.print(max);
    }
}
