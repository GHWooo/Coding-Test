// solved
import java.util.Scanner;

public class Solution_1959 {
    public static void main(String args[]) throws Exception
    {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();

        for(int test_case = 1; test_case <= T; test_case++)
        {
            int result = 0;

            int N = sc.nextInt();
            int M = sc.nextInt();

            int[] N_list = new int[N];
            int[] M_list = new int[M];

            for(int i = 0; i < N; i++) {
                N_list[i] = sc.nextInt();
            }

            for(int i = 0; i < M; i++) {
                M_list[i] = sc.nextInt();
            }

            int standard = N;
            if(N > M) standard = M;

            int count = 0;

            if(standard == N) count = M - N + 1;
            else count = N - M + 1;

            for(int i = 0; i < count; i++) {
                int sum = 0;
                int small_standard = 0;

                for(int k = i; k < i + standard; k++) {
                    int temp;
                    if(standard == N) temp = N_list[small_standard++] * M_list[k];
                    else temp = N_list[k] * M_list[small_standard++];

                    sum += temp;
                }

                if(result < sum) result = sum;
            }

            System.out.println("#" + test_case + " " + result);
        }
    }
}
