// memory overflow
// Map 객체 사용 필요 후에 다시 풀어 볼 것
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    [nm, ...list] = input;
    [n, m] = nm.split(' ').map(Number);
    let illustrated = input.splice(0, n);
    let result = [];
    for(i of input){
        if(i[0].charCodeAt() < 58){
            result.push(illustrated[parseInt(i) - 1]);
        } 
        else{
            illustrated.map((a, b) => {
                if(a === i) result.push(b + 1);
            })
        }
    }
    return result.join('\n');
}

console.log(solution(input));