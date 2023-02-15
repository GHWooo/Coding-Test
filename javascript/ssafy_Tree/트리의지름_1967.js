// solved

const fs = require('fs');
[n, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

n = Number(n);

if(n === 1) console.log(0);
else {
	const parents = Array(n + 1);
	const childrens = Array.from({length: n + 1}, () => []);
	
	let start;
	
	for(let i = 0; i < input.length; i++) {
		const [p, c, w] = input[i].split(' ').map(Number);
		parents[c] = [p, w];
		childrens[p].push([c, w]);
		
		if(i === input.length - 1) start = c;
	}
	
	let max_end = [0, 0];
	
	const bfs = (pre, current, sum) => {
		let end = true;
		
		if(current !== 1) {
			if(parents[current].length && pre !== parents[current][0]) {
				bfs(current, parents[current][0], sum + parents[current][1]);
				end = false;
			}
		}
		if(childrens[current].length) {
			childrens[current].forEach(([next, weight]) => {
				if(pre !== next) {
					bfs(current, next, sum + weight);
					if(end) end = false;
				}
			});
		}
		
		if(end && max_end[1] < sum) {
			max_end = [current, sum];
		}
	}
	
	bfs(0, start, 0);
	bfs(0, max_end[0], 0);
	
	console.log(max_end[1]);	
}
