// solved

class Node {
  constructor(x, y, cnt) {
    this.x = x;
    this.y = y;
    this.cnt = cnt;
    this.next = null;
  }
}

class PriorityQueue {
  constructor() {
    this.front = null;
  }

  isEmpty() {
    if (this.front === null) return true;
    return false;
  }

  add(x, y, cnt) {
    const node = new Node(x, y, cnt);

    if (!this.isEmpty()) node.next = this.front;

    this.front = node;

    this.up();
  }

  up() {
    const current = this.front;
    let pre = null;

    while (current.next !== null) {
      if (current.next.cnt >= current.cnt) break;

      const temp = current.next;
      current.next = temp.next;
      temp.next = current;

      if (pre !== null) pre.next = temp;
      pre = temp;

      if (this.front === current) this.front = temp;
    }
  }

  poll() {
    const answer = this.front;
    this.front = this.front.next;

    return answer;
  }
}

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let inputCursor = 0;
let testcase = 0;
const result = [];

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

while (1) {
  const N = Number(input[inputCursor++]);

  if (N === 0) break;
  testcase++;

  const board = [];
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  let min = Infinity;

  for (let i = 0; i < N; i++) {
    board.push(input[inputCursor++].split(' ').map(Number));
  }

  const priorityQueue = new PriorityQueue();
  priorityQueue.add(0, 0, board[0][0]);

  while (!priorityQueue.isEmpty()) {
    const { x, y, cnt } = priorityQueue.poll();

    if (x === N - 1 && y === N - 1) {
      min = Math.min(min, cnt);
      continue;
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
      if (visited[nx][ny]) continue;

      visited[nx][ny] = true;
      priorityQueue.add(nx, ny, cnt + board[nx][ny]);
    }
  }

  result.push(`Problem ${testcase}: ${min}`);
}

console.log(result.join('\n'));
