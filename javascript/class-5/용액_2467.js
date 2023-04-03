// solved

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
let [n, input] = fs.readFileSync(filePath).toString().trim().split("\n");
n = Number(n);
input = input.split(" ").map(Number);

let left = 0;
let right = input.length - 1;
let min = Infinity;
const result = [];

while (left < right) {
  dif = input[left] + input[right];

  if (min > Math.abs(dif)) {
    min = Math.abs(dif);
    result[0] = input[left];
    result[1] = input[right];

    if (min === 0) break;
  }

  if (dif > 0) right--;
  else left++;
}

console.log(result.join(" "));
