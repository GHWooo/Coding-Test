// solved

const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin').toString().trim());

const init = ['***', '* *', '***'];

const solution = (level, board) => {
	if(level === n) return board;
	
	let empty_line = '';
		
	for(let i = 0; i < level; i++) empty_line += ' ';
	
	const next_board = [];
	
	for(let i = 0; i < 3; i++) {
		for(let j = 0; j < board.length; j++) {
			let star_line = '';
			
			if(i === 1) {
				star_line += board[j] + empty_line + board[j];
			} else {
				for(let v = 0; v < 3; v++) star_line += board[j];
			}
			
			next_board.push(star_line);
		}
	}
	return solution(level * 3, next_board);
}

console.log(solution(3, init).join('\n'));