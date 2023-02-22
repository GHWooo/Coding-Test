// solved

package swea;

import java.util.Scanner;

public class Solution_1247
{
	private static int[][] deepCopyTwoArray(int[][] original) {
	    if (original == null) return null;
	    int[][] result = new int[original.length][2];
	    
	    for (int i = 0; i < result.length; i++) {
	        for (int j = 0; j < 2; j++) {
	            result[i][j] = original[i][j];
	        }
	    }
	    
	    return result;
	}
	
	public static int search(int[] base, int x, int y, int[][] visited, int index) {
		visited[index][0] = -1;
		int[][] temp_visited = deepCopyTwoArray(visited);
		
		int sx = base[0];
		int sy = base[1];
		
		int len = Math.abs(sx - x) + Math.abs(sy - y);
		
		int temp_len = 9999;
		
		for(int i = 0; i < visited.length; i++) {
			if(visited[i][0] != -1) {
				base[0] = x;
				base[1] = y;
				int temp = search(base, visited[i][0], visited[i][1], temp_visited, i);
				if(temp_len > temp) temp_len = temp;
			}
			
			if(temp_len != 9999) len += temp_len;
			
			if(i == visited.length - 1 && temp_len == 9999) {
				len += (Math.abs(x - base[2]) + Math.abs(y - base[3]));
			}
		}
		
		System.out.println(len);
		return len;
	}
	
	public static void main(String args[]) throws Exception
	{
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();

		for(int test_case = 1; test_case <= T; test_case++)
		{
			int[] base = new int[4];
			int result = 9999;
			int n = sc.nextInt();
			
			for(int i = 0; i < 4; i++) {
				base[i] = sc.nextInt();
			}
			
			int[][] n_list = new int[n][2];
			
			for(int i = 0; i < n; i++) {
				int tx = sc.nextInt();
				int ty = sc.nextInt();
				
				n_list[i][0] = tx;
				n_list[i][1] = ty;
			}
			
			for(int i = 0; i < n; i++) {
				int[][] visited = deepCopyTwoArray(n_list);
				System.out.println(visited[i][0] + " " + visited[i][1]);
				
				int temp_result = search(base, n_list[i][0], n_list[i][1], visited, i);
				
				if(result > temp_result) result = temp_result;
			}
			
			System.out.println("#" + test_case + " " + result);
		}
	}
}
