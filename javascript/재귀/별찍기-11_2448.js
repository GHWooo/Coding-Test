// solved

const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin').toString().trim());

const init = ['  *  ', ' * * ', '*****'];

const solution = (level, board) => {
	if(level === n) return board;
	
	const next_board = [];
	let empty_line = '';
	for(let i = 0; i < level; i++) empty_line += ' ';
	
	for(let i = 0; i < level; i++) next_board.push(`${empty_line}${board[i]}${empty_line}`);
	for(let i = 0; i < level; i++) next_board.push(`${board[i]} ${board[i]}`);

	return solution(level * 2, next_board);
}

console.log(solution(3, init).join('\n'));