// solved

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [testCase, ...input] = require('fs').readFileSync(filePath).toString().trim().split('\n');

let cursor = 0;
const result = [];

const find = (x, parents) => {
  if (parents[x] === x) return x;

  return (parents[x] = find(parents[x], parents));
};

const union = (x, y, parents, size) => {
  const px = find(x, parents);
  const py = find(y, parents);

  if (px === py) return size[px];

  if (px < py) {
    parents[py] = px;
    size[px] += size[py];

    return size[px];
  } else {
    parents[px] = py;
    size[py] += size[px];

    return size[py];
  }
};

for (let tc = 0; tc < testCase; tc++) {
  const F = Number(input[cursor++]);

  const friends = [];
  const friendObj = {};
  let friendId = 0;

  for (let i = 0; i < F; i++) {
    const [a, b] = input[cursor++].split(' ');

    if (!friendObj[a]) friendObj[a] = friendId++;
    if (!friendObj[b]) friendObj[b] = friendId++;

    friends.push([a, b]);
  }

  const parents = Array(friendId);
  const size = Array(friendId);

  for (let i = 0; i < friendId; i++) {
    parents[i] = i;
    size[i] = 1;
  }

  friends.forEach(([a, b]) => {
    const answer = union(friendObj[a], friendObj[b], parents, size);

    result.push(answer);
  });
}

console.log(result.join('\n'));
