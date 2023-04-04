const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

class Node {
  constructor(end, weight) {
    this.end = end;
    this.weight = weight;
  }
}

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(node) {
    if (this.isEmpty()) {
      this.queue.push(node);
    } else {
      let added = false;
      for (let i = 0; i < this.queue.length; i++) {
        if (node.weight < this.queue[i].weight) {
          this.queue.splice(i, 0, node);
          added = true;
          break;
        }
      }
      if (!added) {
        this.queue.push(node);
      }
    }
  }

  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

function dijkstra(start, list, dist) {
  const queue = new PriorityQueue();
  const visited = new Array(dist.length).fill(false);

  queue.enqueue(new Node(start, 0));
  dist[start] = 0;

  while (!queue.isEmpty()) {
    const current_node = queue.dequeue();
    const tail = current_node.end;

    if (visited[tail]) continue;

    visited[tail] = true;

    for (let node of list[tail]) {
      if (dist[node.end] > dist[tail] + node.weight) {
        dist[node.end] = dist[tail] + node.weight;
        queue.enqueue(new Node(node.end, dist[node.end]));
      }
    }
  }
}

function solution(input) {
  const [V, E] = input[0].split(" ").map((x) => parseInt(x));
  const start = parseInt(input[1]);
  const list = Array.from(Array(V + 1), () => new Array());
  const dist = new Array(V + 1).fill(Number.MAX_SAFE_INTEGER);

  for (let i = 2; i < E + 2; i++) {
    const [head, tail, weight] = input[i].split(" ").map((x) => parseInt(x));
    list[head].push(new Node(tail, weight));
  }

  dijkstra(start, list, dist);

  let answer = "";
  for (let i = 1; i <= V; i++) {
    if (dist[i] === Number.MAX_SAFE_INTEGER) answer += "INF\n";
    else answer += `${dist[i]}\n`;
  }

  console.log(answer);
}

solution(input);
