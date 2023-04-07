// solved

const fs = require('fs');
[t, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const result = [];

let cursor = 0;

for(let test_case = 0; test_case < +t; test_case++) {
    const n = +input[cursor++];

    let sticker = [];
    sticker.push(input[cursor++].split(' ').map(Number));
    sticker.push(input[cursor++].split(' ').map(Number));

    if(n > 1) {
        sticker[0][1] += sticker[1][0];
        sticker[1][1] += sticker[0][0];
    }

    for(let i = 2; i < n; i++) {
        sticker[0][i] += Math.max(sticker[1][i - 1], sticker[1][i - 2]);
        sticker[1][i] += Math.max(sticker[0][i - 1], sticker[0][i - 2]);
    }

    const max = Math.max(...sticker[0], ...sticker[1]);

    result.push(max);
}

console.log(result.join('\n'));