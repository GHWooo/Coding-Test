// solved

class Queue {
  constructor() {
    this.data = [];
    this.front = 0;
    this.bottom = 0;
  }

  add(item) {
    this.data[this.bottom++] = item;
  }

  poll() {
    return this.data[this.front++];
  }

  isEmpty() {
    return this.front === this.bottom;
  }
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [K, WH, ...board] = require("fs").readFileSync(filePath).toString().trim().split("\n");

K = Number(K);
const [W, H] = WH.split(" ").map(Number);
board = board.map((line) => line.split(" ").map(Number));

const mx = [-1, 0, 1, 0];
const my = [0, 1, 0, -1];
const hx = [-2, -1, 1, 2, 2, 1, -1, -2];
const hy = [1, 2, 2, 1, -1, -2, -2, -1];

const bfs = () => {
  const queue = new Queue();

  const visited = Array.from({ length: H }, () =>
    Array.from({ length: W }, () => Array(K).fill(false))
  );

  queue.add([0, 0, 0, 0]);
  visited[0][0][0] = true;

  while (!queue.isEmpty()) {
    const [x, y, horse, cnt] = queue.poll();

    if (x === H - 1 && y === W - 1) {
      console.log(cnt);
      return;
    }

    for (let k = 0; k < 4; k++) {
      const nx = x + mx[k];
      const ny = y + my[k];

      if (nx < 0 || nx >= H || ny < 0 || ny >= W) continue;
      if (visited[nx][ny][horse] || board[nx][ny] === 1) continue;

      visited[nx][ny][horse] = true;
      queue.add([nx, ny, horse, cnt + 1]);
    }

    if (horse >= K) continue;

    for (let k = 0; k < 8; k++) {
      const nx = x + hx[k];
      const ny = y + hy[k];

      if (nx < 0 || nx >= H || ny < 0 || ny >= W) continue;
      if (visited[nx][ny][horse + 1] || board[nx][ny] === 1) continue;

      visited[nx][ny][horse + 1] = true;
      queue.add([nx, ny, horse + 1, cnt + 1]);
    }
  }

  console.log(-1);
};

bfs();
