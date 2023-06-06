const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [n, ...ABCD] = require('fs').readFileSync(filePath).toString().trim().split('\n');

n = Number(n);
ABCD = ABCD.map((line) => line.split(' ').map(Number));

const sumMap = new Map();

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    const sum = ABCD[i][0] + ABCD[j][1];

    if (sumMap.has(sum)) {
      sumMap.set(sum, sumMap.get(sum) + 1);
    } else {
      sumMap.set(sum, 1);
    }
  }
}

let result = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    const goal = -1 * (ABCD[i][2] + ABCD[j][3]);

    if (sumMap.has(goal)) {
      result += sumMap.get(goal);
    }
  }
}

console.log(result);
