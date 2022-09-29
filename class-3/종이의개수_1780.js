// solved
const fs = require('fs'); 
[n, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
n = parseInt(n);
input = input.map(x=>x.split(' '));

let countNum = new Map();
countNum.set('-1', 0);
countNum.set('0', 0);
countNum.set('1', 0);

const solution = (x, y, l) => {
    let temp = input[x][y];
    let state = true;
    for(let i = x; i < x + l; i++){
        for(let j = y; j < y + l; j++){
            if(temp !== input[i][j]){
                state = false; break;
            }
        }
        if(!state) break;
    }
    if(state) countNum.set(temp, countNum.get(temp) + 1);
    else{
        if(l <= 3){
            for(let i = x; i < x + l; i++){
                for(let j = y; j < y + l; j++){
                    countNum.set(input[i][j], countNum.get(input[i][j]) + 1);
                }
            }
        }
        else{
            for(let i = x; i < x + l; i += l / 3){
                for(let j = y; j < y + l; j += l / 3){
                    solution(i, j, l / 3);
                }
            }
        }
    } 
}
solution(0, 0, n);
console.log(countNum.get('-1') + '\n' + countNum.get('0') + '\n' + countNum.get('1'));