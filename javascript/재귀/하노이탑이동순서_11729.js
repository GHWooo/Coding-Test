// solved

const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin').toString().trim());

const move = [];

const solution = (start, mid, end, count) => {
	if(count === 1) {
		move.push([start, end]);
	} else {
		solution(start, end, mid, count - 1);
		move.push([start, end]);
		solution(mid, start, end, count - 1);
	}
}

solution(1, 2, 3, n);

console.log([[move.length], ...move].map(element => element.join(' ')).join('\n'));