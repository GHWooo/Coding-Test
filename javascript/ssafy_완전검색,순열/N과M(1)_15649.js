// solved

const fs = require('fs');
const [n, m] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const result = [];

const add = (list) => {
	if(list.length === m) {
		result.push(list.join(' '));
		return;
	}
	
	for(let i = 1; i <= n; i++) {
		const temp_list = list.slice();
		
		if(!temp_list.includes(i)) {
			temp_list.push(i);
			add(temp_list);
		}
	}
}

for(let i = 1; i <= n; i++) {
	const temp = [i];
	add(temp);
}

console.log(result.join('\n'));