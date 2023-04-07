// solved

class Node {
  constructor(dis, num) {
    this.dis = dis;
    this.num = num;
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

  add(dis, num) {
    const node = new Node(dis, num);

    if (!this.isEmpty()) {
      node.next = this.front;
    }

    this.front = node;

    this.up();
  }

  up() {
    const moveNode = this.front;
    let preNode = null;

    while (moveNode.next !== null) {
      if (moveNode.dis <= moveNode.next.dis) break;

      const temp = moveNode.next;

      moveNode.next = temp.next;
      temp.next = moveNode;

      if (preNode !== null) {
        preNode.next = temp;
      }

      preNode = temp;

      if (this.front === moveNode) {
        this.front = preNode;
      }
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
let [nmr, items, ...roads] = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m, r] = nmr.split(" ").map(Number);
items = items.split(" ").map(Number);

const linked = Array.from({ length: n + 1 }, () => []);

roads.forEach((line) => {
  const [a, b, l] = line.split(" ").map(Number);

  linked[a].push([b, l]);
  linked[b].push([a, l]);
});

let max = 0;

for (let i = 1; i <= n; i++) {
  const queue = new Queue();
  queue.add(0, i);

  const dlist = Array(n + 1).fill(Infinity);
  dlist[i] = 0;

  while (!queue.isEmpty()) {
    const current = queue.poll();
    const dis = current.dis;
    const num = current.num;

    linked[num].forEach(([next, len]) => {
      if (dlist[next] > len + dis) {
        dlist[next] = len + dis;
        queue.add(dlist[next], next);
      }
    });
  }

  let sum = 0;

  for (let i = 1; i <= n; i++) {
    if (dlist[i] <= m) sum += items[i - 1];
  }

  max = Math.max(max, sum);
}

console.log(max);
