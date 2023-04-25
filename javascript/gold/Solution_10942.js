// solved

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, nNumbers, M, ...SE] = require("fs").readFileSync(filePath).toString().trim().split("\n");

N = Number(N);
nNumbers = [-1, ...nNumbers.split(" ").map(Number)];
M = Number(M);
SE = SE.map((line) => line.split(" ").map(Number));

const dp = Array.from({ length: 2001 }, () => Array.from(2001).fill(false));

for (let i = 1; i <= N; i++) {
  dp[i][i] = true;

  if (i > 1 && nNumbers[i] === nNumbers[i - 1]) {
    dp[i - 1][i] = true;
  }
}

for (let i = 2; i < N; i++) {
  for (let j = 1; i + j <= N; j++) {
    if (nNumbers[j] === nNumbers[i + j] && dp[j + 1][j + i - 1]) {
      dp[j][j + i] = true;
    }
  }
}

const result = [];

SE.forEach(([S, E]) => {
  result.push(dp[S][E] ? 1 : 0);
});

console.log(result.join("\n"));
