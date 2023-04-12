// solved

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, ...input] = require("fs").readFileSync(filePath).toString().trim().split("\n").map(Number);

const plusValue = [];
const minusValue = [];

input.forEach((num) => {
  if (num > 0) plusValue.push(num);
  else minusValue.push(num);
});

plusValue.sort((a, b) => b - a);
minusValue.sort((a, b) => a - b);

const plusLen = plusValue.length;
const minusLen = minusValue.length;

let pCursor = 0;
let mCursor = 0;

let result = 0;

while (pCursor < plusLen) {
  let temp = plusValue[pCursor++];

  if (pCursor < plusLen) {
    const next = plusValue[pCursor++];

    temp = Math.max(temp + next, temp * next);
  }

  result += temp;
}

while (mCursor < minusLen) {
  let temp = minusValue[mCursor++];

  if (mCursor < minusLen) {
    const next = minusValue[mCursor++];

    temp = Math.max(temp + next, temp * next);
  }

  result += temp;
}

console.log(result);
