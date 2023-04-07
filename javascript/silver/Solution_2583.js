//solved
const fs = require('fs');
[mnk, ...boxes] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
[m, n, k] = mnk.split(' ').map(Number);
boxes = boxes.map(x=>{
    [sx, sy, ex, ey] = x.split(' ').map(Number);
    return [[sx, sy], [ex, ey]];
});

let area = Array.from({length: m}, ()=>[]);
for(box of boxes){
    for(let i = box[0][1]; i < box[1][1]; i++){
        for(let j = box[0][0]; j < box[1][0]; j++){
            if(!area[i][j]) area[i][j] = 1;
        }
    }
}

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
let result = [];
let queue = [];
for(let i = 0; i < m; i++){
    for(let j = 0; j < n; j++){
        if(!area[i][j]){
            queue.push([i, j]);
            area[i][j] = 1;
            let count = 0;
            while(queue.length > 0){
                [qx, qy] = queue.shift();
                count++;
                for(let i = 0; i < 4; i++){
                    nx = qx + dx[i]; ny = qy + dy[i];
                    if(nx > -1 && ny > -1 && nx < m && ny < n){
                        if(!area[nx][ny]){
                            queue.push([nx, ny]);
                            area[nx][ny] = 1;
                        }
                    }
                }
            }
            result.push(count);
        } 
    }
}
console.log(result.length+'\n'+result.sort((a, b)=>a-b).join(' '));