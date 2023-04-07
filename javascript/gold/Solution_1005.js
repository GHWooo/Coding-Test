// solved

const fs = require('fs');
[t, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let cursor = 0;
const result = [];

for(let i = 0; i < Number(t); i++) {
	const [n, k] = input[cursor++].split(' ').map(Number);
	const time = input[cursor++].split(' ').map(Number);
    time.unshift(0);
	
	const link = Array.from({length: n + 1}, () => []);
    const line = Array.from({length: n + 1}, () => 0);
	
	for(let j = 0; j < k; j++) {
		const [x, y] = input[cursor++].split(' ').map(Number);
        
        line[y] += 1;
		link[x].push(y);
	}
	
	const goal = Number(input[cursor++]);
    const queue = [];

    for(let j = 1; j <= line.length; j++) {
        if(line[j] === 0) queue.push(j);
    }

    const visited = time.slice();

    while(queue.length) {
        const current = queue.shift();

        link[current].forEach(next => {
            visited[next] = Math.max(visited[next], visited[current] + time[next]);
            line[next] -= 1;

            if(line[next] === 0) queue.push(next);
        })
    }

    result.push(visited[goal]);
}
console.log(result.join('\n'));
