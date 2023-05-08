class Node {
  constructor(x, y, k) {
    this.x = x;
    this.y = y;
    this.k = k;
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

  add(x, y, k) {
    const node = new Node(x, y, k);

    if (!this.isEmpty()) node.next = this.front;

    this.front = node;

    this.up();
  }

  up() {
    const current = this.front;
    let pre = null;

    while (current.next !== null) {
      if (current.x < current.next.x) break;
      if (current.x === current.next.x && current.y < current.next.y) break;

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
let [NMK, ...input] = require('fs').readFileSync(filePath).toString().trim().split('\n');

let [N, M, K] = NMK.split(' ').map(Number);
const board = Array(N);

let cursor = 0;

for (let i = 0; i < N; i++) {
  board[i] = input[cursor++].split(' ').map((b) => {
    b = Number(b);

    if (b === 1) return -1;
    return b;
  });
}

let [tx, ty] = input[cursor++].split(' ').map(Number);
tx--;
ty--;

let passenger = 1;
const endPosi = {};

for (let i = 0; i < M; i++) {
  const [sx, sy, ex, ey] = input[cursor++].split(' ').map(Number);

  board[sx - 1][sy - 1] = passenger;
  endPosi[passenger] = [ex - 1, ey - 1];
  passenger += 2;
}

const dx = [-1, 0, 0, 1];
const dy = [0, -1, 1, 0];

const goToGoal = (x, y, ex, ey, k) => {
  const goalQueue = [[x, y, k, 1]];
  let goalQueueIndex = 0;

  const goalVisited = Array.from({ length: N }, () => Array(N).fill(false));
  goalVisited[x][y] = true;

  while (goalQueueIndex < goalQueue.length) {
    const [cx, cy, ck, cnt] = goalQueue[goalQueueIndex++];

    for (let i = 0; i < 4; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];

      if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;

      if (!goalVisited[nx][ny] && board[nx][ny] !== -1) {
        if (nx === ex && ny === ey) {
          return [nx, ny, cnt * 2 + ck - 1];
        }
        if (ck === 1) continue;

        goalVisited[nx][ny] = true;
        goalQueue.push([nx, ny, ck - 1, cnt + 1]);
      }
    }
  }

  return false;
};

let currentQueue = new PriorityQueue();
currentQueue.add(tx, ty, K);
let nextQueue = new PriorityQueue();

let visited = Array.from({ length: N }, () => Array(N).fill(false));
visited[tx][ty] = true;

let result = -1;

while ((!currentQueue.isEmpty() || !nextQueue.isEmpty()) && M > 0) {
  if (currentQueue.isEmpty()) {
    currentQueue = nextQueue;
    nextQueue = new PriorityQueue();
  }

  const { x, y, k } = currentQueue.poll();

  if (k === 0) continue;

  if (board[x][y] % 2 !== 0) {
    const answer = goToGoal(x, y, ...endPosi[board[x][y]], k);
    if (!answer) break;

    let [initX, initY, initK] = answer;
    M--;

    if (M === 0) {
      result = initK;
      break;
    }

    currentQueue = new PriorityQueue();
    currentQueue.add(initX, initY, initK);
    nextQueue = new PriorityQueue();

    visited = Array.from({ length: N }, () => Array(N).fill(false));
    visited[initX][initY] = true;

    board[x][y] = 0;

    continue;
  }

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;

    if (!visited[nx][ny] && board[nx][ny] !== -1) {
      visited[nx][ny] = true;
      nextQueue.add(nx, ny, k - 1);
    }
  }
}

console.log(result);
