// solved

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [T, ...input] = require('fs').readFileSync(filePath).toString().trim().split('\n');

let inputCursor = 0;
const result = [];

let linked, visited, cycleCheck, countLeft;

const search = (cur, cnt) => {
  const next = linked[cur];

  if (!visited[next]) {
    visited[next] = cnt + 1;
    search(next, cnt + 1);
  } else {
    if (!cycleCheck[next]) countLeft -= cnt - visited[next] + 1;
  }

  cycleCheck[cur] = true;
};

while (inputCursor < input.length) {
  const n = Number(input[inputCursor++]);

  linked = Array(n + 1);
  visited = Array(n + 1).fill(false);
  cycleCheck = Array(n + 1).fill(false);

  input[inputCursor++].split(' ').forEach((num, index) => {
    linked[index + 1] = Number(num);
  });

  countLeft = n;

  for (let i = 1; i <= n; i++) {
    if (visited[i]) continue;

    visited[i] = 1;
    search(i, 1);
  }
  result.push(countLeft);
}

console.log(result.join('\n'));
