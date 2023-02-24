// solved

const fs = require('fs');
[nm, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = nm.split(' ').map(Number);

const link = Array.from({length: n}, () => []);
input.forEach(line => {
	const [a, b] = line.split(' ').map(Number);
	
	link[a].push(b);
	link[b].push(a);
});

let result = 0;
const visited = Array(n).fill(false);

const solution = (current, count) => {
	if(result) return;
	
	if(count === 4) {
		result = 1;
		return;
	}
	
	for(let i = 0; i < link[current].length; i++) {
		const next = link[current][i];
		
		if(visited[next]) continue;
		
		visited[next] = true;
		solution(next, count + 1);
		visited[next] = false;
	}
}

for(let i = 0; i < n; i++) {
	if(result) break;
	
	visited[i] = true;
	solution(i, 0);
	visited[i] = false;
}

console.log(result);