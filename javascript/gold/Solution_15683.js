// solved

const fs = require('fs');
[nm, ...board] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = nm.split(' ').map(Number);

const direc = {
	"1": [["u"], ["r"], ["d"], ["l"]],
	"2": [["l", "r"], ["u", "d"]],
	"3": [["u", "r"], ["r", "d"], ["d", "l"], ["l", "u"]],
	"4": [["l", "u", "r"], ["u", "r", "d"], ["l", "d", "r"], ["l", "u", "d"]],
	"5": [["l", "u", "r", "d"]]
};

let blind = 0;
const cctv = [];
const combination = [];

board = board.map((x, i) => {
	const line = x.split(' ').map((number, j) => {
		if(number === '0') blind++;
		else if(number !== '6') {
			cctv.push([i, j, number]);
			combination.push(direc[number].length);
		}
		
		return Number(number);
	});
	
	return line;
});

const test_case = [];

const getCase = (index, sum, count) => {
	if(count === cctv.length) {
		test_case.push(sum);
	}
	
	for(let i = 0; i < combination[index]; i++) {
		getCase(index + 1, sum + `${i}`, count + 1);
	}
}

getCase(0, '', 0);

const Up = (x, y, visited, blind) => {
	let t_blind = blind;
	
	for(let i = x - 1; i > -1; i--) {
        if(board[i][y] === 6) break;
        else if(board[i][y] == 0) {
            if(visited[i][y]) continue;

            t_blind -= 1;
            visited[i][y] = true;
        }
        else continue;
    }
	
	return t_blind;
}
const Down = (x, y, visited, blind) => {
	let t_blind = blind;
	
	for(let i = x + 1; i < n; i++) {
        if(board[i][y] === 6) break;
        else if(board[i][y] == 0) {
            if(visited[i][y]) continue;

            t_blind -= 1;
            visited[i][y] = true;
        }
        else continue;
    }
	
	return t_blind;
}
const Right = (x, y, visited, blind) => {
	let t_blind = blind;
	
	for(let i = y + 1; i < m; i++) {
        if(board[x][i] === 6) break;
        else if(board[x][i] == 0) {
            if(visited[x][i]) continue;

            t_blind -= 1;
            visited[x][i] = true;
        }
        else continue;
    }
	
	return t_blind;
}
const Left = (x, y, visited, blind) => {
	let t_blind = blind;
	
	for(let i = y - 1; i > - 1; i--) {
        if(board[x][i] === 6) break;
        else if(board[x][i] == 0) {
            if(visited[x][i]) continue;

            t_blind -= 1;
            visited[x][i] = true;
        }
        else continue;
    }
	
	return t_blind;
}

let min = Infinity;

const solution = (direc_str, index, visited, blind) => {
	if(index === direc_str.length) {
        if(min > blind) min = blind < 0 ? 0 : blind;
        return;
    }
	
	const direc_num = Number(direc_str[index]);
	const [x, y, cctv_num] = cctv[index];
	const see_direc = direc[cctv_num][direc_num];

	let t_blind = blind
	
	see_direc.forEach(d => {
		if(d === "u") t_blind = Up(x, y, visited, t_blind);
		if(d === "d") t_blind = Down(x, y, visited, t_blind);
		if(d === "r") t_blind = Right(x, y, visited, t_blind);
		if(d === "l") t_blind = Left(x, y, visited, t_blind);
	})
	
	solution(direc_str, index + 1, visited, t_blind);
}

test_case.forEach(direc_str => {
	const visited= board.map(line => line.slice());

	solution(direc_str, 0, visited, blind);
})

console.log(min);