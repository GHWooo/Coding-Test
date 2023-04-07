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
[n, m, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

n = Number(n);
const [s, e] = input.pop().split(" ").map(Number);

const linked = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));

input.forEach((line) => {
  const [a, b, c] = line.split(" ").map(Number);

  linked[a][b] = Math.min(linked[a][b], c);
});

const dlist = Array(n + 1).fill(Infinity);
dlist[s] = 0;

const queue = new Queue();
queue.add(s, 0);

while (!queue.isEmpty()) {
  const current = queue.poll();
  const number = current.item;
  const weight = current.weight;

  for (let i = 1; i <= n; i++) {
    const nweight = linked[number][i];

    if (nweight === Infinity) continue;

    if (dlist[i] > weight + nweight) {
      dlist[i] = weight + nweight;

      queue.add(i, dlist[i]);
    }
  }
}

console.log(dlist[e]);
