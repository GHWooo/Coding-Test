// solved

const fs = require("fs");
[n, a] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

n = Number(n);
a = a.split(" ").map(Number);

const lis = [a[0]];

for (let i = 1; i < n; i++) {
  const current = a[i];

  let left = 0;
  let right = lis.length - 1;

  if (lis[right] < current) {
    lis.push(current);
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
  }
}

console.log(lis.length);
