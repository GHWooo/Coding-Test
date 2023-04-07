// solved

const fs = require('fs');
const [rc, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [r, c] = rc.split(' ').map(Number);
const search_map = input.map((element) => element.split(''));

const visited = [];

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const solution = (x, y, count, visited) => {
  let max_count = count;

  visited[search_map[x][y].charCodeAt() - 65] = 1;

  for (let i = 0; i < 4; i++) {
    const tx = x + dx[i];
    const ty = y + dy[i];

    if (tx >= 0 && tx < r && ty >= 0 && ty < c && !visited[search_map[tx][ty].charCodeAt() - 65]) {
        max_count = Math.max(max_count, solution(tx, ty, count + 1, visited));
    }
  }

  visited[search_map[x][y].charCodeAt() - 65] = false;

  return max_count;
};

console.log(solution(0, 0, 1, visited));
