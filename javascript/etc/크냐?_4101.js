// solved

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const result = [];

input.forEach((line) => {
    const [a, b] = line.split(' ').map(Number);
    
    if(a !== 0 || b !== 0) {
	    if(a > b) result.push('Yes');
	    else result.push('No');
    }
})

console.log(result.join('\n'));