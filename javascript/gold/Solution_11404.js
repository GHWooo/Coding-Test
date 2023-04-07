// solved

const fs = require('fs');
[n, m, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

n = Number(n);
m = Number(n);
let floyd = Array.from({ length: n }, () => Array(n).fill(Infinity));

input.forEach(line => {
    const [a, b, c] = line.split(' ').map(Number);

    floyd[a - 1][b - 1] = Math.min(floyd[a - 1][b - 1], c);
});

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        for (let k = 0; k < n; k++) {
            floyd[j][k] = Math.min(floyd[j][k], floyd[j][i] + floyd[i][k]);  
        }
    }
}

floyd = floyd.map((line, i) => {
    line = line.map((element, j) => {
        if (i === j || element === Infinity) return 0;
        else return element;
    });

    return line.join(' ');
});

console.log(floyd.join('\n'));