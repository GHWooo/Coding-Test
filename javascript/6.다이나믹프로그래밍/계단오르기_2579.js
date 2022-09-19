// solved
const fs = require('fs');
[n, ...stairs] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(x=>+x);

let visited = [[stairs[0], 0]];
if(stairs.length > 1){
    visited.push([stairs[1], stairs[0] + stairs[1]]);
    if(stairs.length > 2){
        for(let i = 2; i < stairs.length; i++){
            visited.push([stairs[i] + Math.max(...visited[i-2]),
                        stairs[i] + visited[i-1][0]]);
        }
    }
}
console.log(Math.max(...visited[visited.length-1]));