// solved

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [NLR, ...board] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [N, L, R] = NLR.split(' ').map(Number);
board = board.map((line) => line.split(' ').map(Number));

let result = 0;

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

while (true) {
  let endFlag = true;

  const visited = Array.from({ length: N + 1 }, () => Array(N + 1).fill(false));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (visited[i][j]) continue;
      visited[i][j] = true;

      let sum = board[i][j];

      const queue = [[i, j]];
      let queueIndex = 0;

      while (queueIndex < queue.length) {
        const [x, y] = queue[queueIndex++];

        for (let k = 0; k < 4; k++) {
          const nx = x + dx[k];
          const ny = y + dy[k];

          if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
          if (visited[nx][ny]) continue;

          const difference = Math.abs(board[x][y] - board[nx][ny]);

          if (difference < L || difference > R) continue;

          visited[nx][ny] = true;
          if (endFlag) endFlag = false;

          sum += board[nx][ny];

          queue.push([nx, ny]);
        }
      }

      const average = Math.floor(sum / queue.length);

      queue.forEach(([tx, ty]) => {
        board[tx][ty] = average;
      });
    }
  }

  if (endFlag) break;
  result++;
}

console.log(result);
