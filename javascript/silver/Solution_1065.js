// solved

const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin').toString().trim());

let count = 0;

for(let i = 1; i <= n; i++) {
	if(i < 100) {
		count++;
		continue;
	}
	
	const check_number = String(i).split('').map(Number);
	
	let stand = check_number[0] - check_number[1];
	
	for(let j = 1; j < check_number.length - 1; j++) {
		if(check_number[j] - check_number[j + 1] !== stand) {
			stand = false;
			break;
		}
	}
	
	if(stand !== false) count++;
}

console.log(count);