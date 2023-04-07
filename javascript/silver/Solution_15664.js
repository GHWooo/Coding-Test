// solved
const fs = require('fs');
[nm, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = nm.split(' ').map(Number);
input = input.split(' ').map(Number).sort((a, b) => a - b);

const result = [];

const add = (array, index, count) => {
	if(count === m) {
		let success = true;
		
		for(let i = 0; i < result.length; i++) {
			let end = true;
			for(let j = 0; j < m; j++) {
				if(result[i][j] !== array[j]) {
					end = false;
					break;
				}
			}
			
			if(end) {
				success = false;
				break;
			}
		}
		
		if(!result.length) result.push(array);
		else if(success) result.push(array);
		return;
	}
	
	for(let i = index + 1; i < n; i++) {
        const temp_array = array.slice();
        temp_array.push(input[i]);
        add(temp_array, i, count + 1);
    }
}

for(let i = 0; i < (n - m + 1); i++) add([input[i]], i, 1);

console.log(result.map(line => line.join(' ')).join('\n'));