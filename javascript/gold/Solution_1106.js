const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [CN, ...input] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [C, N] = CN.split(' ').map(Number);
const cases = input.map((line) => line.split(' ').map(Number)).sort((a, b) => a[0] - b[0]);

const dp = Array(C + 1).fill(100_001);
dp[0] = 0;

cases.forEach(([price, cnt]) => {
  if (dp[cnt] > price) dp[cnt] = price;

  for (let i = 1; i <= C; i++) {
    dp[i] = Math.min(dp[i], i < cnt ? price : dp[cnt] + dp[i - cnt]);
  }
});

console.log(dp[C]);
