// solved

const fs = require('fs');
const [[n, s], input] = fs.readFileSync('/dev/stdin').toString().trim()
					.split('\n').map(line => line.split(' ').map(Number));

let count = 0;

const visited = [];

const solution = (current) => {
	if(current === n) {
		const sum = visited.reduce((sum, val) => sum + val, 0);
		
		if(sum === s) count++;
		return;
	}
	
	visited.push(input[current]);
	solution(current + 1);
	visited.pop(input[current]);
	solution(current + 1);
}

solution(0);

if(s === 0) count--;

console.log(count);