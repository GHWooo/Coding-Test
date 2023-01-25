// solved
package baekjoon;

import java.util.Scanner;

public class Solution_2596 {

    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        String[][] sol = new String[][] {{"000000", "A"}, {"001111", "B"}, {"010011", "C"}, {"011100", "D"}, {"100110", "E"}, {"101001", "F"}, {"110101", "G"}, {"111010", "H"}};

        int T = sc.nextInt();
        sc.nextLine();

        String[] msg_list = sc.nextLine().split("");

        String result = "";

        for(int i = 0; i < T; i++) {
            String msg = "";

            for(int j = i * 6; j < i * 6 + 6; j++) {
                msg += msg_list[j];
            }

            String result_str = "";
            int result_index = -1;

            for(String[] s: sol) {
                if(msg.equals(s[0])) {
                    result_str += s[1];
                    break;
                }
                else {
                    String[] temp1 = msg.split("");
                    String[] temp2 = s[0].split("");

                    int count = 0;

                    for(int k = 0; k < 6; k++) {
                        if(!temp1[k].equals(temp2[k])) {
                            count += 1;
                            if(count > 1) break;
                        }
                    }

                    if(count == 1) {
                        result_str += s[1];
                        break;
                    }
                    else {
                        if(result_index == -1) result_index = i + 1;
                    }
                }
            }

            if(result_str.equals("")) {
                result = Integer.toString(result_index);
                break;
            } else {
                result += result_str;
            }
        }

        System.out.println(result);
    }
}
