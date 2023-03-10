// solved

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input;

rl.on('line', function (line) {
    input = line.split(' ').map(Number);
})
  .on('close', function () {
    solution(input);
    process.exit();
});

function solution(input) {
    const [n, k] = input;

    const queue = [[n, 0]];
    const visited = Array(200_001).fill(false);

    while (queue.length) {
        const [current, time] = queue.shift();
    
        if (current === k) {
            console.log(time);
            break;
        }
    
        if (current * 2 <= 200_000 && !visited[current * 2]) {
            visited[current * 2] = true;
            queue.push([current * 2, time]);
        }
        if (current > 0 && !visited[current - 1]) {
            visited[current - 1] = true;
            queue.push([current - 1, time + 1]);
        }
        if (current < 200_000 && !visited[current + 1]) {
            visited[current + 1] = true;
            queue.push([current + 1, time + 1]);
        }
    }
}