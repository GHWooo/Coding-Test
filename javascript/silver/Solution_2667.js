//solved
const fs = require('fs');
[n, ...list] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const checkIndex = (x, y) => {
    if(x > -1 && x < n && y > -1 && y < n) return true;
    return false;
}
const dfs = (x, y, map, count) => {
    map[x][y] = 0;
    ++count;
    for([mx, my] of [[x+1, y], [x-1, y], [x, y+1], [x, y-1]]){
        if(checkIndex(mx, my) && map[mx][my] === '1') count = dfs(mx, my, map, count);
    }
    return count;
}
const search = () => {
    let map = list.map(x=>x.split(''));
    let result = [];

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(map[i][j] === '1'){
                let count = 0;
                result.push(dfs(i, j, map, count));
            } 
        }
    }
    result.sort(function(a, b){
        return a - b;
    });
    console.log(result.length);
    result.map(x=> console.log(x));
}
search();