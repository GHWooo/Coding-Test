// solved

const fs = require('fs');
[n, ...board] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

n = Number(n);
board = board.map(line => line.split(' ').map(Number));

const next = [];

for(let i = 1; i < n; i++) {
	if(board[0][i]) next.push(i);
}

let result = Infinity;

const solution = (visited, current, count) => {
	if(visited.length === n - 1) {
		if(board[current][0]) {
			const t_count = count + board[current][0];
			result = Math.min(result, t_count);
		}
		
		return;
	}
	
	for(let i = 1; i < n; i++) {
		if(!visited.includes(i) && board[current][i]) {
			const t_visited= visited.slice();
			t_visited.push(i);
			solution(t_visited, i, count + board[current][i])
		}
	}
}

for(let i = 0; i < next.length; i++) {
	const visited = [next[i]];
	const count = board[0][next[i]];
	
	solution(visited, next[i], count);
}

console.log(result);