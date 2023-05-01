// solved

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, Ai] = require("fs").readFileSync(filePath).toString().trim().split("\n");

N = Number(N);

Ai = Ai.split(" ").map(Number);
Ai.sort((a, b) => a - b);

let result = 0;

for (let i = 0; i < N; i++) {
  const goal = Ai[i];

  let left = 0;
  let right = N - 1;

  while (left < right) {
    if (left === i) {
      left++;
      continue;
    }
    if (right === i) {
      right--;
      continue;
    }

    const sum = Ai[left] + Ai[right];

    if (sum === goal) {
      result++;
      break;
    }
    if (sum > goal) {
      right--;
      continue;
    }
    if (sum < goal) {
      left++;
      continue;
    }
  }
}

console.log(result);
