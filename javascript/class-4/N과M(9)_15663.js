// solved

const fs = require('fs');
[nm, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = nm.split(' ').map(Number);
input = input.split(' ').map(Number).sort((a, b) => a - b);

const result = [];
const visited = Array(n).fill(false);
const array = [];

const solution = () => {
    if (array.length === m) {
        result.push(array.join(' '));
    } else {
        visited.forEach((bool, i) => {
            if (!bool) {
                visited[i] = true;
                array.push(input[i]);
                solution();
                
                visited[i] = false;
                array.pop();
            }
        })
    }
};

solution();

console.log([...new Set(result)].join('\n'));