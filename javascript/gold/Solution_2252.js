// solved

const fs = require('fs');
[nm, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [n, _] = nm.split(' ').map(Number);
input = input.map(element => element.split(' ').map(Number));

const graph = Array.from({length: n + 1}, () => []);
const link = Array.from({length: n + 1}, () => 0);
const queue = [];

input.forEach(([front, back]) => {
    graph[front].push(back);
    link[back] += 1;
});

for(let i = 1; i <= n; i++) {
    if(!link[i]) {
        queue.push(i);
    }
}

const result = [];

while(queue.length) {
    const number = queue.pop();
    result.push(number);

    for(const next of graph[number]) {
        link[next] -= 1;

        if(link[next] === 0) {
            queue.push(next);
            link[next] -= 1;
        }
    }
}

console.log(result.join(' '));