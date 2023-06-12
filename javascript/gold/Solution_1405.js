const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [N, ...percentages] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

percentages = percentages.map((percent) => percent / 100);

const visited = Array.from({ length: 29 }, () => Array(29).fill(false));
visited[14][14] = true;

const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];

let result = 0;

const search = (x, y, n, percent) => {
  if (n === N) {
    result += percent;
    return;
  }

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || ny < 0 || nx >= 29 || ny >= 29) continue;

    if (!visited[nx][ny] && percentages[i] > 0) {
      visited[nx][ny] = true;
      search(nx, ny, n + 1, percent * percentages[i]);
      visited[nx][ny] = false;
    }
  }
};

search(14, 14, 0, 1);

console.log(result);
