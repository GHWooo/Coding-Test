const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);
const [A, B, C] = input;

const visited = Array.from({ length: A + 1 }, () =>
  Array.from({ length: B + 1 }, () => Array(C + 1).fill(false))
);
visited[0][0][C] = true;

const queue = [[0, 0, C]];
let cursor = 0;

const result = [];

const change = [
  [0, 1],
  [0, 2],
  [1, 2],
];

const checkIndex = (i, j, current) => {
  const newCurrent = current.slice();

  const vaild = input[j] - current[j];

  if (current[i] <= vaild) {
    newCurrent[j] += current[i];
    newCurrent[i] = 0;
  } else {
    newCurrent[j] = input[j];
    newCurrent[i] -= vaild;
  }

  const [na, nb, nc] = newCurrent;

  if (!visited[na][nb][nc]) {
    visited[na][nb][nc] = true;

    queue.push([...newCurrent]);
  }
};

while (cursor < queue.length) {
  const current = queue[cursor++];

  if (current[0] === 0) result.push(current[2]);

  change.forEach(([i, j]) => {
    if (current[i] > 0 && current[j] < input[j]) checkIndex(i, j, current);
    if (current[j] > 0 && current[i] < input[i]) checkIndex(j, i, current);
  });
}

console.log(result.sort((a, b) => a - b).join(' '));
