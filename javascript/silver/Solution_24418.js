// solved

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [n, ...board] = require('fs').readFileSync(filePath).toString().trim().split('\n');

n = Number(n);
board = board.map((line) => line.split(' ').map(Number));

const result = [];
let count = 0;

const recursive = (x, y) => {
  console.log(count);
  if (x === -1 || y === -1) {
    count++;
    return 0;
  } else return board[x][y] + Math.max(recursive(x - 1, y), recursive(x, y - 1));
};

recursive(n - 1, n - 1);

result.push(count);
count = 0;

const dynamic = () => {
  const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      count++;
      dp[i][j] = board[i - 1][j - 1] + Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  return dp[n][n];
};

dynamic();
result.push(count);

console.log(result.join(' '));
