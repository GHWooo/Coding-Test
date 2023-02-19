// solved

const fs = require('fs');
let [n, ...board] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
n = Number(n);

let sx, sy;

board = board.map((line, i) => line.split(' ').map((fish, j) => {
    const num_fish = Number(fish);

    if(num_fish === 9) {
        sx = i;
        sy = j;
        return 0;
    }

    return num_fish;
}));

const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];

let size = 2;
let eat = 0;
let total_time = 0;

while(true) {
    let queue = [[sx, sy, 0]];
    let fish = [];

    const visited = board.map(line => line.slice());
    visited[sx][sy] = -1;

    while(queue.length) {
        const [x, y, time] = queue.shift();

        for(let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if(nx < 0 || nx >= n || ny < 0 || ny >= n) continue;

            const next = visited[nx][ny];

            if(next === -1 || next > size) continue;
            if(next === 0 || next === size) {
                queue.push([nx, ny, time + 1]);
                visited[nx][ny] = -1;
            }
            else {
                queue.push([nx, ny, time + 1]);
                fish.push([nx, ny, time + 1]);
                visited[nx][ny] = -1;
            }
        }
    }

    if(!fish.length) break;

    fish.sort((a, b) => {
        if(a[0] === b[0]) return a[1] - b[1];
        return a[0] - b[0];
    });
    fish.sort((a, b) => a[2] - b[2]);

    const [tx, ty, tTime] = fish[0]; 

    board[tx][ty] = 0;
    sx = tx;
    sy = ty;
    total_time += tTime;
    eat++;

    if(eat === size) {
        size++;
        eat = 0;
    }
}

console.log(total_time);