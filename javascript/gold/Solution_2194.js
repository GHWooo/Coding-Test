// solved

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [NMABK, ...input] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [N, M, A, B, K] = NMABK.split(' ').map(Number);

const [ex, ey] = input
  .pop()
  .split(' ')
  .map((element) => Number(element) - 1);
const [sx, sy] = input
  .pop()
  .split(' ')
  .map((element) => Number(element) - 1);

const board = Array.from({ length: N }, () => Array(M).fill(true));

input.forEach((line) => {
  const [x, y] = line.split(' ').map((element) => Number(element) - 1);

  board[x][y] = false;
});

let result = -1;

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const queue = [[sx, sy, 0]];
let cursor = 0;

const visited = Array.from({ length: N }, () => Array(M).fill(false));
visited[sx][sy] = true;

const direc = [0, B - 1, A + B - 2, A + B * 2 - 3];

const moveUnit = (x, y, index, len, n) => {
  const unit = [[x, y]];

  let tx = x,
    ty = y;

  for (let i = 0; i < 4; i++) {
    const limit = i % 2 === 0 ? B : A;

    for (let j = 1; j < limit; j++) {
      switch (i) {
        case 0:
          ty++;
          break;
        case 1:
          tx++;
          break;
        case 2:
          ty--;
          break;
        case 3:
          tx--;
          break;
      }

      if (tx === x && ty === y) break;
      unit.push([tx, ty]);
    }
  }

  const direcIndex = direc[index];

  const frontPosition = [];

  for (let i = direcIndex; i < len + direcIndex; i++) {
    const curIndex = i === unit.length ? 0 : i;

    const nx = unit[curIndex][0] + dx[index];
    const ny = unit[curIndex][1] + dy[index];

    if (nx < 0 || nx >= N || ny < 0 || ny >= M) return;
    if (!board[nx][ny]) return;

    frontPosition.push([nx, ny]);
  }

  let newX, newY;

  for (let i = 0; i < unit.length; i++) {
    if (i >= direcIndex && i < len + direcIndex) {
      if (i === 0) {
        newX = frontPosition[0][0];
        newY = frontPosition[0][1];
      }

      i += len - 1;
      continue;
    }

    const nx = unit[i][0] + dx[index];
    const ny = unit[i][1] + dy[index];

    if (i === 0) {
      newX = nx;
      newY = ny;
    }
  }

  if (visited[newX][newY]) return;

  if (newX === ex && newY === ey) {
    result = n + 1;
    return;
  }

  visited[newX][newY] = true;
  queue.push([newX, newY, n + 1]);
};

while (cursor < queue.length) {
  const [x, y, n] = queue[cursor++];

  for (let i = 0; i < 4; i++) {
    moveUnit(x, y, i, i % 2 === 0 ? B : A, n);

    if (result > 0) break;
  }

  if (result > 0) break;
}

console.log(result);
