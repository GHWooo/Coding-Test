// solved

const fs = require("fs");
[n, cards] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

n = Number(n);
cards = cards.split(" ").map(Number);

const dp = Array.from({ length: n + 1 }, () => Array(n + 1));

for (let i = 1; i <= n; i++) {
  dp[1][i] = cards[0] * i;
}

for (let i = 2; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    const candidate1 = dp[i - 1][j];

    if (i > j) {
      dp[i][j] = candidate1;

      continue;
    }
    if (i === j) {
      dp[i][j] = Math.max(candidate1, cards[i - 1]);

      continue;
    }

    dp[i][j] = Math.max(candidate1, dp[i][j - i] + cards[i - 1]);
  }
}

console.log(dp[n][n]);
