// solved

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [NK, ...coins] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, K] = NK.split(" ").map(Number);
coins = coins.map(Number);

const dp = Array.from({ length: N }, () => Array(K + 1).fill(Infinity));

for (let i = 1; i <= K; i++) {
  if (i % coins[0] === 0) dp[0][i] = i / coins[0];
}

for (let i = 1; i < N; i++) {
  const coin = coins[i];

  for (let j = 1; j <= K; j++) {
    dp[i][j] = dp[i - 1][j];

    if (j < coin) continue;

    const div = j - coin;

    if (div === 0) {
      dp[i][j] = Math.min(dp[i][j], 1);
    } else if (dp[i][div] !== Infinity) {
      dp[i][j] = Math.min(dp[i][j], 1 + dp[i][div]);
    }
  }
}

console.log(dp[N - 1][K] === Infinity ? -1 : dp[N - 1][K]);
