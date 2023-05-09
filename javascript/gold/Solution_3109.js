// solved

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [RC, ...board] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [R, C] = RC.split(' ').map(Number);
const visited = Array.from({ length: R }, () => Array(C).fill(false));

board.forEach((line, i) => {
  line.split('').forEach((element, j) => {
    if (element === 'x') visited[i][j] = true;
  });
});

const dx = [-1, 0, 1];
let count = 0;

const search = (x, y) => {
  for (let i = 0; i < 3; i++) {
    const nx = x + dx[i];
    const ny = y + 1;

    if (nx < 0 || nx >= R || ny < 0 || ny >= C) continue;

    if (!visited[nx][ny]) {
      visited[nx][ny] = true;
      if (ny === C - 1) {
        count++;
        return true;
      }

      const answer = search(nx, ny);

      if (answer) return true;
    }
  }

  return false;
};

for (let i = 0; i < R; i++) {
  search(i, 0);
}

console.log(count);
