// 해결
const fs = require('fs');
[n, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
n = parseInt(n);
input = input.map(x=>x.split(' ').map(Number));
let index = 0;
let result = [];

while(index < input.length){
    const l = input[index];
    let board = Array.from({length: l}, ()=>[]);
    [sx, sy] = input[index+1];
    [ex, ey] = input[index+2];

    const dx = [1, 2, 2, 1, -1, -2, -2, -1];
    const dy = [2, 1, -1, -2, -2, -1, 1, 2];

    let queue = [[sx, sy, 0]];
    while(queue.length > 0){
        [qx, qy, qc] = queue.shift();
        if(qx === ex && qy === ey){
            result.push(qc); break;
        }
        for(let i = 0; i < 8; i++){
            const nx = qx + dx[i], ny = qy + dy[i];
            if(nx > -1 && ny > -1 && nx < l && ny < l){
                if(!board[nx][ny]){
                    board[nx][ny] = 1;
                    queue.push([nx, ny, qc+1]);
                }
            }
        }
    }

    index += 3;
};
console.log(result.join('\n'));