// solved

const fs = require("fs");
[n, a] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

n = Number(n);
a = a.split(" ").map(Number);

const dp = [];

for (let i = 0; i < n; i++) {
  let max = 0;
  let max_index = -1;

  for (let j = 0; j < i; j++) {
    if (a[i] > a[j] && dp[j] > max) {
      max = dp[j];
      max_index = j;
    }
  }

  if (max_index >= 0) {
    dp[i] = dp[max_index] + a[i];
  } else {
    dp[i] = a[i];
  }
}
console.log(Math.max(...dp));
