// solved

const fs = require('fs');
[nm, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = nm.split(' ').map(Number);
input = input.split(' ').map(Number).sort((a, b) => a - b);

const result = [];

const add = (array, count) => {
	if(count === m) {
		result.push(array);
		return;
	}
	
	for(let i = 0; i < n; i++) {
        if(!array.includes(input[i])) {
            const temp_array = array.slice();
            temp_array.push(input[i]);
            add(temp_array, count + 1);
        }
    }
}
for(let i = 0; i < n; i++) add([input[i]], 1);

console.log(result.map(line => line.join(' ')).join('\n'));