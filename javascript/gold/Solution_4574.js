// solved

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().split("\n");

let cursor = 0;
let tc = 1;

const result = [];

while (Number(input[cursor]) !== 0) {
  const n = Number(input[cursor++]);
  let board = Array.from({ length: 10 }, () => Array(10).fill(0));

  const horizon = Array.from({ length: 10 }, () => Array(10).fill(false));
  const perpen = Array.from({ length: 10 }, () => Array(10).fill(false));
  const square = Array.from({ length: 10 }, () => Array(10).fill(false));
  const dominoes = Array.from({ length: 10 }, () => Array(10).fill(false));

  const updateBoard = (x, y, value, del) => {
    board[x][y] = del ? 0 : value;
    horizon[x][value] = del ? false : true;
    perpen[y][value] = del ? false : true;

    let squareNum;

    if (x < 4) squareNum = 0;
    else if (x > 6) squareNum = 6;
    else squareNum = 3;

    if (y < 4) squareNum += 1;
    else if (y > 6) squareNum += 2;
    else squareNum += 3;

    square[squareNum][value] = del ? false : true;
  };

  const vaildCheck = (x, y, value) => {
    if (horizon[x][value] || perpen[y][value]) return false;

    let squareNum;

    if (x < 4) squareNum = 0;
    else if (x > 6) squareNum = 6;
    else squareNum = 3;

    if (y < 4) squareNum += 1;
    else if (y > 6) squareNum += 2;
    else squareNum += 3;

    if (square[squareNum][value]) return false;

    return true;
  };

  for (let i = 0; i < n; i++) {
    let [u, lu, v, lv] = input[cursor++].split(" ").map((element, index) => {
      if (index === 0 || index === 2) return Number(element);

      return element.split("").map((e, i) => {
        if (i === 0) return e.charCodeAt() - 64;
        return Number(e);
      });
    });

    dominoes[u][v] = true;
    dominoes[v][u] = true;

    updateBoard(lu[0], lu[1], u);
    updateBoard(lv[0], lv[1], v);
  }

  input[cursor++].split(" ").forEach((posi, num) => {
    const [x, y] = posi.split("").map((e, i) => {
      if (i === 0) return e.charCodeAt() - 64;
      return Number(e);
    });

    updateBoard(x, y, num + 1);
  });

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  let end = false;

  const search = (x, y) => {
    if (board[x][y] !== 0) {
      if (x === 9 && y === 9) {
        end = true;
        return;
      }

      let nx, ny;

      if (y === 9) {
        nx = x + 1;
        ny = 1;
      } else {
        nx = x;
        ny = y + 1;
      }

      search(nx, ny);
      return;
    }

    for (let i = 1; i <= 9; i++) {
      if (!vaildCheck(x, y, i)) continue;
      updateBoard(x, y, i, false);

      for (let k = 0; k < 4; k++) {
        let sidex = x + dx[k];
        let sidey = y + dy[k];

        if (sidex < 1 || sidex > 9 || sidey < 1 || sidey > 9) continue;
        if (board[sidex][sidey] !== 0) continue;

        for (let j = 1; j <= 9; j++) {
          if (i === j || !vaildCheck(sidex, sidey, j) || dominoes[i][j] || dominoes[j][i]) continue;

          updateBoard(sidex, sidey, j, false);

          dominoes[i][j] = true;
          dominoes[j][i] = true;

          if (x === 9 && y === 9) {
            end = true;
            return;
          }

          let nx, ny;

          if (y === 9) {
            nx = x + 1;
            ny = 1;
          } else {
            nx = x;
            ny = y + 1;
          }

          search(nx, ny);
          if (end) return;

          dominoes[i][j] = false;
          dominoes[j][i] = false;

          updateBoard(sidex, sidey, j, true);
        }
      }
      updateBoard(x, y, i, true);
    }
  };

  search(1, 1);

  result.push(`Puzzle ${tc++}`);

  board.shift();
  board = board.map((line) => {
    line.shift();
    return line.join("");
  });

  result.push(board.join("\n"));
}

console.log(result.join("\n"));
