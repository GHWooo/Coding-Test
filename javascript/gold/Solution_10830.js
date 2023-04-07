// solved

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
[nb, ...procession] = fs.readFileSync(filePath).toString().trim().split("\n");

[n, b] = nb.split(" ");
n = Number(n);
b = BigInt(b);

procession = procession.map((line) => line.split(" ").map(Number));

const multiply = (A, B) => {
  const newProcession = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        newProcession[i][j] += (A[i][k] * B[k][j]) % 1000;
      }
    }
  }
  return newProcession;
};

const division = (current) => {
  if (current === 1n) return procession;

  const value = division(current / 2n);

  if (current % 2n === 0n) {
    return multiply(value, value);
  } else {
    const temp = multiply(value, value);
    return multiply(temp, procession);
  }
};

const answer = division(b).map((line) => line.map((element) => element % 1000));

console.log(answer.map((line) => line.join(" ")).join("\n"));
