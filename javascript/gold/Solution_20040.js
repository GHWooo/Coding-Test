// solved

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let inputCursor = 0;

const [n, m] = input[inputCursor++].split(' ').map(Number);

const parents = [];
for (let i = 0; i < n; i++) {
  parents.push(i);
}

let order = 1;
let thisCycle = false;

const findParent = (a) => {
  if (parents[a] === a) return a;

  return findParent(parents[a]);
};

const union = (a, b) => {
  const pa = findParent(a);
  const pb = findParent(b);

  if (pa < pb) parents[pb] = pa;
  else parents[pa] = pb;
};

for (let i = 0; i < m; i++) {
  const [a, b] = input[inputCursor++].split(' ').map(Number);

  if (findParent(a) === findParent(b)) {
    thisCycle = true;
    break;
  }

  union(a, b);
  order++;
}

console.log(thisCycle ? order : 0);
