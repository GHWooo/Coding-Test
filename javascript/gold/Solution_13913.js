// solved

class Node {
  constructor(pre, current, count) {
    this.pre = pre;
    this.current = current;
    this.count = count;
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

  add(pre, current, count) {
    const node = new Node(pre, current, count);

    if (!this.isEmpty()) this.back.next = node;
    else this.front = node;

    this.back = node;
  }

  poll() {
    const answer = this.front;
    this.front = this.front.next;

    return answer;
  }
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, K] = require("fs").readFileSync(filePath).toString().trim().split(" ").map(Number);

const posi = Array.from({ length: 200_001 }, () => []);
posi[N] = [-1, 0];

const queue = new Queue();
queue.add(-1, N, 0);

while (!queue.isEmpty()) {
  const { pre, current, count } = queue.poll();

  if (current === K) {
    posi[K] = [pre, count];
    break;
  }

  const nexts = [current * 2, current + 1, current - 1];

  nexts.forEach((next) => {
    if (next <= 200_000 && next >= 0) {
      if (posi[next].length === 0 || (posi[next].length > 0 && posi[next][1] > count)) {
        posi[next] = [current, count];

        queue.add(current, next, count + 1);
      }
    }
  });
}

const time = posi[K][1];
let prePosi = posi[K][0];

let move = [K];

while (prePosi !== -1) {
  move.push(prePosi);

  prePosi = posi[prePosi][0];
}

console.log([time, move.reverse().join(" ")].join("\n"));
