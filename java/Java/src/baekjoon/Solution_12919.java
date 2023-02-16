// solved

package baekjoon;

import java.io.*;
import java.util.*;
public class Solution_12919 {
    static String t;
    static int result;

    static boolean checkStr(String A, String B) {
        if(A.contains(B)) return true;
        else return false;
    }

    static void solution(StringBuilder s, boolean reverse) {
        StringBuilder t_sb = new StringBuilder(s.toString());
        if((!checkStr(t, t_sb.toString()) && !checkStr(t, t_sb.reverse().toString()) || result == 1)) {
            return;
        }

        if(s.length() == t.length()) {
            if(reverse) s.reverse();
            if(s.toString().equals(t)){
                result = 1;
            }
            return;
        }

        t_sb = new StringBuilder(s.toString());
        if(reverse) t_sb.insert(0, "A");
        else t_sb.append("A");
        solution(t_sb, reverse);

        t_sb = new StringBuilder(s.toString());
        if(reverse) {
            t_sb.insert(0, "B");
            solution(t_sb, false);
        } else {
            t_sb.append("B");
            solution(t_sb, true);
        }
    }

    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        StringBuilder s = new StringBuilder(st.nextToken());
        st = new StringTokenizer(br.readLine());
        t = st.nextToken();

        boolean reverse = false;

        solution(s, reverse);

        System.out.print(result);
    }
}
