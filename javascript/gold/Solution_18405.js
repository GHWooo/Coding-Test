// solved

class Node {
  constructor(x, y, item) {
    this.x = x;
    this.y = y;
    this.item = item;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }

  isEmpty() {
    if (!this.size) return true;
    return false;
  }

  add(x, y, item) {
    const node = new Node(x, y, item);

    if (!this.isEmpty()) this.back.next = node;
    else this.front = node;

    this.back = node;

    this.size++;
  }

  poll() {
    const answer = this.front;
    this.front = this.front.next;

    this.size--;

    return answer;
  }
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [nk, ...input] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [n, k] = nk.split(" ").map(Number);
const board = Array(n + 1);

const viruses = Array.from({ length: k + 1 }, () => []);

for (let i = 0; i < n; i++) {
  const line = input[i].split(" ").map((v, j) => {
    const virus = Number(v);

    if (virus) {
      viruses[virus].push([i + 1, j + 1]);
    }

    return virus;
  });

  board[i + 1] = [undefined, ...line];
}

const queue = new Queue();

for (let i = 1; i <= k; i++) {
  if (viruses[i].length) {
    viruses[i].forEach(([x, y]) => {
      queue.add(x, y, i);
    });
  }
}

let [s, ex, ey] = input[n].split(" ").map(Number);

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let size = queue.size;

while (!queue.isEmpty() && s) {
  size--;

  const current = queue.poll();

  const x = current.x;
  const y = current.y;
  const virus = current.item;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 1 || nx > n || ny < 1 || ny > k) continue;
    if (board[nx][ny]) continue;

    board[nx][ny] = virus;
    queue.add(nx, ny, virus);
  }

  if (size === 0) {
    s--;

    if (!s) break;
    else {
      size = queue.size;
    }
  }
}

console.log(board[ex][ey]);
