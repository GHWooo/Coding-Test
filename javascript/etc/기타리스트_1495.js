// solved

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
[nsm, volume] = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, s, m] = nsm.split(" ").map(Number);
volume = volume.split(" ").map(Number);

const dp = Array.from({ length: 51 }, () => Array(1001).fill(false));
dp[0][s] = true;

let max = -1;

for (let i = 1; i <= n; i++) {
  for (let j = 0; j <= m; j++) {
    if (!dp[i - 1][j]) continue;

    if (j - volume[i - 1] >= 0) dp[i][j - volume[i - 1]] = true;
    if (j + volume[i - 1] <= m) dp[i][j + volume[i - 1]] = true;
  }
}

for (let i = m; i >= 0; i--) {
  if (dp[n][i]) {
    max = i;
    break;
  }
}

console.log(max);
