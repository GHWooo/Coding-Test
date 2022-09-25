//solved
const fs = require('fs');
[nm, ...board] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
[n, m] = nm.split(' ').map(Number);
board = board.map(x=>x.split(''));
let min = 33;

const checkChess = (x, y) => {
    let black = 0;
    let white = 0;
    for(let i = x; i < x + 8; i++){
        for(let j = y; j < y + 8; j++){
            if((i + j) % 2 === 0){
                if(board[i][j] === 'B') white++;
                else black++;
            }
            else{
                if(board[i][j] === 'W') white++;
                else black++;
            }
        }
    }
    return Math.min(black, white);
}
for(let i = 0; i <= n - 8; i++){
    for(let j = 0; j <= m - 8; j++){
        const minVal = checkChess(i, j);
        if(min > minVal) min = minVal;
    }
}
console.log(min);