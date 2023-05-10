// solved

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [N, ...board] = require('fs').readFileSync(filePath).toString().trim().split('\n');

N = Number(N);
board = board.map((line) => line.split(' '));
let result = 10001;

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const groundVisited = Array.from({ length: N }, () => Array(N).fill(false));
let seeVisited;

const seeCheck = (x, y, cnt) => {
  const seeQueue = [[x, y, cnt]];
  let seeQueueIndex = 0;

  while (seeQueueIndex < seeQueue.length) {
    const [cx, cy, cCnt] = seeQueue[seeQueueIndex++];

    for (let i = 0; i < 4; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];

      if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;

      const nCnt = cCnt + 1;

      if (board[nx][ny] === '0' && seeVisited[nx][ny] > nCnt) {
        seeVisited[nx][ny] = nCnt;
        seeQueue.push([nx, ny, nCnt]);
      } else if (board[nx][ny] === '1' && !groundVisited[nx][ny]) {
        result = Math.min(result, cCnt);
      }
    }
  }
};

const groundCheck = (x, y) => {
  seeVisited = Array.from({ length: N }, () => Array(N).fill(10001));

  const groundQueue = [[x, y]];
  let groundQueueIndex = 0;

  let seeList = [];

  while (groundQueueIndex < groundQueue.length) {
    const [cx, cy] = groundQueue[groundQueueIndex++];

    for (let i = 0; i < 4; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];

      if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;

      if (board[nx][ny] === '1' && !groundVisited[nx][ny]) {
        groundVisited[nx][ny] = true;
        groundQueue.push([nx, ny]);
      } else if (board[nx][ny] === '0' && seeVisited[nx][ny] > 1) {
        seeVisited[nx][ny] = 1;
        seeList.push([nx, ny]);
      }
    }
  }

  seeList.forEach((see) => {
    seeCheck(...see, 1);
  });
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (board[i][j] === '1' && !groundVisited[i][j]) {
      groundVisited[i][j] = true;
      groundCheck(i, j);
    }
  }
}

console.log(result);
