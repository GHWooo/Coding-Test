// solved

const fs = require('fs');
[nm, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = nm.split(' ').map(Number);
input = input.map((element) => element.split(' ').map(Number));

const link = {};
for(let i = 0; i < n + m; i++) link[input[i][0]] = input[i][1];

const queue = [];
queue.push([1, 0]);

const visited = Array.from({length: 101}, () => -1);

while(queue.length) {
    [current, count] = queue.shift();

    if(current > 100) continue;

    current = link[current] ? link[current] : current;

    for(let i = 1; i <= 6; i++) {
        if(visited[current + i] === -1) {
            visited[current + i] = count + 1;
            queue.push([current + i, count + 1]);
        }
    }
}

console.log(visited[100]);