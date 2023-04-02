// solved

const fs = require("fs");
const n = Number(fs.readFileSync("/dev/stdin").toString().trim());

const dp = Array(n + 1).fill(Infinity);
dp[n] = 0;

const solution = (current, count) => {
  if (current === 1) {
    dp[1] = Math.min(dp[1], count);
    return;
  }

  if (current % 3 === 0) {
    const next = current / 3;
    const ncount = count + 1;

    if (dp[next] > ncount) {
      dp[next] = ncount;
      solution(next, ncount);
    }
  }
  if (current % 2 === 0) {
    const next = current / 2;
    const ncount = count + 1;

    if (dp[next] > ncount) {
      dp[next] = ncount;
      solution(next, ncount);
    }
  }

  const next = current - 1;
  const ncount = count + 1;

  if (dp[next] > ncount) {
    dp[next] = ncount;
    solution(next, ncount);
  }
};

solution(n, 0);

const result = [1];
let compare = dp[1] - 1;

for (let i = 2; i <= n; i++) {
  const last = result[result.length - 1];
  if (compare === dp[i] && (last * 3 === i || last * 2 === i || last + 1 === i)) {
    result.push(i);
    compare--;
  }
}

console.log([dp[1], result.sort((a, b) => b - a).join(" ")].join("\n"));
