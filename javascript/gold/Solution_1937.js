// solved

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, ...board] = require("fs").readFileSync(filePath).toString().trim().split("\n");

n = Number(n);
board = board.map((line) => line.split(" ").map(Number));

const dp = Array.from({ length: n }, () => Array(n).fill(-1));

let result = 1;

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const search = (x, y) => {
  let max = 0;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
    if (board[x][y] >= board[nx][ny]) continue;

    if (dp[nx][ny] === -1) {
      const answer = search(nx, ny);

      dp[nx][ny] = answer;
      max = Math.max(max, answer);
    } else max = Math.max(max, dp[nx][ny]);
  }

  if (max > 0) {
    dp[x][y] = max;
    result = Math.max(result, dp[x][y]);
  }

  return max + 1;
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (dp[i][j] === -1) {
      dp[i][j] = search(i, j);

      result = Math.max(result, dp[i][j]);
    }
  }
}

console.log(result);
