// solved

package baekjoon;

import java.io.*;
import java.util.*;

class Node implements Comparable<Node> {
    int end, weight;

    public Node(int end, int weight){
        this.end = end;
        this.weight = weight;
    }

    @Override
    public int compareTo(Node o) {
        return weight - o.weight;
    }
}

public class Solution_1753 {
    static int v, e, start;
    static ArrayList<Node>[] list;
    static int[] dist;


    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        v = Integer.parseInt(st.nextToken());
        e = Integer.parseInt(st.nextToken());
        start = Integer.parseInt(br.readLine());

        list = new ArrayList[v + 1];
        dist = new int[v + 1];

        Arrays.fill(dist, Integer.MAX_VALUE);

        for(int i = 1; i <= v; i++) list[i] = new ArrayList<>();

        for(int i = 0 ; i < e; i++){
            st = new StringTokenizer(br.readLine());
            int head = Integer.parseInt(st.nextToken());
            int tail = Integer.parseInt(st.nextToken());
            int weight = Integer.parseInt(st.nextToken());

            list[head].add(new Node(tail, weight));
        }

        dijkstra(start);

        StringBuilder sb = new StringBuilder();

        for(int i = 1; i <= v; i++) {
            int answer = dist[i];

            if(answer == Integer.MAX_VALUE) sb.append("INF\n");
            else sb.append(answer + "\n");
        }

        System.out.print(sb.toString());
    }

    private static void dijkstra(int start){
        PriorityQueue<Node> queue = new PriorityQueue<>();
        boolean[] visited = new boolean[v + 1];

        queue.add(new Node(start, 0));
        dist[start] = 0;

        while(!queue.isEmpty()){
            Node current_node = queue.poll();
            int tail = current_node.end;

            if(visited[tail] == true) continue;

            visited[tail] = true;

            for(Node node : list[tail]){
                if(dist[node.end] > dist[tail] + node.weight){
                    dist[node.end] = dist[tail] + node.weight;
                    queue.add(new Node(node.end, dist[node.end]));
                }
            }
        }
    }
}