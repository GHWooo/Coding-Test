// solved

const fs = require('fs');
[nm, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

[n, m] = nm.split(' ').map(Number);

const zero_list = [];
const virus = [];

for(let i = 0; i < n; i++) {
	const temp_line = input[i].split(' ').map(Number);
	
	for(let j = 0; j < m; j++) {
		if(temp_line[j] === 0) zero_list.push([i, j]);
		if(temp_line[j] === 2) virus.push([i, j]);
	}
	
	input[i] = temp_line;
}

const zero_len = zero_list.length
const zero_count = zero_len - 3;
let max_count = 0;

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const infection = (board, count) => {
	const queue = virus.map(xy => xy.slice());
	let temp_count = count;
	
	while(queue.length) {
		[bx, by] = queue.shift();
		
		for(let i = 0; i < 4; i++) {
			const tx = bx + dx[i];
			const ty = by + dy[i];
			
			if(tx < 0 || tx >= n || ty < 0 || ty >= m) continue;
			
			if(board[tx][ty] === 0) {
				board[tx][ty] = 2;
				queue.push([tx, ty]);
				temp_count -= 1;
			}
		}
	}
	
	max_count = Math.max(max_count, temp_count)
}

for(let i = 0; i < zero_len - 2; i++) {
	for(let j = i + 1; j < zero_len - 1; j++) {
		for(let k = j + 1; k < zero_len; k++) {
			const board = input.map(line => line.slice());
			
			board[zero_list[i][0]][zero_list[i][1]] = 1;
			board[zero_list[j][0]][zero_list[j][1]] = 1;
			board[zero_list[k][0]][zero_list[k][1]] = 1;
			
			infection(board, zero_count);
		}
	}
}

console.log(max_count);