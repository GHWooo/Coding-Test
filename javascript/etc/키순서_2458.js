// solved

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
let [nm, ...compares] = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = nm.split(" ").map(Number);

const floyd = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));

compares.forEach((line) => {
  const [a, b] = line.split(" ").map(Number);
  floyd[a][b] = 1;
});

for (let i = 1; i <= n; i++) floyd[i][i] = 1;

for (let k = 1; k <= n; k++) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === j) continue;

      floyd[i][j] = Math.min(floyd[i][j], floyd[i][k] + floyd[k][j]);
    }
  }
}

const count = Array(n + 1).fill(0);

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (floyd[i][j] !== Infinity) {
      count[i]++;
      count[j]++;
    }
  }
}

let result = 0;

count.forEach((num) => {
  if (num === n + 1) result++;
});

console.log(result);
