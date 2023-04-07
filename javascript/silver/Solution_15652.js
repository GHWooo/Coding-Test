// solved

const fs = require('fs');
const [n, m] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const result = [];

const add = (number, str, count) => {
	if(count === m) {
		result.push(str);
		return;
	}
	
	for(let i = number; i <= n; i++) add(i, str + `${i}`, count + 1);
}

for(let i = 1; i <= n; i++) add(i, `${i}`, 1);

console.log(result.map(str => str.split('').join(' ')).join('\n'));