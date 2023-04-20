// solved

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...board] = require("fs").readFileSync(filePath).toString().trim().split("\n");

N = Number(N);

let initMax = 0;

board = board.map((line) =>
  line.split(" ").map((num) => {
    num = Number(num);

    if (initMax < num) initMax = num;

    return num;
  })
);

const maxDepth = Array(11).fill(0);

const up = (board) => {
  const newBoard = Array.from({ length: N }, () => Array(N).fill(0));
  let tMax = 0;

  for (let i = 0; i < N; i++) {
    const tempLine = [];
    let temp = null;

    for (let j = 0; j < N; j++) {
      if (board[j][i] === 0) continue;

      if (temp === null) {
        temp = board[j][i];
      } else {
        if (temp === board[j][i]) {
          tempLine.push(temp * 2);
          temp = null;
        } else {
          tempLine.push(temp);
          temp = board[j][i];
        }
      }
    }

    if (temp) tempLine.push(temp);

    for (let j = 0; j < tempLine.length; j++) {
      newBoard[j][i] = tempLine[j];

      if (tMax < tempLine[j]) tMax = tempLine[j];
    }
  }

  return [newBoard, tMax];
};
const down = (board) => {
  const newBoard = Array.from({ length: N }, () => Array(N).fill(0));
  let tMax = 0;

  for (let i = 0; i < N; i++) {
    const tempLine = [];
    let temp = null;

    for (let j = N - 1; j >= 0; j--) {
      if (board[j][i] === 0) continue;

      if (temp === null) {
        temp = board[j][i];
      } else {
        if (temp === board[j][i]) {
          tempLine.push(temp * 2);
          temp = null;
        } else {
          tempLine.push(temp);
          temp = board[j][i];
        }
      }
    }

    if (temp) tempLine.push(temp);

    for (let j = 0; j < tempLine.length; j++) {
      newBoard[N - 1 - j][i] = tempLine[j];

      if (tMax < tempLine[j]) tMax = tempLine[j];
    }
  }

  return [newBoard, tMax];
};
const left = (board) => {
  const newBoard = Array.from({ length: N }, () => Array(N).fill(0));
  let tMax = 0;

  for (let i = 0; i < N; i++) {
    const tempLine = [];
    let temp = null;

    for (let j = 0; j < N; j++) {
      if (board[i][j] === 0) continue;

      if (temp === null) {
        temp = board[i][j];
      } else {
        if (temp === board[i][j]) {
          tempLine.push(temp * 2);
          temp = null;
        } else {
          tempLine.push(temp);
          temp = board[i][j];
        }
      }
    }

    if (temp) tempLine.push(temp);

    for (let j = 0; j < tempLine.length; j++) {
      newBoard[i][j] = tempLine[j];

      if (tMax < tempLine[j]) tMax = tempLine[j];
    }
  }

  return [newBoard, tMax];
};
const right = (board) => {
  const newBoard = Array.from({ length: N }, () => Array(N).fill(0));
  let tMax = 0;

  for (let i = 0; i < N; i++) {
    const tempLine = [];
    let temp = null;

    for (let j = N - 1; j >= 0; j--) {
      if (board[i][j] === 0) continue;

      if (temp === null) {
        temp = board[i][j];
      } else {
        if (temp === board[i][j]) {
          tempLine.push(temp * 2);
          temp = null;
        } else {
          tempLine.push(temp);
          temp = board[i][j];
        }
      }
    }

    if (temp) tempLine.push(temp);

    for (let j = 0; j < tempLine.length; j++) {
      newBoard[i][N - 1 - j] = tempLine[j];

      if (tMax < tempLine[j]) tMax = tempLine[j];
    }
  }

  return [newBoard, tMax];
};

const checkSame = (board, newBoard) => {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (board[i][j] !== newBoard[i][j]) return false;
    }
  }

  return true;
};

const moveFunc = [up, down, left, right];

const solution = (board, cnt) => {
  for (let i = 0; i < 4; i++) {
    const [newBoard, curMax] = moveFunc[i](board);

    if (maxDepth[cnt] >= curMax) continue;

    if (cnt === 10) {
      let tempMax = curMax;
      let tempIndex = cnt;

      while (tempMax > 0 && tempIndex >= 0) {
        maxDepth[tempIndex--] = tempMax;

        tempMax = Math.floor(tempMax / 2);
      }

      continue;
    }

    if (checkSame(board, newBoard)) continue;

    solution(newBoard, cnt + 1);
  }
};

solution(board, 1);

console.log(Math.max(...maxDepth, initMax));
