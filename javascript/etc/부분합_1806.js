// solved

const fs = require('fs');
[nm, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = nm.split(' ').map(Number);
input = input.split(' ').map(Number);

let left = 0, right = 0;

let min_count = n + 1;
let sum = input[0];

while(left < n) {
	if(sum >= m) {
		min_count = Math.min(min_count, right - left + 1);
		
		sum -= input[left];
		left += 1;
		
		if(left > right) {
			right += 1;
			sum += input[right];
		}
	}
	else {
		if(right === n - 1) break;
		
		right += 1;
		sum += input[right];
	}
}

console.log(min_count === n + 1 ? 0 : min_count);