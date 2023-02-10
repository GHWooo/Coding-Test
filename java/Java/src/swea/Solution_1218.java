// solved

package swea;

import java.io.*;
import java.util.*;

public class Solution_1218 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        StringBuffer sb = new StringBuffer();

        for(int i = 1; i <= 10; i++) {
            st = new StringTokenizer(br.readLine());
            int n = Integer.parseInt(st.nextToken());

            st = new StringTokenizer(br.readLine());
            String[] input = st.nextToken().split("");

            Stack<String> stack = new Stack<>();

            for(int j = 0; j < n; j++) {
                if(stack.empty()) {
                    stack.push(input[j]);
                } else {
                    String compare = input[j];

                    if(compare.equals(")")) {
                        if(stack.peek().equals("(")) {
                            stack.pop();
                        } else break;
                    } else if(compare.equals("]")) {
                        if(stack.peek().equals("[")) {
                            stack.pop();
                        } else break;
                    } else if(compare.equals("}")) {
                        if(stack.peek().equals("{")) {
                            stack.pop();
                        } else break;
                    } else if(compare.equals(">")) {
                        if(stack.peek().equals("<")) {
                            stack.pop();
                        } else break;
                    } else {
                        stack.push(compare);
                    }
                }
            }

            String result = stack.empty() ? "1" : "0";

            sb.append("#" + i + " " + result + "\n");
        }

        System.out.print(sb.toString());
    }
}

