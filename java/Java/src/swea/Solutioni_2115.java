// solved

package swea;

import java.io.*;
import java.util.*;

public class Solutioni_2115 {
    static StringBuilder result = new StringBuilder();
    static int n;
    static int m;
    static int c;
    static int[][] board;
    static ArrayList<Integer> bag1;
    static ArrayList<Integer> bag2;
    static ArrayList<Integer> vailBag1;
    static ArrayList<Integer> vailBag2;
    static int max;

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int t = Integer.parseInt(st.nextToken());

        for(int test_case = 1; test_case <= t; test_case++) {
            result.append("#" + test_case + " ");

            st = new StringTokenizer(br.readLine());
            n = Integer.parseInt(st.nextToken());
            m = Integer.parseInt(st.nextToken());
            c = Integer.parseInt(st.nextToken());

            board = new int[n][n];
            max = 0;

            for(int i = 0; i < n; i++) {
                st = new StringTokenizer(br.readLine());
                for(int j = 0; j < n; j++) board[i][j] = Integer.parseInt(st.nextToken());
            }

            for(int i = 0; i < n; i++) {
                boolean vaild = true;

                for(int j = 0; j <= n - m; j++) {
                    bag1 = new ArrayList<>();

                    getHoney(i, j, bag1);

                    int nx = i;
                    int ny = j + m;

                    if(ny >= n) {
                        nx++;
                        ny = 0;

                        if(nx >= n) {
                            vaild = false;
                            break;
                        }
                    }

                    choiceNext(nx, ny);
                }
                if(!vaild) break;
            }

            result.append(max + "\n");
        }

        System.out.print(result.toString());
    }

    static void getHoney(int x, int y, ArrayList<Integer> bag) {
        for(int i = y; i < y + m; i++) {
            bag.add(board[x][i]);
        }
    }

    static void choiceNext(int cx, int cy) {
        int x = cx;
        int y = cy;

        for(int i = x; i < n; i++) {
            for(int j = y; j <= n - m; j++) {
                bag2 = new ArrayList<>();

                getHoney(i, j, bag2);

                checkBag();
            }
            y = 0;
        }
    }

    static void checkBag() {
        vailBag1 = new ArrayList<>();

        for(int i = 0; i < m; i++) {
            vailBag1.add(i);
            checkWeight1(i, vailBag1, bag1, bag1.get(i));
            vailBag1.remove(vailBag1.size() - 1);
        }
    }

    static void checkWeight1(int index, ArrayList<Integer> vailBag, ArrayList<Integer> bag, int sum) {
        boolean next = false;

        for(int i = index + 1; i < m; i++) {
            if(bag.get(i) + sum <= c) {
                next = true;

                vailBag.add(i);
                checkWeight1(i, vailBag, bag, bag.get(i) + sum);
                vailBag.remove(vailBag.size() - 1);
            }
        }

        if(!next) {
            vailBag2 = new ArrayList<>();

            for(int i = 0; i < m; i++) {
                vailBag2.add(i);
                checkWeight2(i, vailBag2, bag2, bag2.get(i));
                vailBag2.remove(vailBag2.size() - 1);
            }
        }
    }

    static void checkWeight2(int index, ArrayList<Integer> vailBag, ArrayList<Integer> bag, int sum) {
        boolean next = false;

        for(int i = index + 1; i < m; i++) {
            if(bag.get(i) + sum <= c) {
                next = true;

                vailBag.add(i);
                checkWeight2(i, vailBag, bag, bag.get(i) + sum);
                vailBag.remove(vailBag.size() - 1);
            }
        }

        if(!next) {
            int total = 0;

            for(int i: vailBag1) total += (int)Math.pow(bag1.get(i), 2);
            for(int i: vailBag2) total += (int)Math.pow(bag2.get(i), 2);

            max = Math.max(max, total);
        }
    }
}
