const fs = require('fs');
[n, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
n = Number(n);
input = input.map(x => x.split(' ').map(Number));

const graph = Array.from(Array(n), () => new Array());
const result = Array.from(Array(n), () => new Array(n).fill(0));

for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
        if(input[i][j] === 1) {
            graph[i].push(j);
        }
    }
}

const search = (standard, current, visited) => {
    const len = visited[current].length;
    if(len === 0) return;

    for(let i = 0; i < len; i++) {
        if(visited[current][i] !== -1) {
            result[standard][visited[current][i]] = 1;
            const temp_current = visited[current][i]
            visited[current][i] = -1;
            search(standard, temp_current, visited);
        }
    }
}

for(let i = 0; i < n; i++) {
    const visited = graph.map(list => list.slice());
    search(i, i, visited);
}

result.forEach((number_list) => {
    console.log(number_list.join(' '));
})
