const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [TW, ...input] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [T, W] = TW.split(' ').map(Number);
const trees = [0, ...input.map(Number)];

const dp = Array.from({ length: 3 }, () =>
  Array.from({ length: T + 1 }, () => Array(W + 2).fill(0))
);

for (let i = 1; i <= T; i++) {
  for (let j = 1; j <= W + 1; j++) {
    if (trees[i] === 1) {
      dp[1][i][j] = Math.max(dp[1][i - 1][j] + 1, dp[2][i - 1][j - 1] + 1);
      dp[2][i][j] = Math.max(dp[1][i - 1][j - 1], dp[2][i - 1][j]);
    } else {
      if (i === 1 && j === 1) continue;

      dp[1][i][j] = Math.max(dp[2][i - 1][j - 1], dp[1][i - 1][j]);
      dp[2][i][j] = Math.max(dp[1][i - 1][j - 1] + 1, dp[2][i - 1][j] + 1);
    }
  }
}

let result = 0;

for (let i = 1; i <= W + 1; i++) {
  result = Math.max(result, Math.max(dp[1][T][i], dp[2][T][i]));
}

console.log(result);
