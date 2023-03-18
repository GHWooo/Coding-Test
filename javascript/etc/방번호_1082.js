// solved

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
[n, p, m] = fs.readFileSync(filePath).toString().trim().split("\n");

n = Number(n);
p = p.split(" ").map(Number);
m = Number(m);

const dp = Array.from({ length: m + 1 }, () => Array(n).fill(0));

for (let i = 1; i <= m; i++) {
  let max = BigInt(-1);
  let max_count;

  for (let j = n - 1; j >= 0; j--) {
    if (p[j] > i) continue;

    const pre = dp[i - p[j]].slice();
    pre[j]++;

    let temp = ``;
    for (let k = n - 1; k >= 0; k--) {
      let cnt = pre[k];

      while (cnt > 0) {
        temp += `${k}`;

        cnt--;
      }
    }
    const integerTemp = BigInt(temp);

    if (max < integerTemp) {
      max = integerTemp;
      max_count = pre;
    }
  }

  if (max > -1) {
    dp[i] = max_count;
  }

  if (i === m) {
    console.log(String(max));
  }
}
