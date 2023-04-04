// solved

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
[nm, ...board] = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = nm.split(" ").map(Number);

let red, blue;
let hole;

board = board.map((line, x) => {
  return line.split("").map((char, y) => {
    if (char === "R") red = [x, y];
    if (char === "B") blue = [x, y];
    if (char === "O") hole = [x, y];

    return char;
  });
});

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const move = (board, ball, dir, color) => {
  let flag = 0;

  while (ball[0] > 0 && ball[0] < n - 1 && ball[1] > 0 && ball[1] < m - 1) {
    const nx = ball[0] + dx[dir];
    const ny = ball[1] + dy[dir];

    if (board[nx][ny] === "O") {
      if (color === "r") flag = 1;
      else flag = -1;

      return flag;
    }

    if (board[nx][ny] !== ".") break;

    ball[0] = nx;
    ball[1] = ny;
  }

  return flag;
};

const moveBall = (board, red, blue, dir) => {
  const tBoard = board.map((line) => line.slice());
  const tRed = red.slice();
  const tBlue = blue.slice();

  let first;

  switch (dir) {
    case 0:
      first = tRed[0] < tBlue[0] ? "r" : "b";
      break;
    case 1:
      first = tRed[0] > tBlue[0] ? "r" : "b";
      break;
    case 2:
      first = tRed[1] < tBlue[1] ? "r" : "b";
      break;
    case 3:
      first = tRed[1] > tBlue[1] ? "r" : "b";
      break;
  }

  let flag1 = 0;
  let flag2 = 0;

  if (first === "r") {
    flag1 = move(board, tRed, dir, "r");
    tBoard[red[0]][red[1]] = ".";
    if (flag1 !== 1) tBoard[tRed[0]][tRed[1]] = "R";

    flag2 = move(tBoard, tBlue, dir, "b");
    tBoard[blue[0]][blue[1]] = ".";
    if (flag2 !== -1) tBoard[tBlue[0]][tBlue[1]] = "B";
  } else {
    flag1 = move(board, tBlue, dir, "b");
    tBoard[blue[0]][blue[1]] = ".";
    if (flag1 !== -1) tBoard[tBlue[0]][tBlue[1]] = "B";

    flag2 = move(tBoard, tRed, dir, "r");
    tBoard[red[0]][red[1]] = ".";
    if (flag2 !== 1) tBoard[tRed[0]][tRed[1]] = "R";
  }

  if (flag1 === -1 || flag2 === -1) {
    return false;
  } else if (flag1 === 1 || flag2 === 1) {
    return true;
  }

  return [tBoard, tRed, tBlue];
};

let result = -1;

const queue = [[board, red, blue, 1]];

const visited = Array.from({ length: n }, () =>
  Array.from({ length: m }, () =>
    Array.from({ length: n }, () => Array.from({ length: m }, () => false))
  )
);

while (queue.length) {
  const [cboard, cred, cblue, count] = queue.shift();
  visited[cred[0]][cred[1]][cblue[0]][cblue[1]] = true;

  let end = false;

  for (let i = 0; i < 4; i++) {
    const answer = moveBall(cboard, cred, cblue, i);

    if (answer === true) {
      result = count;
      end = true;
      break;
    }
    if (answer === false || count === 10) continue;
    if (visited[answer[1][0]][answer[1][1]][answer[2][0]][answer[2][1]]) continue;

    queue.push([answer[0], answer[1], answer[2], count + 1]);
  }

  if (end) break;
}

console.log(result);
