// solved

const fs = require('fs');
const [nm, ...input] =  fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = nm.split(' ').map(Number);
const board = input.map(line => line.split(' ').map(Number));

const next = [[[0, 1], [0, 2], [0, 3]], [[1, 0], [2, 0], [3, 0]],	// I
			[[0, 1], [1, 0], [1, 1]],	// O
			[[0, -1], [1, 0], [0, 1]], [[0, -1], [-1, 0], [0, 1]], [[-1, 0], [0, 1], [1, 0]], [[-1, 0], [0, -1], [1, 0]],	// T
			[[0, 1], [-1, 1], [-2, 1]], [[0, -1], [1, -1], [2, -1]], [[-1, 0], [-1, -1], [-1, -2]], [[1, 0], [1, 1], [1, 2]],	// J
			[[0, -1], [-1, -1], [-2, -1]], [[-1, 0], [-1, 1], [-1, 2]], [[0, 1], [1, 1], [2, 1]], [[1, 0], [1, -1], [1, -2]],	// L
			[[1, 0], [1, 1], [2, 1]], [[0, 1], [-1, 1], [-1, 2]],	// S
			[[1, 0], [1, -1], [2, -1]], [[0, 1], [1, 1], [1, 2]]];	// Z

let max = 0;


for(let i = 0; i < n; i++) {
	for(let j = 0; j < m; j++) {
		for(let k = 0; k < next.length; k++) {
			let temp = board[i][j];
			let vail = true;
			
			for(let v = 0; v < 3; v++) {
				const [dx, dy] = next[k][v];
				const tx = i + dx, ty = j + dy;
				
				if(tx < 0 || tx >= n || ty < 0 || ty >= m) {
					vail = false;
					break;
				} else {
					temp += board[tx][ty];
				}
			}
			
			if(vail) max = Math.max(max, temp);
		}
	}
}

console.log(max);