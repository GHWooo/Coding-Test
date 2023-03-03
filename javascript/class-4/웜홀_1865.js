// solved

const fs = require('fs');
[tc, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const result = [];
let cursor = 0;

for(let test_case = 0; test_case < Number(tc); test_case++) {
	const [n, m, w] = input[cursor++].split(' ').map(Number);
	
	const linked = Array.from({length: n + 1}, () => []);
	
	for(let i = 0; i < m; i++) {
		const [s, e, t] = input[cursor++].split(' ').map(Number);
		
		linked[s].push([e, t]);
		linked[e].push([s, t]);
	}
	
	for(let i = 0; i < w; i++) {
		const [s, e, t] = input[cursor++].split(' ').map(Number);
		
		linked[s].push([e, -t]);
	}
	
	const dist = Array(n + 1).fill(0);
	
	let vaild = true;
	
	for(let i = 1; i <= n; i++) {
		for(let j = 1; j <= n; j++) {
			linked[j].forEach(([end, time]) => {
				if(dist[end] > time + dist[j]) {
					dist[end] = time + dist[j];
					
					if(i === n) {
						vaild = false;
					}
				}
			})
		}
	}
	
	result.push(vaild ? "NO" : "YES");
}

console.log(result.join('\n'));