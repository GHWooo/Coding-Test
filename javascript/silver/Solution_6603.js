// solved

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const result = [];

for(let i = 0; i < input.length - 1; i++) {
	const current = input[i].split(' ');
	const k = Number(current[0]);
	
	const solution = (str, index, count) => {
		if(count === 6) {
			result.push(str + '\n');
			return;
		}
		
		for(let v = index + 1; v <= (k - 5 + count); v++) {
			const next = ` ${current[v]}`;
			solution(str + next, v, count + 1);
		}
	}
	
	for(let j = 1; j <= k - 5; j++) {
		const init = `${current[j]}`;
		solution(init, j, 1);
	}
	
	if(i < input.length - 2) result.push('\n');
}

console.log(result.join(''));