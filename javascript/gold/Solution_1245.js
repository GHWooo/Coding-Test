// solved

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [NM, ...board] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [N, M] = NM.split(' ').map(Number);
board = board.map((line) => line.split(' ').map(Number));

const visited = Array.from({ length: N }, () => Array(M).fill(false));

const dx = [-1, 1, 0, 0, 1, -1, 1, -1];
const dy = [0, 0, -1, 1, 1, 1, -1, -1];

let result = 0;

const checkVisited = (i, j) => {
  const queue = [[i, j]];
  let cursor = 0;

  visited[i][j] = true;

  const goal = board[i][j];
  const side = [];

  while (cursor < queue.length) {
    const [x, y] = queue[cursor++];

    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
      if (visited[nx][ny]) continue;

      const nextHeight = board[nx][ny];

      if (nextHeight === goal) {
        visited[nx][ny] = true;
        queue.push([nx, ny]);
      }
      if (nextHeight < goal) side.push([nx, ny]);
    }
  }

  side.forEach(([tx, ty]) => checkVisited(tx, ty));
};

const checkTop = (i, j) => {
  const queue = [[i, j]];
  let cursor = 0;

  visited[i][j] = true;

  const goal = board[i][j];
  const side = [];

  let vailFlag = true;

  while (cursor < queue.length) {
    const [x, y] = queue[cursor++];

    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;

      const nextHeight = board[nx][ny];

      if (nextHeight > goal && vailFlag) vailFlag = false;

      if (visited[nx][ny]) continue;

      if (nextHeight === goal) {
        visited[nx][ny] = true;
        queue.push([nx, ny]);
      }
      if (nextHeight < goal) side.push([nx, ny]);
    }
  }

  if (vailFlag) result++;

  side.forEach(([tx, ty]) => checkVisited(tx, ty));
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (!visited[i][j] && board[i][j] > 0) {
      checkTop(i, j);
    }
  }
}

console.log(result);
