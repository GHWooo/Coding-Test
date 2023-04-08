// solved

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  isEmpty() {
    if (this.front === null) return true;
    return false;
  }

  add(item) {
    const node = new Node(item);

    if (!this.isEmpty()) this.back.next = node;
    else this.front = node;

    this.back = node;
  }

  poll() {
    const answer = this.front.item;
    this.front = this.front.next;

    return answer;
  }
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, k] = require("fs").readFileSync(filePath).toString().trim().split(" ").map(Number);

const queue = new Queue();

for (let i = 1; i <= n; i++) queue.add(i);

let cnt = k;

let result = [];

while (!queue.isEmpty()) {
  cnt--;

  const current = queue.poll();

  if (cnt === 0) {
    result.push(current);
    cnt = k;

    continue;
  }

  queue.add(current);
}

console.log(`<${result.join(", ")}>`);
