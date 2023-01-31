// solved

const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin').toString().trim());

let count = 0;

const search = (hi, wi, visited) => {
	const t_visited = visited.map(list => [...list]);
	t_visited.push([hi, wi]);
	
	if(hi === n - 1) {
		count += 1;
		return;
	}
	
	const nhi = hi + 1;
	
	for(let i = 0; i < n; i++) {
		let next = true;
		
		
		for(let j = 0; j < t_visited.length; j++) {
			const thi = t_visited[j][0], twi = t_visited[j][1];
			
			if(twi === i || (Math.abs(thi - nhi) === Math.abs(i - twi))) {
				next = false;
				break;
			}
		}
		
		if(next) search(nhi, i, t_visited);
	}
}

for(let i = 0; i < n; i++) {
	search(0, i, []);
}

console.log(count);