const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().split("\n");
const T = input[0];
const P = input[1];

const pLen = P.length;
const pi = Array(pLen).fill(0);

let j = 0;

for (let i = 1; i < pLen; i++) {
  while (j > 0 && P[i] !== P[j]) j = pi[j - 1];

  if (P[i] === P[j]) {
    pi[i] = j + 1;
    j++;
  } else {
    pi[i] = 0;
  }
}

j = 0;
const answer = [];

for (let i = 0; i < T.length; i++) {
  while (j > 0 && T[i] !== P[j]) j = pi[j - 1];

  if (T[i] === P[j]) {
    if (j === pLen - 1) {
      answer.push(i - pLen + 2);
      j = pi[j];
    } else {
      j++;
    }
  }
}

console.log([answer.length, answer.join(" ")].join("\n"));
