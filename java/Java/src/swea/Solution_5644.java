// solved

package swea;

import java.io.*;
import java.util.*;

public class Solution_5644 {
    static int m;
    static int a;
    static int[] posi_a = {0, 0};
    static int[] posi_b = {9, 9};
    static int[] move_a;
    static int[] move_b;
    static int[][] ap;
    static int sum;

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        StringBuilder sb = new StringBuilder();

        int t = Integer.parseInt(st.nextToken());

        for(int test_case = 1; test_case <= t; test_case++) {
            st = new StringTokenizer(br.readLine());
            m = Integer.parseInt(st.nextToken());
            a = Integer.parseInt(st.nextToken());

            move_a = new int[m];
            move_b = new int[m];

            st = new StringTokenizer(br.readLine());
            for(int i = 0; i < m; i++) move_a[i] = Integer.parseInt(st.nextToken());
            st = new StringTokenizer(br.readLine());
            for(int i = 0; i < m; i++) move_b[i] = Integer.parseInt(st.nextToken());

            ap = new int[a][4];
            for(int i = 0; i < a; i++) {
                st = new StringTokenizer(br.readLine());
                ap[i][0] = Integer.parseInt(st.nextToken());
                ap[i][1] = Integer.parseInt(st.nextToken());
                ap[i][2] = Integer.parseInt(st.nextToken());
                ap[i][3] = Integer.parseInt(st.nextToken());
            }

            charging();
            for(int i = 0; i < m; i++) {
                move(i);
                charging();
            }

            sb.append("#" + test_case + " " + sum + "\n");
            sum = 0;
            posi_a[0] = 0;
            posi_a[1] = 0;
            posi_b[0] = 9;
            posi_b[1] = 9;
        }

        System.out.print(sb.toString());
    }

    static void charging() {
        ArrayList<Integer> person_a = new ArrayList<Integer>();
        ArrayList<Integer> person_b = new ArrayList<Integer>();

        for(int i = 0; i < a; i++) {
            int ap_x = ap[i][1] - 1;
            int ap_y = ap[i][0] - 1;
            int c = ap[i][2];

            int a_len = Math.abs(posi_a[0] - ap_x) + Math.abs(posi_a[1] - ap_y);
            if(a_len <= c) person_a.add(i);

            int b_len = Math.abs(posi_b[0] - ap_x) + Math.abs(posi_b[1] - ap_y);
            if(b_len <= c) person_b.add(i);
        }

        int max = 0;

        if(person_a.size() > 0 && person_b.size() == 0) {
            for(int i = 0; i < person_a.size(); i++) {
                max = Math.max(max, ap[person_a.get(i)][3]);
            }
        }
        else if(person_a.size() == 0 && person_b.size() > 0) {
            for(int i = 0; i < person_b.size(); i++) {
                max = Math.max(max, ap[person_b.get(i)][3]);
            }
        }
        else if(person_a.size() > 0 && person_b.size() > 0) {
            for(int i = 0; i < person_a.size(); i++) {
                for(int j = 0; j < person_b.size(); j++) {
                    int a_ap_index = person_a.get(i);
                    int b_ap_index = person_b.get(j);

                    int temp;
                    if(a_ap_index == b_ap_index) {
                        temp = ap[a_ap_index][3];
                    } else {
                        temp = ap[a_ap_index][3] + ap[b_ap_index][3];
                    }

                    max = Math.max(max, temp);
                }
            }
        }
        sum += max;
    }

    static void move(int index) {
        int move_a_num = move_a[index];
        int move_b_num = move_b[index];

        move_person(move_a_num, "a");
        move_person(move_b_num, "b");
    }

    static void move_person(int direc, String person) {
        if(direc == 0) return;

        int tx = 0;
        int ty = 0;

        if(direc == 1) tx--;
        else if(direc == 2) ty++;
        else if(direc == 3) tx++;
        else ty--;

        if(person.equals("a")) {
            posi_a[0] += tx;
            posi_a[1] += ty;
        } else {
            posi_b[0] += tx;
            posi_b[1] += ty;
        }
    }
}
