// solved

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
[nm, ...board] = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = nm.split(" ").map(Number);
let start = [],
  end = [];

board = board.map((line, x) => {
  return line.split(" ").map((number, y) => {
    const newNumber = Number(number);

    if (newNumber) {
      end[0] = x;
      end[1] = y;
    }
    if (!start.length && newNumber) {
      start[0] = x;
      start[1] = y;
    }

    return newNumber;
  });
});

const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];

const direcCheck = (x, y) => {
  let check = 0;

  for (let i = 0; i < 4; i++) {
    const tx = x + dx[i];
    const ty = y + dy[i];

    if (board[tx][ty] === 0) {
      if (edgeCheck(tx, ty)) check++;
    }
  }

  if (check >= 1) return true;
  return false;
};

const edgeCheck = (x, y) => {
  if (x === 0 || x === n - 1 || y === 0 || y === m - 1) return true;

  const queue = [[x, y]];

  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  visited[x][y] = true;

  while (queue.length) {
    const [tx, ty] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = tx + dx[i];
      const ny = ty + dy[i];

      if (visited[nx][ny] || board[nx][ny] !== 0) continue;

      if (nx === 0 || nx === n - 1 || ny === 0 || ny === m - 1) return true;

      visited[nx][ny] = true;
      queue.push([nx, ny]);
    }
  }

  return false;
};

let count = 0;
let end_cheese_count;

while (start.length) {
  count++;

  let newStart = [],
    newEnd = [];
  let endPoint = false;

  const temp = [];

  for (let i = start[0]; i <= end[0]; i++) {
    for (let j = start[1]; j < m; j++) {
      if (j === m - 1) start[1] = 0;
      if (board[i][j] === 0) continue;

      if (direcCheck(i, j)) {
        temp.push([i, j]);
      } else {
        newEnd = [i, j];
        if (!newStart.length) newStart = [i, j];
      }

      if (i === end[0] && j === end[1]) {
        endPoint = true;
        break;
      }
    }
    if (endPoint) break;
  }

  end_cheese_count = temp.length;
  temp.forEach(([x, y]) => (board[x][y] = 0));

  start = newStart.slice();
  end = newEnd.slice();
}

console.log([count, end_cheese_count].join("\n"));
