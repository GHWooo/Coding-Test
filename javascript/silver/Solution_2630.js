//solved
const fs = require('fs');
[n, ...maps] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
n = parseInt(n);
maps = maps.map(x => x.split(' '));
let white = 0, blue = 0;
let start = [[0, 0, n]];

while (start.length > 0) {
    [x, y, l] = start.shift();

    let temp = maps[x][y];
    for (let i = x; i < x + l; i++) {
        for (let j = y; j < y + l; j++) {
            if (maps[i][j] !== temp) {
                temp = false; break;
            }
        }
        if (!temp) break;
    }

    if (temp) temp === '0' ? white++ : blue++;
    else {
        for (let i = x; i < x + l; i += (l / 2)) {
            for (let j = y; j < y + l; j += (l / 2)) {
                start.push([i, j, l / 2]);
            }
        }
    }
}
console.log(white + '\n' + blue);