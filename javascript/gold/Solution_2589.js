// solved

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [HW, ...board] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [H, W] = HW.split(' ').map(Number);

board = board.map((line) => line.split(''));

let result = 0;

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const search = (x, y) => {
  const queue = [[x, y, 0]];
  let queueIndex = 0;

  const visited = Array.from({ length: H }, () => Array(W).fill(false));
  visited[x][y] = true;

  while (queueIndex < queue.length) {
    const [cx, cy, cnt] = queue[queueIndex++];
    result = Math.max(result, cnt);

    for (let i = 0; i < 4; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];

      if (nx < 0 || nx >= H || ny < 0 || ny >= W) continue;

      if (!visited[nx][ny] && board[nx][ny] === 'L') {
        visited[nx][ny] = true;
        queue.push([nx, ny, cnt + 1]);
      }
    }
  }
};

for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (board[i][j] === 'L') search(i, j);
  }
}

console.log(result);
