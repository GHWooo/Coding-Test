// solved

const fs = require("fs");
[n, a] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

n = Number(n);
a = a.split(" ").map(Number);

const lis = [a[0]];
const memorize = [0];

for (let i = 1; i < n; i++) {
  const current = a[i];

  let left = 0;
  let right = lis.length - 1;

  if (lis[right] < current) {
    lis.push(current);
    memorize[i] = lis.length - 1;
    continue;
  }

  let answer = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (lis[mid] < current) {
      left = mid + 1;
    } else {
      answer = mid;
      right = mid - 1;
    }
  }

  if (answer >= 0) {
    lis[answer] = current;
    memorize[i] = answer;
  }
}

const result = Array(lis.length);
let temp = lis.length - 1;

for (let i = memorize.length - 1; i >= 0; i--) {
  if (temp === memorize[i]) {
    result[temp] = a[i];
    temp--;
  }

  if (temp < 0) break;
}

console.log([lis.length, result.join(" ")].join("\n"));
