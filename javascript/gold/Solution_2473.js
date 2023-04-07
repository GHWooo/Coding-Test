// solved

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
let [n, input] = fs.readFileSync(filePath).toString().trim().split("\n");
n = Number(n);
input = input
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let min = Infinity;
const result = [];

for (let i = 0; i < n; i++) {
  const standard = input[i];
  let left = i === 0 ? 1 : 0;
  let right = i === input.length - 1 ? input.length - 2 : input.length - 1;

  while (left < right) {
    dif = input[left] + input[right] + standard;

    if (min > Math.abs(dif)) {
      min = Math.abs(dif);
      result[0] = input[left];
      result[1] = input[right];
      result[2] = standard;

      if (min === 0) break;
    }

    if (dif > 0) {
      right--;
      if (right === i) right--;
    } else {
      left++;
      if (left === i) left++;
    }
  }

  if (min === 0) break;
}

console.log(result.sort((a, b) => a - b).join(" "));
