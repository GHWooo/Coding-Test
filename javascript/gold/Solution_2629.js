// solved

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
[n, weights, m, beads] = fs.readFileSync(filePath).toString().trim().split("\n");

n = Number(n);
weights = weights.split(" ").map(Number);
m = Number(m);

let max = 0;

beads = beads.split(" ").map((num) => {
  const integerNum = Number(num);

  if (max < integerNum) max = integerNum;

  return integerNum;
});

const start = -15000;
const end = 15000;

const standard = [];
for (let i = start; i <= end; i++) standard.push(i);

const dp = Array.from({ length: n }, () => Array(end - start + 1).fill(false));

for (let i = 0; i < standard.length; i++) {
  if (weights[0] === Math.abs(standard[i])) dp[0][i] = true;
}

for (let i = 1; i < n; i++) {
  const current = weights[i];

  for (let j = 0; j < standard.length; j++) {
    if (dp[i - 1][j] || current === Math.abs(standard[j])) {
      dp[i][j] = true;
      continue;
    }

    let temp = standard[j] - current;
    if (temp >= start && temp <= end) {
      if (dp[i - 1][temp - start]) {
        dp[i][j] = true;
        continue;
      }
    }

    temp = standard[j] + current;
    if (temp >= start && temp <= end) {
      if (dp[i - 1][temp - start]) {
        dp[i][j] = true;
        continue;
      }
    }
  }
}

const result = [];

beads.forEach((bead) => {
  if (dp[n - 1][bead - start]) result.push("Y");
  else result.push("N");
});

console.log(result.join(" "));
