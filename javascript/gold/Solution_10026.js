// solved

const fs = require('fs');
[n, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

n = Number(n);
const normal = input.map(line => line.split(''));
const redgreen = input.map(line => line.split('').map(color => {
    if(color === 'G') return 'R';
    return color;
}));

let normal_count = 0;
let redgreen_count = 0;

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const search = (x, y, board, color) => {
    board[x][y] = false;

    for(let i = 0; i < 4; i++) {
        const tx = x + dx[i];
        const ty = y + dy[i];

        if(tx < 0 || tx >= n || ty < 0 || ty >= n) continue;

        if(board[tx][ty] === color) {
            search(tx, ty, board, color);
        }
    }
}

for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
        if(normal[i][j]) {
            search(i, j, normal, normal[i][j]);
            normal_count += 1;
        }
        if(redgreen[i][j]) {
            search(i, j, redgreen, redgreen[i][j]);
            redgreen_count += 1;
        }
    }
}

console.log(normal_count, redgreen_count);