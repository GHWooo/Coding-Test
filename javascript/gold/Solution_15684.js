// solved

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [NMH, ...lines] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [N, M, H] = NMH.split(' ').map(Number);

const ladder = Array.from({ length: H + 1 }, () => []);

lines.forEach((line) => {
  const [a, b] = line.split(' ').map(Number);

  ladder[a][b] = b + 1;
  ladder[a][b + 1] = b;
});

let result = 4;

const downHandler = (y) => {
  let cursorX = 1;
  let cursorY = y;

  while (cursorX <= H) {
    if (!ladder[cursorX][cursorY]) {
      cursorX++;
      continue;
    }

    cursorY = ladder[cursorX][cursorY];
    cursorX++;
  }

  return cursorY === y;
};

const checkDown = (cnt) => {
  for (let i = 1; i <= N; i++) {
    if (!downHandler(i)) return;
  }

  result = Math.min(cnt, result);
};

const drawLine = (x, y, cnt) => {
  if (result <= 1 || cnt >= 3) return;

  if (!ladder[x][y] && !ladder[x][y + 1]) {
    ladder[x][y] = y + 1;
    ladder[x][y + 1] = y;

    checkDown(cnt + 1);

    if (y >= N - 2 && x < H) drawLine(x + 1, 1, cnt + 1);
    else if (y < N - 2) drawLine(x, y + 2, cnt + 1);

    ladder[x][y] = undefined;
    ladder[x][y + 1] = undefined;
  }

  if (y >= N - 1 && x < H) drawLine(x + 1, 1, cnt);
  else if (y < N - 1) drawLine(x, y + 1, cnt);
};

checkDown(0);
drawLine(1, 1, 0);

console.log(result === 4 ? -1 : result);
