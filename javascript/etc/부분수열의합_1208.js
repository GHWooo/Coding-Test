// solved

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
const [nm, input] = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, s] = nm.split(" ").map(Number);
const left = input.split(" ").map(Number);

const mid = parseInt(n / 2);
const right = left.splice(mid);

const sumMap = new Map();

const searchRight = (index, end, total) => {
  if (index > end) {
    if (sumMap.has(total)) sumMap.set(total, sumMap.get(total) + 1);
    else sumMap.set(total, 1);
    return;
  }

  total += right[index];
  searchRight(index + 1, end, total);
  total -= right[index];
  searchRight(index + 1, end, total);
};

searchRight(0, right.length - 1, 0);

let count = 0;

const searchLeft = (index, end, total) => {
  if (index > end) {
    const check = s - total;
    if (sumMap.has(check)) count += sumMap.get(check);
    return;
  }

  total += left[index];
  searchLeft(index + 1, end, total);
  total -= left[index];
  searchLeft(index + 1, end, total);
};

searchLeft(0, left.length - 1, 0);

if (s === 0) count--;

console.log(count);
