// solved
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    [nm, ...list] = input;
    [n, m] = nm.split(' ').map(Number);
    let questions = list.splice(n, m);
    let poketMap = new Map();
    for(let i = 0; i < n; i++) poketMap.set(list[i], i+1);

    let result = [];
    for(q of questions){
        if(q[0].charCodeAt() < 58) result.push(list[parseInt(q) - 1]);
        else result.push(poketMap.get(q));
    }
    return result.join('\n');
}

console.log(solution(input));