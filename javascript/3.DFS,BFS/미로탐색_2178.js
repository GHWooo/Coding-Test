//solved
const fs = require('fs');
[nm, ...map] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
[n, m] = nm.split(' ').map(Number);

const search = () => {
    let visited = Array.from({length: n}, ()=>[]);
    let queue = []
    let current = [0, 0, 1];

    visited[0][0] = 1;
    queue.push(current);

    while(queue.length){
        [x, y, count] = queue.shift();
        if(x === n-1 && y === m-1){
            console.log(count); process.exit();
        }
        for(move of [[x+1, y], [x-1, y], [x, y+1], [x, y-1]]){
            if(move[0] > -1 && move[0] < n && move[1] > -1 && move[1] < m 
                && !visited[move[0]][move[1]] && map[move[0]][move[1]] === '1'){
                visited[move[0]][move[1]] = 1;
                move.push(count+1);
                queue.push(move);
            }
        }
    }
}
search();