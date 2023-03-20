// solved

class Node {
  constructor(item, weight) {
    this.item = item;
    this.weight = weight;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
  }

  isEmpty() {
    if (this.front === null) return true;
    return false;
  }

  add(item, weight) {
    const node = new Node(item, weight);

    if (!this.isEmpty()) {
      node.next = this.front;
    }

    this.front = node;

    this.up();
  }

  up() {
    let pre = null;
    let current = this.front;

    while (current.next !== null) {
      if (current.weight <= current.next.weight) break;

      if (pre !== null) pre.next = current.next;
      pre = current.next;
      current.next = pre.next;
      pre.next = current;

      if (this.front === current) this.front = pre;
    }
  }

  poll() {
    if (this.isEmpty()) return false;

    const answer = this.front;
    this.front = this.front.next;

    return answer;
  }
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
[ne, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, _] = ne.split(" ").map(Number);
const [v1, v2] = input.pop().split(" ").map(Number);

const linked = Array.from({ length: n + 1 }, () => []);

input.forEach((line) => {
  const [a, b, c] = line.split(" ").map(Number);

  linked[a].push([b, c]);
  linked[b].push([a, c]);
});

const Dijkstra = (start, end1, end2) => {
  const dlist = Array(n + 1).fill(Infinity);
  dlist[start] = 0;

  const queue = new Queue();
  queue.add(start, 0);

  while (!queue.isEmpty()) {
    const current = queue.poll();
    const number = current.item;
    const weight = current.weight;

    linked[number].forEach(([next, nweight]) => {
      if (dlist[next] > weight + nweight) {
        dlist[next] = weight + nweight;

        queue.add(next, dlist[next]);
      }
    });
  }

  return [dlist[end1], dlist[end2]];
};

const [oneToV1, oneToV2] = Dijkstra(1, v1, v2);
const [v1ToV2, v1ToN] = Dijkstra(v1, v2, n);
const [v2ToV1, v2ToN] = Dijkstra(v2, v1, n);

const answer1 = oneToV1 + v1ToV2 + v2ToN;
const answer2 = oneToV2 + v1ToN + v2ToV1;

const min = Math.min(answer1, answer2);

console.log(min === Infinity ? -1 : min);
