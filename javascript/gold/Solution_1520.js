// solved

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [MN, ...board] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [M, N] = MN.split(' ').map(Number);
board = board.map((line) => line.split(' ').map(Number));

const dp = Array.from({ length: M }, () => Array(N).fill(-1));
dp[M - 1][N - 1] = 1;

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const dfs = (x, y) => {
  if (dp[x][y] > -1) return dp[x][y];

  let count = 0;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || nx >= M || ny < 0 || ny >= N) continue;
    if (board[nx][ny] >= board[x][y]) continue;

    count += dfs(nx, ny);
  }

  dp[x][y] = count;
  return count;
};

console.log(dfs(0, 0));
