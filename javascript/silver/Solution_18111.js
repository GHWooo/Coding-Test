//solved
const fs = require('fs');
[nmb, ...ground] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
[n, m, b] = nmb.split(' ').map(Number);
ground = ground.map(x=>x.split(' ').map(Number));
let visited = Array.from({length: 257}, ()=>0);

const makeGround = (h) => {
    let inven = b;
    let count = 0;
    let mayNeed = 0;
    let mayHave = 0;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(ground[i][j] > h){
                mayHave += ground[i][j] - h;
            }
            if(ground[i][j] < h){
                mayNeed += h - ground[i][j];
            }
        }
    }
    if(inven + mayHave >= mayNeed){
        count += ((mayHave * 2) + mayNeed);
        return count;
    }
    else return false;
}

for(let i = 0; i < 257; i++){
    if(visited[i] === 0){
        if(makeGround(i) !== false) visited[i] = [makeGround(i), i];
        else visited[i] = -1;
    }
}
visited = visited.filter(x=>{
    if(x.length > 1) return x;
}).sort((a, b) => {
    if(a[0] === b[0]) return b[1] - a[1];
    return a[0] - b[0];
});
console.log(visited[0].join(' '));