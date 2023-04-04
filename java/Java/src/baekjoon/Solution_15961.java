// solved

package baekjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Solution_15961 {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static int[] sushiArr;
    static int[] sushiNum;

    public static void main(String[] args) throws IOException {
        String[] st = br.readLine().split(" ");
        int n = Integer.parseInt(st[0]);
        int d = Integer.parseInt(st[1]);
        int k = Integer.parseInt(st[2]);
        int c = Integer.parseInt(st[3]);

        sushiArr = new int[n + k];
        sushiNum = new int[d + 1];

        sushiNum[c]++;

        int result = 1;
        int max = 0;

        for (int i = 0; i < k; i++) {
            int sushi = Integer.parseInt(br.readLine());
            sushiArr[i] = sushi;

            if (sushiNum[sushi] == 0) result++;
            sushiNum[sushi]++;
        }

        max = result;

        int front = 0;
        for (int i = k; i < n; i++) {
            int sushi = Integer.parseInt(br.readLine());
            sushiArr[i] = sushi;

            sushiNum[sushiArr[front]]--;
            if (sushiNum[sushiArr[front]] == 0) result--;

            if (sushiNum[sushi] == 0) result++;
            sushiNum[sushi]++;

            max = max > result ? max : result;

            front++;
        }

        for (int i = 0; i < k; i++) {
            sushiArr[n + i] = sushiArr[i];

            sushiNum[sushiArr[front]]--;
            if (sushiNum[sushiArr[front]] == 0) result--;

            if (sushiNum[sushiArr[n + i]] == 0) result++;
            sushiNum[sushiArr[n + i]]++;

            max = max > result ? max : result;

            front++;
        }

        System.out.println(max);
    }
}