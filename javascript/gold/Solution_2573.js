// solved

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [NM, ...board] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = NM.split(" ").map(Number);

const icePosi = [];
board = board.map((line, i) =>
  line.split(" ").map((height, j) => {
    height = Number(height);

    if (height > 0) {
      icePosi.push([i, j]);
    }

    return height;
  })
);

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const checkWater = (x, y) => {
  let cnt = 0;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

    if (board[nx][ny] === 0) cnt++;
  }

  return cnt;
};

let iceberg = [];

icePosi.forEach(([x, y]) => {
  const cnt = checkWater(x, y);

  iceberg.push([x, y, cnt]);
});

let result = 0;

const solution = () => {
  result++;
  const newIceberg = [];

  iceberg.forEach(([x, y, d]) => {
    board[x][y] = board[x][y] <= d ? 0 : board[x][y] - d;
  });

  iceberg.forEach(([x, y, d]) => {
    if (board[x][y] > 0) {
      const cnt = checkWater(x, y);

      newIceberg.push([x, y, cnt]);
    }
  });

  let size = newIceberg.length;
  if (size === 0) {
    result = 0;
    return;
  }

  const visited = Array.from({ length: N }, () => Array(M).fill(false));
  visited[newIceberg[0][0]][newIceberg[0][1]] = true;

  const queue = [[newIceberg[0][0], newIceberg[0][1]]];
  let queueIndex = 0;

  while (queue.length > queueIndex) {
    const [tx, ty] = queue[queueIndex++];
    size--;

    if (size === 0) break;

    for (let i = 0; i < 4; i++) {
      const nx = tx + dx[i];
      const ny = ty + dy[i];

      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

      if (board[nx][ny] > 0 && !visited[nx][ny]) {
        visited[nx][ny] = true;
        queue.push([nx, ny]);
      }
    }
  }

  if (size > 0) return;

  iceberg = newIceberg;

  solution();
};

solution();

console.log(result);
