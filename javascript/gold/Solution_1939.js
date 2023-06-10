// solved

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [NM, ...input] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [N, M] = NM.split(' ').map(Number);
const [fac1, fac2] = input.pop().split(' ').map(Number);

const bridges = Array.from({ length: N + 1 }, () => []);

let left = 1;
let right = 1;

input.forEach((line) => {
  const [A, B, C] = line.split(' ').map(Number);

  right = Math.max(right, C);

  bridges[A].push([B, C]);
  bridges[B].push([A, C]);
});

const bfs = (weight) => {
  const visited = Array.from({ length: N + 1 }, () => false);
  visited[fac1] = true;

  const queue = [fac1];
  let queueIndex = 0;

  while (queueIndex < queue.length) {
    const current = queue[queueIndex++];

    if (current === fac2) {
      return true;
    }

    bridges[current].forEach(([next, nextWeight]) => {
      if (!visited[next] && nextWeight >= weight) {
        visited[next] = true;
        queue.push(next);
      }
    });
  }

  return false;
};

while (left <= right) {
  const mid = left + Math.floor((right - left) / 2);

  if (bfs(mid)) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(right);
