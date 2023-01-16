// solved
import java.util.Scanner;

public class Solution_1974 {
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        int T=sc.nextInt();

        for(int test_case = 1; test_case <= T; test_case++)
        {
            int result = 1;
            int[][] map = new int[9][9];

            for(int i = 0; i < 9; i++){
                for(int k = 0; k < 9; k++){
                    map[i][k] = sc.nextInt();
                }
            }

            int[][] box = new int[9][9];
            for(int i = 0; i < 9; i++){
                int[] h = new int[9];
                int[] c = new int[9];

                for(int k = 0; k < 9; k++){
                    int box_pos;
                    if(i >= 0 && i <= 2){
                        if(k >= 0 && k <= 2) box_pos = 0;
                        else if(k>= 3 && k<= 5) box_pos = 1;
                        else box_pos = 2;
                    } else if(i >= 3 && i <= 5){
                        if(k >= 0 && k <= 2) box_pos = 3;
                        else if(k>= 3 && k<= 5) box_pos = 4;
                        else box_pos = 5;
                    } else {
                        if(k >= 0 && k <= 2) box_pos = 6;
                        else if(k>= 3 && k<= 5) box_pos = 7;
                        else box_pos = 8;
                    }

                    if(h[map[i][k] - 1] == 1 || c[map[k][i] - 1] == 1 || box[box_pos][map[i][k] - 1] == 1){
                        result = 0; break;
                    }
                    h[map[i][k] - 1] = 1;
                    c[map[k][i] - 1] = 1;
                    box[box_pos][map[i][k] - 1] = 1;
                }
                if(result == 0) break;
            }

            System.out.println("#" + test_case + " " + result);
        }
    }
}
