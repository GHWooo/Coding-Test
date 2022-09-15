//solved
const fs = require('fs');
input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.map(x=>x.split(' ').map(Number));
let index = 0;
let result = [];

const dx = [1, -1, 0, 0, 1, -1, 1, -1];
const dy = [0, 0, 1, -1, 1, -1, -1, 1];

const graph = (index, w, h) => {
    let count = 0;
    const start = index;
    const end = index+h;

    const dfs = (x, y) => {
        input[x][y] = 0;
        for(let i = 0; i < 8; i++){
            nx = x + dx[i];
            ny = y + dy[i];
            if(nx >= start && nx < end && ny >= 0 && ny < w){
                if(input[nx][ny] === 1) dfs(nx, ny);
            }
        }
    }

    for(let i = start; i < end; i++){
        for(let j = 0; j < w; j++){
            if(input[i][j] === 1){
                dfs(i, j); count++;
            } 
        }
    }
    return count;
}
while(index < input.length-1){
    [w, h] = input[index];
    result.push(graph(++index, w, h));
    index += h;
}
console.log(result.join('\n'));