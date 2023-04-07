// solved

const fs = require('fs');
const [t, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let result = [];
let cursor = 0;

for (let i = 0; i < Number(t); i++) {
    const airplane = [];
    const [n, m] = input[cursor++].split(" ").map(Number);

    for (let j = 0; j < m; j++) {
        airplane[j] = input[cursor++].split(" ").map(Number);
    }

    const visited = new Array(n + 1).fill(false);
    visited[0] = true;
    visited[1] = true;
    const queue = [1];
    let count = 0;

    while (queue.length) {
        const current = queue.shift();

        for (const [a, b] of airplane) {
            if (a === current && !visited[b]) {
                queue.push(b);
                visited[b] = true;
                count++;
            } else if (b === current && !visited[a]) {
                queue.push(a);
                visited[a] = true;
                count++;
            }
        }
        if (!visited.includes(false)) break;
    }

    result[i] = count;
}

console.log(result.join('\n'));