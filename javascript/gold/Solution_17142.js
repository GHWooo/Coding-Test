// solved

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [NM, ...board] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [N, M] = NM.split(' ').map(Number);
const virus = [];

let boardCnt = 0;

board = board.map((line, i) => {
  return line.split(' ').map((element, j) => {
    element = Number(element);

    if (element === 2) virus.push([i, j]);
    if (element === 0) boardCnt++;

    return element;
  });
});

let result = Infinity;

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const search = (activate) => {
  const visited = Array.from({ length: N }, () => Array(N).fill(false));

  let leftCnt = boardCnt;
  let max = 0;

  const queue = [];
  let queueIndex = 0;

  activate.forEach((index) => {
    const [vx, vy] = virus[index];

    visited[vx][vy] = true;
    queue.push([vx, vy, 0]);
  });

  let endFlag = false;

  while (queueIndex < queue.length) {
    const [x, y, cnt] = queue[queueIndex++];

    if (leftCnt === 0) {
      endFlag = true;
      break;
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      const ncnt = cnt + 1;

      if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;

      if (!visited[nx][ny] && board[nx][ny] !== 1) {
        visited[nx][ny] = true;

        if (board[nx][ny] === 0) {
          leftCnt--;
          max = Math.max(max, ncnt);
        }

        queue.push([nx, ny, ncnt]);
      }
    }

    if (endFlag) break;
  }

  if (endFlag) {
    result = Math.min(result, max);
  }
};

const virusCnt = virus.length;

const combination = (index, activate, cnt) => {
  if (cnt === M) {
    search(activate);
    return;
  }

  for (let i = index + 1; i < virusCnt - M + cnt + 1; i++) {
    activate.push(i);
    combination(i, activate, cnt + 1);
    activate.pop();
  }
};

for (let i = 0; i < virusCnt - M + 1; i++) {
  const activate = [i];

  combination(i, activate, 1);
}

console.log(result === Infinity ? -1 : result);
